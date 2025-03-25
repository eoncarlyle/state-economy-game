module StateEconomyGame.Service

open System
open System.Threading.Tasks
open System.Data.Common
open Dapper
open Microsoft.FSharp.Core
open Dapper.FSharp.SQLite
open Microsoft.Data.Sqlite //! Had annoying SQLite interop issues

open Quartz
open StateEconomyGame.Model
open StateEconomyGame.Constants
open StateEconomyGame.Util
open Giraffe.ComputationExpressions

//! F# lists != .NET lists, this got me in some type trouble with 4e18b9d

let rnd = Random()
let puzzleAnswerTable = table'<PuzzleAnswer> "target_states"
let puzzleSessionTable = table'<PuzzleSession> "puzzle_sessions"
let guessTable = table'<Guess> "guesses"
let puzzleAnswerHistoryTable = table'<PuzzleAnswerHistory> "puzzle_answer_history"

// H/T to Michael
let taskMap<'a, 'b> (fn: 'a -> 'b) (a: Task<'a>) : Task<'b> =
    task {
        let! results = a
        return fn results
    }

let taskGet (task: Task<'a>) : 'a = task.Result //Why no Result.get?

let validationBoolOption isValid appErrorOnFail =
    if isValid then Option.None else Some appErrorOnFail

let getAppErrorDto code message = { code = code; message = message }

let internalErrorDto = getAppErrorDto 500 "Internal server error"

let sqliteConnection sqliteDbFileName =
    use connection = new SqliteConnection($"Data Source={sqliteDbFileName}")
    OptionTypes.register ()
    connection.Open()
    connection

let getTotalGdp state =
    let rec loop (economyNode: EconomyNode) =
        match economyNode.children with
        | [] -> economyNode.gdp
        | children -> children |> List.map loop |> List.sum

    Convert.ToInt64(loop state.stateEconomy)

let getOneFromQuery =
    taskMap (fun result ->
        match Seq.tryHead result with
        | Some value -> Ok value
        | None -> Error "No elements found")

let getPuzzleAnswer (dbConnection: DbConnection) =
    select {
        for puzzleAnswer in puzzleAnswerTable do
            selectAll
            orderByDescending puzzleAnswer.id
    }
    |> dbConnection.SelectAsync<PuzzleAnswer>
    |> taskMap (fun result ->
        match Seq.tryHead result with
        | Some value -> Ok value
        | None -> Error "Puzzle answer not found")

let tryGetState stateName =
    let maybeState =
        states |> List.tryFind (fun state -> state.name = StateName.toString stateName)

    match maybeState with
    | Some state -> Ok state
    | None -> Error "$State '{stateName}' does not exist"

let getPuzzleAnswerState dbConnection : Task<Result<State, string>> =
    task {
        let! puzzleAnswer = getPuzzleAnswer dbConnection

        return
            puzzleAnswer
            |> Result.bind (fun a -> StateName.create a.name)
            |> Result.bind tryGetState
    }

let getPuzzleAnswerEconomy dbConnection : Task<AppResult<DtoOutStateEconomy>> =
    task {
        let! puzzleAnswer = getPuzzleAnswer dbConnection
        let! state = getPuzzleAnswerState dbConnection

        return
            match puzzleAnswer, state with
            | Ok answer, Ok state ->
                Ok
                    { economy = state.stateEconomy
                      totalGdp = answer.gdp }
            | _ -> Error internalErrorDto
    }

let getGuesses (dbConnection: DbConnection) puzzleSessionId =
    select {
        for guess in guessTable do
            where (guess.puzzleSessionId = puzzleSessionId)
    }
    |> dbConnection.SelectAsync<Guess>

let getPuzzleSession (dbConnection: DbConnection) puzzleSessionId =
    select {
        for puzzleSession in puzzleSessionTable do
            where (puzzleSession.id = puzzleSessionId)
    }
    |> dbConnection.SelectAsync<PuzzleSession>
    |> getOneFromQuery

let postPuzzleSession (dbConnection: DbConnection) =
    let guid = Guid.NewGuid().ToString()
    let now = DateTime.Now

    insert {
        into puzzleSessionTable

        value
            { id = guid
              lastRequestTimestamp = 0
              createdAt = now
              updatedAt = now }
    }
    |> dbConnection.InsertAsync
    |> _.Wait()

    { id = guid }

let getPuzzleAnswerForSession (dbConnection: DbConnection) id =
    task {
        let! sessionResult = getPuzzleSession dbConnection id

        let maybeSessionGuesses =
            match sessionResult with
            | Ok session -> getGuesses dbConnection session.id |> _.Result |> Some
            | Error _ -> None

        let validatedSessionResult =
            sessionResult
            |> Result.mapError (fun msg -> getAppErrorDto 404 msg)
            |> Result.bind (fun session ->
                match maybeSessionGuesses with
                | Some guesses ->
                    if (Seq.length guesses < MAX_GUESSES) then
                        Error(getAppErrorDto 400 $"{MAX_GUESSES} guesses must be made before answer can be requested")
                    else
                        Ok session
                | None -> Ok session)

        let puzzleAnswerState = getPuzzleAnswerState dbConnection |> taskGet

        return
            match validatedSessionResult, maybeSessionGuesses, puzzleAnswerState with
            | Ok _, Some _, Ok answer ->
                Ok
                    {| id = id
                       targetStateName = answer.name |}
            | Error validationError, _, _ -> Error validationError
            | _ -> Error internalErrorDto
    }

let postGuess (dbConnection: DbConnection) (guessSubmission: DtoInGuessSubmission) =
    task {
        let! sessionResult = getPuzzleSession dbConnection guessSubmission.id

        let maybeSessionGuesses =
            match sessionResult with
            | Ok session -> getGuesses dbConnection session.id |> _.Result |> Some
            | Error _ -> None

        let guessStateResult =
            StateName.create guessSubmission.guessStateName |> Result.bind tryGetState

        let validatedSessionResult =
            sessionResult
            |> Result.mapError (fun msg -> getAppErrorDto 404 msg)
            |> Result.bind (fun session ->
                match guessStateResult with
                | Ok _ -> Ok session
                | Error msg -> Error(getAppErrorDto 404 msg))
            |> Result.bind (fun session ->
                match maybeSessionGuesses with
                | Some guesses ->
                    if (Seq.length guesses >= MAX_GUESSES) then
                        Error(getAppErrorDto 400 "Too many requests have been made for this game")
                    elif (guesses |> Seq.exists (fun g -> g.stateName = guessSubmission.guessStateName)) then
                        Error(getAppErrorDto 400 "Duplicate of previous request")
                    else
                        Ok session
                | None -> Ok session)

        let! answerStateResult = getPuzzleAnswerState dbConnection

        return
            match validatedSessionResult, guessStateResult, answerStateResult with
            | Ok session, Ok guessState, Ok answerState ->
                update {
                    for puzzleSession in puzzleSessionTable do
                        setColumn puzzleSession.lastRequestTimestamp guessSubmission.requestTimestamp
                        where (puzzleSession.id = session.id)
                }
                |> dbConnection.UpdateAsync
                |> _.Wait()

                let time = DateTime.Now

                insert {
                    into guessTable

                    value
                        { id = Guid.NewGuid().ToString()
                          puzzleSessionId = session.id
                          stateName = guessState.name
                          createdAt = time
                          updatedAt = time }
                }
                |> dbConnection.InsertAsync
                |> _.Wait()

                let guessStateGdp = getTotalGdp guessState |> float
                let answerStateGdp = getTotalGdp answerState |> float

                Ok
                    { id = session.id
                      bearing = haversineBearing guessState answerState
                      gdpRatio = Math.Round(answerStateGdp / guessStateGdp, 2)
                      isWin = guessState.name = answerState.name }
            | Error validationError, _, _ -> Error validationError
            | _ -> Error internalErrorDto
    }

let getPuzzleAnswerCount (dbConnection: DbConnection) =
    task {
        return!
            select {
                for puzzleAnswer in puzzleAnswerTable do
                    selectAll
            }
            |> dbConnection.SelectAsync<PuzzleAnswer>
            |> taskMap Seq.length
    }

let updatePuzzleAnswerHistory (dbConnection: DbConnection) =
    task {
        let! puzzleAnswer = getPuzzleAnswer dbConnection

        puzzleAnswer
        |> Result.map _.name
        |> Result.iter (fun puzzleAnswer ->
            insert {
                into puzzleAnswerHistoryTable

                value
                    { name = puzzleAnswer
                      puzzleDate = DateTime.Today.AddDays -1 }
            }
            |> dbConnection.InsertAsync
            |> ignore)
    }

let cleanPuzzleAnswers (dbConnection: DbConnection) =
    task {

        let! puzzleAnswers =
            select {
                for puzzleAnswer in puzzleAnswerTable do
                    selectAll
            }
            |> dbConnection.SelectAsync<PuzzleAnswer>

        let minId = puzzleAnswers |> Seq.map _.id |> Seq.min

        if minId > 1 then
            dbConnection.Execute($"UPDATE target_states SET id = id - {(minId - 1)}, updatedAt = CURRENT_TIMESTAMP")
            |> ignore
    }

let updatePuzzleAnswer (dbConnection: DbConnection) =
    task {
        let! unselectableTargetStateNames =
            select {
                for puzzleAnswer in puzzleAnswerTable do
                    selectAll
            } // What is done below should really be done by the type mapper instead
            |> dbConnection.SelectAsync<PuzzleAnswer>
            |> taskMap (Seq.map _.name)
            |> taskMap (fun puzzleAnswers ->
                puzzleAnswers |> Seq.rev |> Seq.truncate PUZZLE_ANSWER_RETENTION |> Seq.toList)

        let selectableStates =
            states
            |> List.filter (fun state -> List.contains state.name unselectableTargetStateNames |> not)

        let newState = List.item (rnd.Next(0, selectableStates.Length)) selectableStates
        Console.WriteLine($"Selected {newState.name} as the next puzzle answer")

        let now = DateTime.Now
        let! id = getPuzzleAnswerCount dbConnection |> taskMap (fun x -> x + 1)

        let newPuzzleAnswer =
            { id = id
              name = newState.name
              gdp = getTotalGdp newState
              createdAt = now
              updatedAt = now }

        insert {
            into puzzleAnswerTable
            value newPuzzleAnswer
        }
        |> dbConnection.InsertAsync
        |> ignore
    }

type DailyJob() =
    interface IJob with
        member this.Execute context =

            task {
                let dataMap = context.JobDetail.JobDataMap
                let dbConnection = dataMap.GetString SQLITE_DB_FILE_NAME_KEY |> sqliteConnection
                do! updatePuzzleAnswerHistory dbConnection
                do! cleanPuzzleAnswers dbConnection
                do! updatePuzzleAnswer dbConnection
            }
