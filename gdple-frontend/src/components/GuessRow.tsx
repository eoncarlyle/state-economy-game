import ConfettiExplosion from "react-confetti-explosion";

import BearingIcon from "./BearingIcon";
import {Guess} from "../util/model.ts";

export default function GuessRow({ guess, isDisplay }: { guess?: Guess, isDisplay?: boolean }) {
    if (guess) {
    if (guess.isWin)
      return (
        <>
          <ConfettiExplosion />
          <div className="filled-guess-row guess-row animate-pop correct-guess-row">
            <div className="state-name guess-row-item">
              {guess.stateRecord.name}
            </div>
            <div className="guess-row-item">🎉</div>
          </div>
        </>
      );
    else
      return (
        <div className={`filled-guess-row guess-row incorrect-guess-color ${!isDisplay && "animate-pop"}`}>

          <div className="state-name guess-row-item">
            {guess.stateRecord.name}
          </div>
          <div className={`filled-guess-row ${ !isDisplay && "filled-guess-row-animation"}`}>
            <div className="guess-row-item"> {guess.gdpRatio} x</div>
            <div className="guess-row-item">
              <BearingIcon bearing={guess.bearing} />
            </div>
          </div>
        </div>
      );
  } else return <div className="guess-row empty-guess-row"></div>;
}
