import ConfettiExplosion from "react-confetti-explosion";

import { getDistanceLabel } from "../../lib/util";
import { Guess } from "../../lib/model";
import BearingIcon from "./BearingIcon";

export default function GuessRow({ guess }: { guess?: Guess }) {
  if (guess) {
    if (guess.distance === 0)
      return (
        <>
          <ConfettiExplosion />
          <div className="filled-guess-row guess-row animate-pop correct-guess-row">
            <div className="state-name end-guess-row-item">{guess.stateRecord.name}</div>
            <div className="end-guess-row-item">🎉</div>
          </div>
        </>
      );
    else
      return (
        <div className="filled-guess-row guess-row animate-pop incorrect-guess-color">
          <div className="state-name end-guess-row-item">{guess.stateRecord.name}</div>
          <div className="distance-label">{getDistanceLabel(guess.distance)}</div>
          <div className="end-guess-row-item"> {guess.percentileScore}% </div>
          <div className="end-guess-row-item">
            <BearingIcon bearing={guess.bearing} />
          </div>
        </div>
      );
  } else return <div className="guess-row empty-guess-row"> </div>;
}
