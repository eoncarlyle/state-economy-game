import { Grid } from "@mui/material";

import EconomyDiagram from "./components/EconomyDiagram";
import GuessInputs from "./components/GuessInputs";
import TargetStateRecord from "./util/TargetStateRecordContext";
import { StateRecord } from "./model/model";

import "./style/app.css";

export function App() {
  const targetStateRecord = StateRecord.of("Colorado");

  return (
    <>
      <h1>{targetStateRecord.name}</h1>
      <TargetStateRecord.Provider value={targetStateRecord}>
        <EconomyDiagram />
        <GuessInputs />
      </TargetStateRecord.Provider>
    </>
  );
}
