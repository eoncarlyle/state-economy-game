module StateEconomyGame.Controller

open Microsoft.AspNetCore.Http
open Giraffe
open System.Threading.Tasks
open StateEconomyGame.Model
open StateEconomyGame.Service
open Microsoft.Data.Sqlite //! Had annoying SQLite interop issues


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

let getConnection (next: HttpFunc) (ctx: HttpContext) = ctx.GetService<SqliteConnection>()

let withConnection (handlerFactory: SqliteConnection -> HttpHandler) : HttpHandler =
    fun (next: HttpFunc) (ctx: HttpContext) ->
        let connection = getConnection next ctx
        let result = connection |> handlerFactory
        result next ctx

let giraffeApp: HttpFunc -> HttpContext -> HttpFuncResult =

    choose //There has to be a better way with these warblers
        [ GET
          >=> choose
                  [ route "/health" >=> warbler (fun _ -> json {| status = "UP" |})
                    route "/economy"
                    >=> warbler (fun _ -> getPuzzleAnswerEconomy >> mapResultHandler |> withConnection)
                    routef "/answer/%s" (fun id -> getPuzzleAnswerForSession id >> mapResultHandler |> withConnection) ]
          POST
          >=> choose
                  [ route "/puzzle_session"
                    >=> warbler (fun _ -> postPuzzleSession >> json |> withConnection)
                    route "/guess"
                    >=> bindJson<DtoInGuessSubmission> (fun guess ->
                        postGuess guess >> mapResultHandler |> withConnection) ]
          setStatusCode 404
          >=> json
                  {| statusCode = 404
                     message = "Resource Not found" |} ]
