import { Grid } from "@mui/material";
import { grey } from "@mui/material/colors";
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
      <Grid
        container
        rowSpacing={1}
        columnSpacing={3}
        alignItems="center"
        margin="0.5rem"
        height="2rem"
        backgroundColor={grey[300]}
        width="20rem"
        borderRadius="0.5rem"
      >
        <GuessRowItem columns={6}>{guessStateName}</GuessRowItem>
        <GuessRowItem columns={4}>{getDistanceLabel(StateRecord.of(guessStateName), targetStateRecord)}</GuessRowItem>
        <GuessRowItem columns={4}>
          <BearingIcon startStateRecord={StateRecord.of(guessStateName)} endStateRecord={targetStateRecord} />
        </GuessRowItem>
      </Grid>
    );
  else return <div className="guess-row empty-guess-row"> </div>;
}
