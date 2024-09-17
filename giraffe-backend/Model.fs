module StateEconomyGame.Model

open System
open System.IO
open System.Text.Json

//! Don't love using lowercase for API consistency with the frontend
type Coordinates = { latitude: float; longitude: float }

type AppErrorDto = { code: int; message: string } //! This is named badly

type AppResult<'a> = Result<'a, AppErrorDto>

type Guess =
    { id: int
      puzzleSessionId: string
      stateName: string
      createdAt: DateTime
      updatedAt: DateTime }

type EconomyNode =
    { gdpCategory: string
      gdp: Option<float>
      children: EconomyNode list option }

type State =
    { name: string
      stateEconomy: EconomyNode
      latitudeN: float
      longitudeW: float }

type DtoOutStateEconomy =
    { economy: EconomyNode
      totalGdp: float }

type DtoOutPuzzleAnswer = { id: string; targetStateName: string }

type DtoOutPuzzleSession = { id: string }

type DtoInGuessSubmission =
    { id: string
      guessStateName: string
      requestTimestamp: int64 }

type PuzzleAnswer = { id: int; name: string; gdp: float } //! Something should be done to show this is a table name

type PuzzleSession =
    { id: string
      lastRequestTimestamp: int option
      createdAt: DateTime
      updatedAt: DateTime }

let states =
    File.ReadAllText "./states.json" |> JsonSerializer.Deserialize<State list>

type StateName = private StateName of string

module StateName =
    let create stateName =
        match states |> List.filter (fun state -> state.name = stateName) with
        | [ _ ] -> StateName stateName |> Ok
        | _ -> Error "Invalid state name"

    let toString (StateName stateName) = stateName
