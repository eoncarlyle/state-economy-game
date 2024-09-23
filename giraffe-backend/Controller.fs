module StateEconomyGame.Controller

open System.Data.Common
open Microsoft.AspNetCore.Http
open Giraffe

open StateEconomyGame.Model
open StateEconomyGame.Service

// Had the following mesage, but in Rider the correct type was inferrred
//Value restriction: The value 'ma' has an inferred generic function type
//Here: need to read the error code from the result DTOs, also need to get in the get answer for session


let appResultHandler (successCode: int) (result: AppResult<'a>) =
    match result with
    | Ok success -> setStatusCode successCode >=> json success
    | Error e ->
        setStatusCode e.code
        >=> json
                {| statusCode = e.code
                   message = e.message |}

let appResultAsyncHandler (successCode: int) (result: AppResult<'a>) =

    match result with
    | Ok success -> setStatusCode successCode >=> json success
    | Error e ->
        setStatusCode e.code
        >=> json
                {| statusCode = e.code
                   message = e.message |}


let getPuzzleAnswerForSessionHandler (id: string) (dbConnection: DbConnection) =
    getPuzzleAnswerForSession id dbConnection |> appResultHandler 200


let webApp (sqliteDbFileName: string) : HttpFunc -> HttpContext -> HttpFuncResult =
    let dbConnection = sqliteConnection sqliteDbFileName
    choose
        [ GET
          >=> choose
                  [ route "/health" >=> json {| status = "UP" |}
                    route "/economy" >=> appResultHandler 200 (getPuzzleAnswerEconomy dbConnection)
                    routef "/answer/%s" (fun id -> getPuzzleAnswerForSessionHandler id dbConnection) ]
          POST
          >=> choose
                  [ route "/puzzle_session"
                    >=> setStatusCode 201
                    >=> json (postPuzzleSession dbConnection)
                    route "/guess"
                    >=> bindJson<DtoInGuessSubmission> (fun guess ->
                        postGuess guess dbConnection |> appResultHandler 201) ]
          setStatusCode 404
          >=> json
                  {| statusCode = 404
                     message = "Resource Not found" |} ]
