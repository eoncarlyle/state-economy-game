module StateEconomyGame.Controller

open System.Data.Common
open Microsoft.AspNetCore.Http
open Giraffe
open System.Threading.Tasks

open StateEconomyGame.Model
open StateEconomyGame.Service

// Had the following mesage, but in Rider the correct type was inferrred
//Value restriction: The value 'ma' has an inferred generic function type

let mapResultHandler (result: Task<AppResult<'a>>) =
    task {
        let! completedResult = result

        return
            match completedResult with
            | Ok success -> json success
            | Error e ->
                setStatusCode e.code
                >=> json
                        {| statusCode = e.code
                           message = e.message |}
    }
    |> _.Result

let webApp (sqliteDbFileName: string) : HttpFunc -> HttpContext -> HttpFuncResult =
    let dbConnection = sqliteConnection sqliteDbFileName

    choose //There has to be a better way with these warblers
        [ GET
          >=> choose
                  [ route "/health" >=> warbler (fun _ -> json {| status = "UP" |})
                    route "/economy"
                    >=> warbler (fun _ -> (getPuzzleAnswerEconomy dbConnection |> mapResultHandler))
                    routef "/answer/%s" (getPuzzleAnswerForSession dbConnection >> mapResultHandler) ]
          POST
          >=> choose
                  [ route "/puzzle_session"
                    >=> warbler (fun _ -> (postPuzzleSession dbConnection |> json))
                    route "/guess"
                    >=> bindJson<DtoInGuessSubmission> (postGuess dbConnection >> mapResultHandler) ]
          setStatusCode 404
          >=> json
                  {| statusCode = 404
                     message = "Resource Not found" |} ]

// Functions in F# are eagerly evaluated and a normal route will only be evaluated the first time. A warbler will ensure that a function will get evaluated every time the route is hit:
