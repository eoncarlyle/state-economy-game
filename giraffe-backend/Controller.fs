module StateEconomyGame.Controller

open Microsoft.AspNetCore.Http
open Giraffe

// Had the following mesage, but in Rider the correct type was inferrred
//Value restriction: The value 'ma' has an inferred generic function type 

let ma: HttpFunc -> HttpContext -> HttpFuncResult =
    choose
        [ GET >=> choose [ route "/health" >=> json {| status = "UP" |} ]
          setStatusCode 404 >=> json {| statusCode = 404; message = "Resource Not found" |} ]
