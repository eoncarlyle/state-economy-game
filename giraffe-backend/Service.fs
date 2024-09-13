module StateEconomyGame.Service

open System
open StateEconomyGame.Model
open System.Data.SQLite

let connection = new SQLiteConnection("Data Source=app.db")

let getTargetStateEconomy () = 0

let getTotalGdp (economyNode: EconomyNode) =
    let rec loop economyNode = 
        match economyNode with
        | NonLeaf nonLeaf -> nonLeaf.Gdp
        | Leaf leaf -> leaf.Children |> List.map loop |> List.sum

    loop economyNode |> Math.Round |> Convert.ToInt64
