namespace StateEconomyGame.Model

open System
open FSharp.Data

//! Don't love using lowercase for API consistency with the frontend
type Coordinates = { latitude: float; longitude: float }

type AppError = { code: int; message: string } //! This is named badly

type AppResult<'a> = Result<'a, AppError>

type Guess = 
    { id: int
      puzzleSessionId: string
      stateName: string
      createdAt: DateTime
      updatedAt: DateTime }
    

type StateRecord =
    { name: string
      latitudeN: float
      longitudeW: float }

type EconomyNode =
    { gdpCategory: string
      gdp: Option<float>
      children: EconomyNode list option }

type NamedStateEconomy =
    { Name: string
      StateEconomy: EconomyNode }

type DtoStateEconomy =
    { economy: EconomyNode
      totalGdp: float }

type DtoOutPuzzleAnswer = { id: string; targetStateName: string }

type DtoOutPuzzleSession = { id: string; }

type DtoInGuessSubmission = { id:string; guessStateName: string; requestTimestamp: int64  }

type TargetState = { id: int; name: string; gdp: float }

type PuzzleSession = { id: string; lastRequestTimestamp: int option; createdAt: DateTime; updatedAt: DateTime  }
