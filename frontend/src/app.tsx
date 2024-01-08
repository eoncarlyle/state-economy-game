import { Paper } from "@mui/material";

import EconomyDiagram from "./components/EconomyDiagram";
import Guesses from "./components/Guesses";
import TargetStateRecord from "./util/TargetStateRecordContext";
import { StateRecord } from "./model/model";

import "./style/app.css";
import { ReactNode } from "preact/compat";

export function App() {
  const targetStateRecord = StateRecord.of("Colorado");

  return (
    <>
      <Paper elevation={0} className="landing-copy">
        {
          (
            <>
              <h1 className="gdple-heading">
                GDP<span style={{ color: "#ffc107" }}>LE</span>
              </h1>
              <p>Guess which US state has this GDP breakdown! A new puzzle created every 24 hours</p>
              {/* <p>{targetStateRecord.name}</p> */}
            </>
          ) as React.ReactNode
        }
      </Paper>
      <TargetStateRecord.Provider value={targetStateRecord}>
        <EconomyDiagram />
        <Guesses />
      </TargetStateRecord.Provider>
    </>
  );
}
