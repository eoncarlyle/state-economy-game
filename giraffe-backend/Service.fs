module StateEconomyGame.Service

open StateEconomyGame.Model


let getTargetStateEconomy () = 0

let rec getTotalGdp economyNode =
    match economyNode with
    | NonLeaf nonLeaf -> List.map getTotalGdp nonLeaf.Children |> List.reduce (fun n1 n2 -> n1 + n2)
    | Leaf leaf -> leaf.Gdp
