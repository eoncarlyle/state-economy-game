import { Link } from "wouter";

import GuessRow from "../components/GuessRow.tsx";
import { Guess, StateRecord } from "../util/model.ts";

export default function AboutPage() {
  const guess: Guess = {
    stateRecord: StateRecord.of("Alabama"),
    bearing: 45,
    gdpRatio: 1.5,
    isWin: false,
  };
  return (
    <>
      <h1 className="gdple-heading">
        GDP<span style={{ color: "#ffc107" }}>LE</span>
      </h1>
      <div className="landing-copy">
        <p>
          The goal of the game is to guess US state that has the GDP breakdown
          shown! A new puzzle created every 24 hours. Puzzle data is from Bureau
          of Economic Analysis, collected for 2023.
        </p>
        <p>
          As an example, if you guessed "Alabama" then saw the following row,
          that would mean that correct state is northeast of Alabama, and has an
          economy roughly one and a half times larger.
        </p>
        <div className="guesses">
          <GuessRow guess={guess} isDisplay={true} />
        </div>
        <p>
          {" "}
          Email <a href="mailto:gdple@iainschmitt.com">here</a> to report any
          issues! This is a project by{" "}
          <a href="https://iainschmitt.com">Iain Schmitt</a> and the source code
          is available{" "}
          <a href="https://github.com/eoncarlyle/state-economy-game">here</a>.
        </p>
      </div>
      <Link href="/" className="center-link">
        Back to the game
      </Link>
    </>
  );
}
