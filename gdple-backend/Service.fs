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


//! F# lists != .NET lists, this got me in some type trouble with 4e18b9d

// H/T to Michael
let taskMap<'a, 'b> (fn: 'a -> 'b) (a: Task<'a>) : Task<'b> =
    task {
        let! results = a
        return fn results
    }

let taskGet (task: Task<'a>) = task.Result //Why no Result.get?

let validationBoolOption (isValid: bool) (appErrorOnFail: AppErrorDto) =
    if isValid then Option.None else Some appErrorOnFail

let getAppErrorDto code message : AppErrorDto = { code = code; message = message }

let rnd = Random()

let internalErrorDto = getAppErrorDto 500 "Internal server error"

let validationAppResultOption failCode failMessage result =
    match result with
    | Ok _ -> Option.None
    | Error _ -> getAppErrorDto failCode failMessage |> Some

let sqliteConnection (sqliteDbFileName: string) = //! Use this as parameter
    use connection = new SqliteConnection($"Data Source={sqliteDbFileName}")
    OptionTypes.register ()
    connection.Open()
    connection

let puzzleAnswerTable = table'<PuzzleAnswer> "target_states"
let puzzleSessionTable = table'<PuzzleSession> "puzzle_sessions"
let guessTable = table'<Guess> "guesses"
let puzzleAnswerHistoryTable = table'<PuzzleAnswerHistory> "puzzle_answer_history"

let getTotalGdp (economyNode: State) =
    let rec loop (economyNode: EconomyNode) =
        match economyNode.children with
        | [] -> economyNode.gdp
        | children -> children |> List.map loop |> List.sum

    Convert.ToInt64(loop economyNode.stateEconomy)

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


let getState (stateName: StateName) =
    states |> List.find (fun state -> state.name = StateName.toString stateName)

let getPuzzleAnswerState dbConnection : Task<Result<State, string>> =
    task {
        let! puzzleAnswer = getPuzzleAnswer dbConnection

        return
            puzzleAnswer
            |> Result.bind (fun a -> StateName.create a.name)
            |> Result.map getState
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
        let! puzzleSession = getPuzzleSession dbConnection id

        let sessionGuesses =
            puzzleSession
            |> Result.map (fun session -> getGuesses dbConnection session.id |> _.Result)

        let validationErrors =
            puzzleSession
            |> validationAppResultOption 404 "`puzzleSession` not found"
            |> Option.orElseWith (fun _ ->
                validationBoolOption
                    (sessionGuesses
                     |> Result.exists (fun guesses -> Seq.length guesses >= MAX_GUESSES))
                    (getAppErrorDto 422 $"{MAX_GUESSES} guesses must be made before answer can be requested"))

        let puzzleAnswerState = getPuzzleAnswerState dbConnection |> taskGet

        return
            match puzzleSession, sessionGuesses, puzzleAnswerState, validationErrors with
            | Ok _, Ok _, Ok answer, None ->
                Ok
                    {| id = id
                       targetStateName = answer.name |}
            | _, _, _, Some validationError -> Error validationError
            | _ -> Error internalErrorDto
    }


let postGuess (dbConnection: DbConnection) (guessSubmission: DtoInGuessSubmission) =

    task {
        let! sessionResult = getPuzzleSession dbConnection guessSubmission.id

        let guessStateResult =
            StateName.create guessSubmission.guessStateName |> Result.map getState

        let sessionGuesses =
            sessionResult
            |> Result.map (fun session -> getGuesses dbConnection session.id |> taskGet)

        let! answerStateResult = getPuzzleAnswerState dbConnection

        // 1)  Understand Haskell's love of infix operators, this is getting time-consuming with these `ModuleName.function`
        // 2) Can be difficult to know when you're whitespacing correctly on long statements
        let maybeValidationErrors =
            sessionResult
            |> validationAppResultOption 404 "`puzzleSession` not found"
            |> Option.orElseWith (fun _ ->
                guessStateResult
                |> validationAppResultOption 422 $"State '{guessSubmission.guessStateName}' does not exist")
            |> Option.orElseWith (fun _ ->
                validationBoolOption
                    (sessionGuesses
                     |> Result.exists (fun guesses -> Seq.length guesses < MAX_GUESSES))
                    (getAppErrorDto 422 "Too many requests have been made for this game"))
            |> Option.orElseWith (fun _ ->
                validationBoolOption
                    (sessionGuesses
                     |> Result.exists (fun guesses ->
                         guesses
                         |> Seq.exists (fun guess -> guess.stateName = guessSubmission.guessStateName))
                     |> not)
                    (getAppErrorDto 422 "Duplicate of previous request"))

        return
            match sessionResult, guessStateResult, answerStateResult, maybeValidationErrors with
            | Ok session, Ok guessState, Ok answerState, None ->
                let distance = haversineDistance guessState answerState

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
            | _, _, _, Some validationError -> Error validationError
            | _ -> Error internalErrorDto
    }

let deleteObsoletePuzzleSessions (dbConnection: DbConnection) =
    task {
        let obsoleteDate = DateTime.Now.Subtract(TimeSpan(0, 1, 0))

        let obsoleteSessionCount =
            delete {
                for puzzleSession in puzzleSessionTable do
                    where (puzzleSession.createdAt < obsoleteDate)
            }
            |> dbConnection.DeleteAsync

        Console.WriteLine($"Deleting {obsoleteSessionCount} obsolete sessions")
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
            |> dbConnection.InsertAsync |> ignore)
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

let deleteObsoletePuzzleAnswers (dbConnection: DbConnection) =

    task {
        let! puzzleAnswerCount = getPuzzleAnswerCount dbConnection
        let obsoletePuzzleAnswerCount = puzzleAnswerCount - PUZZLE_ANSWER_RETENTION + 1

        if obsoletePuzzleAnswerCount > 0 then
            delete {
                for puzzleAnswer in puzzleAnswerTable do
                    where (puzzleAnswer.id <= obsoletePuzzleAnswerCount)
            }
            |> dbConnection.DeleteAsync
            |> taskGet
            |> ignore
            Console.WriteLine($"Deleting {obsoletePuzzleAnswerCount} obsolete puzzle answers")

            dbConnection.Execute(
                $"UPDATE target_states SET id = id - {obsoletePuzzleAnswerCount}, updatedAt = CURRENT_TIMESTAMP"
            )
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
            |> taskMap Seq.toList

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
