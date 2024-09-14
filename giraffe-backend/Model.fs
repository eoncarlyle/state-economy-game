namespace StateEconomyGame.Model

open FSharp.Data

type Coordinates = { Latitude: float; Longitude: float }

type AppHttpError = { Code: int; Message: string }

type AppResult<'a> = Result<'a, AppHttpError>

type Guesses = //? Should this be destinct from other state data structures
    { id: int
      puzzleSession: string
      stateName: string
      createdAt: string
      updatedAt: string } //! Need to make the non-option verions, this is getting tedious

type StateRecord =
    { Name: string
      LatitudeN: float
      LongitudeW: float }

type NonLeafEconomyNode = { GdpCategory: string; Gdp: float }

type LeafEconomyNode =
    { GdpCategory: string
      Children: List<EconomyNode> }

and EconomyNode =
    | Leaf of LeafEconomyNode
    | NonLeaf of NonLeafEconomyNode

type StateEconomy =
    { GdpCategory: string
      Children: List<EconomyNode> }

type ListedStateEconomy =
    { Name: string
      StateEconomy: StateEconomy }

type FEStateEconomyRequest =
    { economy: StateEconomy
      totalGdp: int64 }

type TargetState = { id: int; name: string; gdp: float }
