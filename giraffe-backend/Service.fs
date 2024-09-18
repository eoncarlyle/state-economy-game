module StateEconomyGame.Service

open System
open System.Collections.Generic
open System.IO
open System.Runtime.InteropServices.JavaScript
open System.Threading.Tasks
open System.Data.Common
open Dapper
open Giraffe
open Microsoft.FSharp.Core
open Dapper.FSharp.SQLite
open Microsoft.Data.Sqlite //! Had annoying SQLite interop issues
open System.Text.Json

open StateEconomyGame.Model
open StateEconomyGame.Constants
open StateEconomyGame.Util


//! F# lists != .NET lists, this got me in some type trouble with 4e18b9d]

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

let internalErrorDto = getAppErrorDto 500 "Internal server error"

let validationAppResultOption failCode failMessage result =
    match result with
    | Ok _ -> Option.None
    | Error e -> getAppErrorDto failCode failMessage |> Some


let sqliteConnection (sqliteDbFileName: string) = //! Use this as parameter
    use connection = new SqliteConnection($"Data Source={sqliteDbFileName}")
    OptionTypes.register () |> ignore
    connection.Open() |> ignore
    connection

let puzzleAnswerTable = table'<PuzzleAnswer> "target_states"
let puzzleSessionTable = table'<PuzzleSession> "puzzle_sessions"
let guessTable = table'<Guess> "guesses"

let getTotalGdp (economyNode: State) =
    let rec loop (economyNode: EconomyNode) =
        match economyNode.children with
        | Some children -> children |> List.map loop |> List.sum
        | _ -> economyNode.gdp |> Option.defaultValue 0

    loop economyNode.stateEconomy |> Math.Round |> Convert.ToInt64

//! d1d6f54: The type providers get to be a pain in the ass for nested classes, reference MgetTotalGdp
//! Don't love the double unions but it's whatever

let getOneFromQuery =
    taskMap (fun result ->
        match Seq.tryHead result with
        | Some value -> Ok value
        | None -> Error "No elements found")

let MgetPuzzleAnswer (dbConnection: DbConnection) =
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

let getPuzzleAnswer (dbConnection: DbConnection) =
    select {
        for puzzleAnswer in puzzleAnswerTable do //! Ideally would use 'top' instead
            selectAll
            orderByDescending puzzleAnswer.id
    }
    |> dbConnection.SelectAsync<PuzzleAnswer>
    |> taskMap (fun result ->
        match Seq.tryHead result with
        | Some value -> value
        | None -> failwith "Puzzle answer not found") //Should literally never be thrown, probabaly should enforce something on startup to this end


let getState (stateName: StateName) = //! Type inference legitamitely didn't work on this until I used the pipeline operator
    states |> List.find (fun state -> state.name = StateName.toString stateName)

let getPuzzleAnswerEconomy dbConnection : Task<AppResult<DtoOutStateEconomy>> =
    //! b6053e8: semi-interesting type error
    task {
        //Here: finish data wrangling
        let puzzleAnswer = MgetPuzzleAnswer dbConnection |> taskGet

        let state =
            puzzleAnswer
            |> Result.bind (fun answer -> StateName.create answer.name)
            |> Result.map getState

        return
            match (puzzleAnswer, state) with
            | (Ok answer, Ok state) ->
                Ok
                    { economy = state.stateEconomy
                      totalGdp = answer.gdp }
            | _ -> Error internalErrorDto
    }

let getGuesses puzzleSessionId (dbConnection: DbConnection) =
    select {
        for guess in guessTable do
            where (guess.puzzleSessionId = puzzleSessionId)
    }
    |> dbConnection.SelectAsync<Guess>

let getGuessCount puzzleSessionId (dbConnection: DbConnection) =
    getGuesses puzzleSessionId dbConnection |> taskMap Seq.length //Do not understand the typing issues here

let getPuzzleSession puzzleSessionId (dbConnection: DbConnection) =
    select {
        for puzzleSession in puzzleSessionTable do
            where (puzzleSession.id = puzzleSessionId)
    }
    |> dbConnection.SelectAsync<PuzzleSession>
    |> getOneFromQuery

let getPuzzleAnswer (unverifiedPuzzleSessionId: string) (dbConnection: DbConnection) =
    let puzzleSession = getPuzzleSession unverifiedPuzzleSessionId dbConnection

    let guessCount =
        puzzleSession.Result
        |> Result.map (fun sessionId -> getGuessCount sessionId.id dbConnection |> taskGet)

    match guessCount with
    | Ok count when count >= MAX_GUESSES ->
        getPuzzleAnswer dbConnection
        |> taskGet
        |> fun answer ->
            { id = unverifiedPuzzleSessionId
              targetStateName = answer.name }
            |> Ok //! I don't love doing this, there has to be a better way
    | _ ->
        getAppErrorDto 422 $"{MAX_GUESSES} must be made before an answer can be requested"
        |> Error //!Doesn't show complete pattern matching with 'Ok count when count < MAX_GUESSES'

let postPuzzleSession (dbConnection: DbConnection) =
    let guid = System.Guid.NewGuid().ToString()
    let time = DateTime.Now

    insert {
        into puzzleSessionTable

        value
            { id = guid
              lastRequestTimestamp = Option.None
              createdAt = time
              updatedAt = time }
    }
    |> dbConnection.InsertAsync
    |> fun task -> task.Wait()

    { id = guid }

let postGuess (guessSubmission: DtoInGuessSubmission) (dbConnection: DbConnection) =
    let puzzleSession = getPuzzleSession guessSubmission.id dbConnection |> taskGet

    let guesses =
        puzzleSession
        |> Result.map (fun session -> getGuesses session.id dbConnection |> taskGet)

    //! 1)  Understand Haskell's love of infix operators, this is getting time consuming with these `ModuleName.function`  2) Can be difficult to know when you're whitespacing correctly on long statements
    let validationErrors =
        Option.None
        |> Option.orElseWith (fun _ -> puzzleSession |> validationAppResultOption 404 "`puzzleSession` not found")
        |> Option.orElseWith (fun _ ->
            StateName.create guessSubmission.guessStateName
            |> validationAppResultOption 422 $"State '{guessSubmission.guessStateName}' does not exist")
        |> Option.orElseWith (fun _ ->
            validationBoolOption
                (guesses |> Result.exists (fun guesses -> Seq.length guesses >= MAX_GUESSES))
                (getAppErrorDto 422 "Too many requests have been made for this game"))
        |> Option.orElseWith (fun _ ->
            validationBoolOption
                (guesses
                 |> Result.exists (fun guesses ->
                     guesses
                     |> Seq.exists (fun guess -> guess.stateName = guessSubmission.guessStateName)))
                (getAppErrorDto 422 "Duplicate of previous request"))

    //! STARTHERE option for the validation, result for the StateName type

    if Option.isSome validationErrors then
        Error validationErrors
    else
        let targetState = getPuzzleAnswer dbConnection |> taskGet

        let targetStateCoordinate =
            targetState |> Result.bind (fun state -> getStateCoordinate state.name)

        let guessStateCoordinate = getStateCoordinate guessSubmission.guessStateName
        let targetStateDistance = targetStateCoordinate |> Result.bind (fun coord -> getH)


        Error validationErrors
