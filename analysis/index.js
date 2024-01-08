import Bea2021Sagdp2N from "./Bea2021Sagdp2N.json" assert { type: "json"}
import StatePositions from "./StatePositions.json" assert { type: "json"}
import { writeFileSync } from "fs"

const usState = []

for (const idx in Bea2021Sagdp2N) {
    const state = Bea2021Sagdp2N[idx]
    const position = StatePositions.find(queryState => queryState.name === state.name)
    state.latitudeN = Number(position.latitudeN)
    state.longitudeW = Number(position.longitudeW)
    usState.push(state)
}

writeFileSync('./UsStates.json', JSON.stringify(usState), 'utf8')