module StateEconomyGame.Controller

open Microsoft.AspNetCore.Http
open Giraffe
open System.Threading.Tasks

open StateEconomyGame.Model
open StateEconomyGame.Service

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
