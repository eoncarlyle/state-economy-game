module StateEconomyGame.Controller

open System.Data.Common
open Microsoft.AspNetCore.Http
open Giraffe

open StateEconomyGame.Service

// Had the following mesage, but in Rider the correct type was inferrred
//Value restriction: The value 'ma' has an inferred generic function type


//Here: need to read the error code from the result DTOs, also need to get in the get answer for session
        
let app (dbConnection: DbConnection): HttpFunc -> HttpContext -> HttpFuncResult =
    
    choose
        [ GET
          >=> choose
                  [ route "/health" >=> json {| status = "UP" |}
                    route "/economy" >=> json getPuzzleAnswerEconomy
                    routef "/answer/%i" >=> json (getPuzzleAnswer dbConnection)
                    ]
          setStatusCode 404
          >=> json
                  {| statusCode = 404
                     message = "Resource Not found" |} ]
    