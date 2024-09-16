module StateEconomyGame.Util

open System
open StateEconomyGame.Model
open StateEconomyGame.Constants

let toRad (num: float) = (num * Math.PI) / 180.0

let haversineDistance (c0: State) (c1: State) =
    let dLat = c1.latitudeN - c0.latitudeN |> toRad
    let dLon = c1.longitudeW - c0.longitudeW|> toRad
    let lat0 = toRad c0.latitudeN
    let lat1 = toRad c1.latitudeN
     
    let a = Math.Sin(dLat / 2.0) * Math.Sin(dLat / 2.0) + Math.Sin(dLon / 2.0) * Math.Sin(dLon / 2.0) * Math.Cos(lat0) * Math.Cos(lat1);
    let c = 2.0 * Math.Atan2(Math.Sqrt(a), Math.Sqrt(1.0 - a))
    R_MILE * c
    
let haversineBearing (c0: State) (c1: State) =
    let phiStart = toRad c0.latitudeN
    let phiEnd = toRad c1.latitudeN
    let lambdaStart = toRad c0.longitudeW
    let lambdaEnd = toRad c1.longitudeW

    let y = Math.Sin(lambdaEnd - lambdaStart)
    let x = Math.Sin(phiStart) * Math.Sin(phiEnd) - Math.Sin(phiStart) * Math.Cos(phiEnd) * Math.Cos(lambdaEnd - lambdaStart)
    (Math.Atan2(y, x) * 180.0/Math.PI + 360.0) % 360.0