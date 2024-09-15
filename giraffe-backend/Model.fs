namespace StateEconomyGame.Model

open System
open FSharp.Data

type Coordinates = { Latitude: float; Longitude: float }

type AppError = { Code: int; Message: string }

type AppResult<'a> = Result<'a, AppError>

type Guess = 
    { id: int
      puzzleSessionId: string
      stateName: string
      createdAt: DateTime
      updatedAt: DateTime }
    

type StateRecord =
    { Name: string
      LatitudeN: float
      LongitudeW: float }

type EconomyNode =
    { GdpCategory: string
      Gdp: Option<float>
      Children: Option<List<EconomyNode>> }

type NamedStateEconomy =
    { Name: string
      StateEconomy: EconomyNode }

type DtoStateEconomy =
    { economy: EconomyNode
      totalGdp: float }

type TargetState = { id: int; name: string; gdp: float }

type PuzzleSession = { id: string; lastRequestTimestamp: Option<int>; createdAt: DateTime; updatedAt: DateTime  }
