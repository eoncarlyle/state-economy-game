import EconomyPie from "./components/EconomyPie";
import GuessInputs from "./components/GuessInputs";
import TargetStateRecord from "./util/TargetStateRecordContext";

import "./style/app.css";
import { StateRecord } from "./model/model";

export function App() {
  const targetStateRecord = StateRecord.of("Colorado");

  return (
    <>
      <h1>{targetStateRecord.name}</h1>
      <TargetStateRecord.Provider value={targetStateRecord}>
        <EconomyPie /> 
        <GuessInputs />
      </TargetStateRecord.Provider>
    </>
  );
}
