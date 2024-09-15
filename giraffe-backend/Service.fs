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
open StateEconomyGame.Model
open Dapper.FSharp.SQLite
open Microsoft.Data.Sqlite //! Had annoying SQLite interop issues
open System.Text.Json

let MAX_GUESSES = 5

let stateEconomies =
    let json = File.ReadAllText "./stateEconomies.json"
    JsonSerializer.Deserialize<NamedStateEconomy list>(json)
//! F# lists != .NET lists, this got me in some type trouble with 4e18b9d]

// H/T to Michael
let taskMap<'a, 'b> (fn: 'a -> 'b) (a: Task<'a>) : Task<'b> =
    task {
        let! results = a
        return fn results
    }

let taskGet (task: Task<'a>) = task.Result //Why no Result.get?

let resultValidateMap (validationPredicate: 'a -> bool) (appErrorOnFailed: AppError) (appResult: AppResult<'a>) =
    if Result.exists validationPredicate appResult then
        Option.None
    else
        Some appErrorOnFailed

let validationAppResultOption (appResult: AppResult<'a>) =
    match appResult with
    | Ok _ -> Option.None
    | Error e -> Some e

let validationBoolOption (isValid: bool) (appErrorOnFailed: AppError) =
    if isValid then Option.None else Some appErrorOnFailed

let getAppError code message : AppError = { code = code; message = message }

let getInternalError subMsg =
    getAppError 500 $"Internal Error:{subMsg}"


let sqliteConnection (sqliteDbFileName: string) = //! Use this as parameter
    use connection = new SqliteConnection($"Data Source={sqliteDbFileName}")
    OptionTypes.register () |> ignore
    connection.Open() |> ignore
    connection

let targetStateTable = table'<TargetState> "target_states"
let puzzleSessionTable = table'<PuzzleSession> "puzzle_sessions"
let guessTable = table'<Guess> "guesses"

let getTotalGdp (economyNode: NamedStateEconomy) =
    let rec loop (economyNode: EconomyNode) =
        match economyNode.children with
        | Some children -> children |> List.map loop |> List.sum
        | _ -> economyNode.gdp |> Option.defaultValue 0

    loop economyNode.StateEconomy |> Math.Round |> Convert.ToInt64

//! d1d6f54: The type providers get to be a pain in the ass for nested classes, reference MgetTotalGdp
//! Don't love the double unions but it's whatever

let getOneFromQuery (appErrorOnEmpty: AppError) =
    taskMap (fun result ->
        match Seq.tryHead result with
        | Some targetState -> Ok targetState
        | None -> Error appErrorOnEmpty)

let getTargetState (dbConnection: DbConnection) : Task<AppResult<TargetState>> =
    select {
        for targetState in targetStateTable do //! Ideally would use 'top' instead
            selectAll
            orderByDescending targetState.id
    }
    |> dbConnection.SelectAsync<TargetState>
    |> getOneFromQuery (getInternalError "target state not present")


let getEconomyNode (stateName: string) = //! Type inference legitamitely didn't work on this until I used the pipeline operator
    match
        stateEconomies
        |> List.filter (fun (state: NamedStateEconomy) -> state.Name = stateName)
    with
    | [] -> getInternalError $"{stateName} not found" |> Error
    | [ stateEconomy ] -> Ok stateEconomy
    | _ -> getInternalError $"Multiple records for {stateName}" |> Error

let isStateNameValid stateName = getEconomyNode stateName |> Result.isOk

let getTargetStateEconomy (dbConnection: DbConnection) : Task<AppResult<DtoStateEconomy>> =
    //! b6053e8: semi-interesting type error
    task {
        let! targetState = getTargetState dbConnection

        let DtoStateEconomy =
            match targetState with
            | Ok state ->
                getEconomyNode state.name
                |> Result.bind (fun node ->
                    { economy = node.StateEconomy
                      totalGdp = state.gdp }
                    |> Ok)
            | Error e -> Error e

        return DtoStateEconomy
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
    |> getOneFromQuery (getAppError 422 "Invalid puzzle session id")

let getPuzzleAnswer (unverifiedPuzzleSessionId: string) (dbConnection: DbConnection) =
    let puzzleSession = getPuzzleSession unverifiedPuzzleSessionId dbConnection

    let guessCount =
        puzzleSession.Result
        |> Result.map (fun sessionId -> getGuessCount sessionId.id dbConnection |> taskGet)


    match guessCount with
    | Ok count when count >= MAX_GUESSES ->
        getTargetState dbConnection
        |> taskGet
        |> Result.map (fun state ->
            { id = unverifiedPuzzleSessionId //! I don't love doing this, there has to be a better way
              targetStateName = state.name })
    | Ok _ ->
        getAppError 422 $"{MAX_GUESSES} must be made before an answer can be requested"
        |> Error //!Doesn't show complete pattern matching with 'Ok count when count < MAX_GUESSES'
    | Error e -> Error e

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
    //! This _really_ should be using option, where the option is popualted in the event of an invalid answer and is other wise not populated, example in original commit of this comment

    //! 1)  Understand Haskell's love of infix operators, this is getting time consuming with these `ModuleName.function`  2) Can be difficult to know when you're whitespacing correctly on long statements
    let validationErrors =
        Option.None
        |> Option.orElseWith (fun _ -> validationAppResultOption puzzleSession)
        |> Option.orElseWith (fun _ -> validationAppResultOption guesses)
        |> Option.orElseWith (fun _ ->
            validationBoolOption
                (isStateNameValid guessSubmission.guessStateName)
                (getAppError 422 $"Invalid guess state name ${guessSubmission.guessStateName}"))
        |> Option.orElseWith (fun _ ->
            validationBoolOption
                (guesses |> Result.exists (fun guesses -> Seq.length guesses >= MAX_GUESSES)) 
                (getAppError 422 "Too many requests have been made for this game"))
        |> Option.orElseWith (fun _ ->
            validationBoolOption
                (guesses |> Result.exists (fun guesses -> guesses |> Seq.exists (fun guess -> guess.stateName = guessSubmission.guessStateName)))
                (getAppError 422 "Duplicate of previous request")
            )
    
    0
