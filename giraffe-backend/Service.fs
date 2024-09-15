module StateEconomyGame.Service

open System
open System.Collections.Generic
open System.IO
open System.Threading.Tasks
open System.Data.Common
open Dapper
open Giraffe
open StateEconomyGame.Model
open Dapper.FSharp.SQLite
open Microsoft.Data.Sqlite //! Had annoying SQLite interop issues
open System.Text.Json

let MAX_GUESSES = 5
let stateEconomies =
    let json = File.ReadAllText "./stateEconomies.json"
    JsonSerializer.Deserialize<List<NamedStateEconomy>>(json)
    //! This way does work with descriminated unions (?)

// H/T to Michael
let taskMap<'a, 'b> (fn: 'a -> 'b) (a: Task<'a>) : Task<'b> =
    task {
        let! results = a
        return fn results
    }

let getAppError code message : AppError = { Code = code; Message = message }

let getInternalError subMsg = getAppError 500  $"Internal Error:{subMsg}"


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
        match economyNode.Children with
        | Some children -> children |> List.map loop |> List.sum
        | _ -> economyNode.Gdp |> Option.defaultValue 0

    loop economyNode.StateEconomy |> Math.Round |> Convert.ToInt64

//! d1d6f54: The type providers get to be a pain in the ass for nested classes, reference MgetTotalGdp
//! Don't love the double unions but it's whatever

let getOneFromQuery (appErrorOnEmpty: AppError)  =
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
    match stateEconomies |> List.filter (fun state -> state.Name = stateName) with
    | [] -> getInternalError $"{stateName} not foud" |> Error
    | [ stateEconomy ] -> Ok stateEconomy
    | _ -> getInternalError $"Multiple records for {stateName}" |> Error


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

let getGuessCount puzzleSessionId (dbConnection: DbConnection) =
    select {
        for guess in guessTable do
            where (guess.puzzleSessionId = puzzleSessionId)
    } |> dbConnection.SelectAsync<Guess>
      |> taskMap (fun result -> Seq.length result) //Do not understand the typing issues herew
    

let getPuzzleAnswer (puzzleSessionId: string) (dbConnection: DbConnection) =
   let puzzleSessionId =
            select {
            for puzzleSession in puzzleSessionTable do
                where (puzzleSession.id = puzzleSessionId)
            } |> dbConnection.SelectAsync<PuzzleSession>|> getOneFromQuery (getAppError 422 "Invalid puzzle session id")
   
   let guesses = puzzleSessionId |> Result.bind (fun id -> getGuessCount id dbConnection)
   0 