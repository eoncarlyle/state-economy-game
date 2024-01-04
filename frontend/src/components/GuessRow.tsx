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
      <div className="filled-guess-row guess-row">
        <div className="state-name">{guessStateName}</div>
        {getDistanceLabel(StateRecord.of(guessStateName), targetStateRecord)}
        <BearingIcon startStateRecord={StateRecord.of(guessStateName)} endStateRecord={targetStateRecord} />
      </div>
    );
  else return <div className="guess-row empty-guess-row"> </div>;
}
