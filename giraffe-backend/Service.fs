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

let getTotalGdp (economyNode: State) =
    let rec loop (economyNode: EconomyNode) =
        match economyNode.children with
        | Some children -> children |> List.map loop |> List.sum
        | _ -> economyNode.gdp |> Option.defaultValue 0

    Convert.ToInt64(loop economyNode.stateEconomy)

let getOneFromQuery =
    taskMap (fun result ->
        match Seq.tryHead result with
        | Some value -> Ok value
        | None -> Error "No elements found")

let getPuzzleAnswer (dbConnection: DbConnection) =
    select {
        for puzzleAnswer in puzzleAnswerTable do //! Ideally would use 'top' instead
            selectAll
            orderByDescending puzzleAnswer.id
    }
    |> dbConnection.SelectAsync<PuzzleAnswer>
    |> taskMap (fun result ->
        match Seq.tryHead result with
        | Some value -> Ok value
        | None -> Error "Puzzle answer not found")


let getState (stateName: StateName) = //! Type inference legitimately didn't work on this until I used the pipeline operator
    states |> List.find (fun state -> state.name = StateName.toString stateName)

let getPuzzleAnswerState dbConnection : Task<Result<State, string>> =
    //! b6053e8: semi-interesting type error
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
            match puzzleAnswer, state with // Don't love the double result here
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


let postPuzzleSession (dbConnection: DbConnection) = //ea18bd58-b546-4a50-a43a-7977eb30e8f0: spot the problem!
    let guid = Guid.NewGuid().ToString()
    let now = DateTime.Now

    insert {
        into puzzleSessionTable

        value
            { id = guid
              lastRequestTimestamp = 0 //Option.None
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
        let! puzzleSession = getPuzzleSession dbConnection guessSubmission.id

        let guessState =
            StateName.create guessSubmission.guessStateName |> Result.map getState

        let sessionGuesses =
            puzzleSession
            |> Result.map (fun session -> getGuesses dbConnection session.id |> taskGet)

        let! puzzleAnswerState = getPuzzleAnswerState dbConnection

        //! 1)  Understand Haskell's love of infix operators, this is getting time-consuming with these `ModuleName.function`  2) Can be difficult to know when you're whitespacing correctly on long statements
        let validationErrors =
            puzzleSession
            |> validationAppResultOption 404 "`puzzleSession` not found"
            |> Option.orElseWith (fun _ ->
                guessState
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
            match puzzleSession, guessState, puzzleAnswerState, validationErrors with
            | Ok session, Ok guesses, Ok answer, None ->
                let distance = haversineDistance guesses answer

                let maxDistance =
                    states |> List.map (fun state -> haversineDistance guesses state) |> List.max

                update {
                    for puzzleSession in puzzleSessionTable do
                        setColumn puzzleSession.lastRequestTimestamp guessSubmission.requestTimestamp //(Some guessSubmission.requestTimestamp)
                        where (puzzleSession.id = session.id)
                }
                |> dbConnection.UpdateAsync
                |> _.Wait()

                let time = DateTime.Now

                insert {
                    into guessTable

                    value
                        { id = Guid.NewGuid().ToString() //Guid.NewGuid.ToString() lmao
                          puzzleSessionId = session.id
                          stateName = guesses.name
                          createdAt = time
                          updatedAt = time }
                }
                |> dbConnection.InsertAsync
                |> _.Wait()

                Ok
                    { id = session.id
                      distance = distance
                      bearing = haversineBearing guesses answer
                      percentileScore = (100.0 * (1.0 - distance / maxDistance)) |> Math.Round }
            | _, _, _, Some validationError -> Error validationError
            | _ -> Error internalErrorDto
    }

let deleteObsoletePuzzleSessions (dbConnection: DbConnection) =
    task {
        let obsoleteDate = DateTime.Now.Subtract(TimeSpan(0, 1, 0))

        delete {
            for puzzleSession in puzzleSessionTable do
                where (puzzleSession.createdAt < obsoleteDate)
        }
        |> dbConnection.DeleteAsync
        |> ignore
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
        // The commented pieces aren't possible, this is a sign I don't understand something!
        // let updatePuzzleAnswer (puzzleAnswer: PuzzleAnswer) =
        //     {id=puzzleAnswer.id-obsoletePuzzleAnswerCount; name=puzzleAnswer.name; gdp=puzzleAnswer.gdp}
        // update {
        //     for puzzleAnswer in puzzleAnswerTable do
        //         set (updatePuzzleAnswer puzzleAnswer)
        //     } |> ignore
        let updatedAt = DateTime.Now

        dbConnection.Execute(
            $"UPDATE puzzle_sessions SET id = id - {obsoletePuzzleAnswerCount}, updatedAt = {updatedAt}"
        )
        |> ignore
    }

let updateTargetState (dbConnection: DbConnection) =
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

        let newState = List.item (rnd.Next(0, selectableStates.Length)) selectableStates //Why are the parenthesis needed?
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


type DailyJob =
    interface IJob with
        member this.Execute context =
            task {
                let dataMap = context.JobDetail.JobDataMap
                let dbConnection = dataMap.GetString SQLITE_DB_FILE_NAME_KEY |> sqliteConnection
                do! deleteObsoletePuzzleSessions dbConnection
                do! deleteObsoletePuzzleAnswers dbConnection
                do! updateTargetState dbConnection
            }
