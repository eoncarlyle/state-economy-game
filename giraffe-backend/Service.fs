module StateEconomyGame.Service

open System
open System.IO
open System.Text.Json
open System.Threading.Tasks
open StateEconomyGame.Model
open Dapper.FSharp.SQLite
open Microsoft.Data.Sqlite
open FSharp.Data //! Namespaces across packages is very nice

// Use Dapper instead, doesn't have the SQLite interop .dll issue

//! <-- Here, doing JSON serialisation

let stateEconomies = StateEconomies.GetSamples()

// H/T to Michael
let taskMap<'a, 'b> (fn: 'a -> 'b) (a: Task<'a>) : Task<'b> =
    task {
        let! results = a
        return fn results
    }

let connection =
    use connection = new SqliteConnection("Data Source=app.sqlite")
    OptionTypes.register () |> ignore
    connection.Open() |> ignore
    connection

let targetStateTable = table'<TargetState> "target_states"

let getTotalGdp (economyNode: EconomyNode) =
    let rec loop economyNode =
        match economyNode with
        | NonLeaf nonLeaf -> nonLeaf.Gdp
        | Leaf leaf -> leaf.Children |> List.map loop |> List.sum

    loop economyNode |> Math.Round |> Convert.ToInt64

let MgetTotalGdp (economyNode: StateEconomies.Root) =
    let rec loop (mNode: MNode) =
        match mNode with
        | Leaf leaf -> leaf.Gdp
        | StateEconomy se -> (se.Children) |> Array.map loop |> array.sum
        | OuterChild oc -> oc.Children |> Array.map loop |> array.sum
        | MiddleChild mc -> mc.Children |> Array.map loop |> array.sum

    loop economyNode.StateEconomy |> Math.Round |> Convert.ToInt64

let getTargetState () : Task<AppResult<TargetState>> =
    select {
        for targetState in targetStateTable do
            selectAll
            orderByDescending targetState.id
    }
    |> connection.SelectAsync<TargetState>
    |> taskMap (fun result ->
        match Seq.tryHead result with
        | Some targetState -> Ok targetState
        | None ->
            Error
                { Code = 500
                  Message = "Internal error: target state not present" })

let getEconomyNode (stateName: string) = //! Type inference legitamitely didn't work on this until I used the pipeline operator
    match stateEconomies |> Array.filter (fun state -> state.Name = stateName) with
    | [||] ->
        Error
            { Code = 500
              Message = $"Internal Error: {stateName} not found!" }
    | [| stateEconomy |] -> Ok stateEconomy
    | _ ->
        Error
            { Code = 500
              Message = "Internal error:" }


let getTargetStateEconomy () : Task<AppResult<TargetState>> =

    task {
        let! targetState = getTargetState ()

        let targetStateEconomy =
            match targetState with
            | Ok state -> getEconomyNode state.name |> Result.bind (fun node -> getTotalGdp node |> Ok)
            | Error e -> Error e

        return targetStateE
    }
