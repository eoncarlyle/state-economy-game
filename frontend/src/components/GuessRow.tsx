import { Grid } from "@mui/material";
import { useContext } from "preact/hooks";

import TargetStateRecord from "../util/TargetStateRecordContext";
import { getDistanceLabel } from "../util/util";
import { StateRecord } from "../model/model";
import BearingIcon from "./BearingIcon";
import GuessRowItem from "./GuessRowItem";

export default function GuessRow({ guessStateName }: { guessStateName?: string }) {
  const targetStateRecord = useContext(TargetStateRecord);
  // guessStateName && getBearingIcon(StateRecord.of(guessStateName), targetStateName)

  if (guessStateName)
  return (
    <Grid container rowSpacing={1} columnSpacing={3} className="guess-row">
        <GuessRowItem>{guessStateName}</GuessRowItem>
        <GuessRowItem>{getDistanceLabel(StateRecord.of(guessStateName), targetStateRecord)}</GuessRowItem>
        <GuessRowItem>
          <BearingIcon startStateRecord={StateRecord.of(guessStateName)} endStateRecord={targetStateRecord} />
        </GuessRowItem>
    </Grid>
    );
  else return <div className="guess-row"> </div>;
}
