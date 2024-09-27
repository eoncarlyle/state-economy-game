module StateEconomyGame.Controller

open System.Data.Common
open Microsoft.AspNetCore.Http
open Giraffe
open System.Threading.Tasks

open StateEconomyGame.Model
open StateEconomyGame.Service

// Had the following mesage, but in Rider the correct type was inferrred
//Value restriction: The value 'ma' has an inferred generic function type


let appResultHandler (successCode: int) (result: AppResult<'a>) =
    match result with
    | Ok success -> json success
    | Error e ->
        setStatusCode e.code
        >=> json
                {| statusCode = e.code
                   message = e.message |}

let mappResultHandler (successCode: int) (result: Task<AppResult<'a>>) =
    task {
        let! completedResult = result
        return match completedResult with
                | Ok success -> json success
                | Error e ->
                    setStatusCode e.code
                    >=> json
                            {| statusCode = e.code
                               message = e.message |}
    }

let getPuzzleAnswerForSessionHandler (dbConnection: DbConnection) (id: string) =
    getPuzzleAnswerForSession dbConnection id |> mappResultHandler 200

let webApp (sqliteDbFileName: string) : HttpFunc -> HttpContext -> HttpFuncResult =
    let dbConnection = sqliteConnection sqliteDbFileName

    choose //I think the status code handling is already baked into the `GET` and `POST` handlers
        [ GET
          >=> choose
                  [ route "/health" >=> json {| status = "UP" |}
                    route "/economy" >=> mappResultHandler 200 (getPuzzleAnswerEconomy dbConnection)
                    routef "/answer/%s" (getPuzzleAnswerForSessionHandler dbConnection) ]
          POST
          >=> choose
                  [ route "/puzzle_session"
                    >=> setStatusCode 201
                    >=> warbler (fun _ -> postPuzzleSession dbConnection |> json) // Here: there is some issue with puzzle session lastRequestTimestamp tracking
                    route "/guess"
                    >=> bindJson<DtoInGuessSubmission> (postGuess dbConnection >> mappResultHandler 201) ]
          setStatusCode 404
          >=> json
                  {| statusCode = 404
                     message = "Resource Not found" |} ]

// Functions in F# are eagerly evaluated and a normal route will only be evaluated the first time. A warbler will ensure that a function will get evaluated every time the route is hit:
