import "./app.css";
import Bea2021Sagdp2N from "./Bea2021Sagdp2N.json";
import EconomyPie from "./EconomyPie";
import { StateRecord } from "./Model";
import { getDataSet, getStateRecord } from "./util";

export function App() {
  var stateRecordName = "New York"

  getDataSet(getStateRecord(stateRecordName))

  return (
    <>
      <h1>{ stateRecordName }</h1>
      <EconomyPie pieChartData={getDataSet(getStateRecord(stateRecordName))}/>
    </>
  );
}
