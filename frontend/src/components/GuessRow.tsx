import { useContext } from "preact/hooks";
import ConfettiExplosion from "react-confetti-explosion";

import TargetStateRecord from "../util/TargetStateRecordContext";
import { getDistanceLabel } from "../util/util";
import { StateRecord } from "../model/model";
import BearingIcon from "./BearingIcon";

export default function GuessRow({ guessStateName }: { guessStateName?: string }) {
  const targetStateRecord = useContext(TargetStateRecord);
  if (guessStateName && targetStateRecord.name !== guessStateName)
    return (
      <div className="filled-guess-row guess-row animate-pop incorrect-guess-color">
        <div className="state-name end-guess-row-item">{guessStateName}</div>
        {getDistanceLabel(StateRecord.of(guessStateName), targetStateRecord)}
        <div className="end-guess-row-item">
          <BearingIcon startStateRecord={StateRecord.of(guessStateName)} endStateRecord={targetStateRecord} />
        </div>
      </div>
    );
  else if (guessStateName && targetStateRecord.name === guessStateName)
    return (
      <>
        <ConfettiExplosion />
        <div className="filled-guess-row guess-row animate-pop correct-guess-row">
          <div className="state-name end-guess-row-item">{guessStateName}</div>
          <div className="end-guess-row-item">🎉</div>
        </div>
      </>
    );
  else return <div className="guess-row empty-guess-row"> </div>;
}
