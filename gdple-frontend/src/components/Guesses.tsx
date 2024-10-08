import { useState } from "preact/hooks";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useMediaQuery } from "@mui/material";

import GuessRow from "./GuessRow";
import { StateRecord, GameState, Guess } from "../../lib/model";
import { getStoredGameState, guessableStateRecords, isGameOngoing } from "../util/guess";
import TargetStateSnackbar from "./TargetStateSnackbar";
import ShareableResultSnackbar from "./ShareableResultSnackbar";
import MainButton from "./MainButton";
import { MAX_GUESSES } from "../../lib/constants";

export default function Guesses() {
  const [gameState, setGameState] = useState<GameState | null>(null);
  getStoredGameState(setGameState);

  //TODO Not proud of this Issue #22
  if (!gameState) return <></>;

  const closedGuesses = gameState.guesses.map((guess: Guess) => <GuessRow guess={guess} />);
  const openGuesses = Array(MAX_GUESSES - gameState.guesses.length)
    .fill(undefined)
    .map(() => <GuessRow />);

  const inputChangeHandler = (_event: any, newInputValue: string | null) => {
    setGameState({ ...gameState, currentGuessName: newInputValue });
  };

  const autocompoleteComponentProps = useMediaQuery('(min-width:600px)') ? {} : {
    popper: {
      placement: 'top'
    }
  } 

  //TODO: Handling inconsistent attempts remaining between frontend, backend is undefined right now, Issue #21
  return (
    <>
      <div className="guesses">
        {/* @ts-ignore */}
        {closedGuesses}
        {openGuesses}
        <Autocomplete
          disablePortal
          value={gameState.currentGuessName}
          id="us-state-autocomplete"
          className="us-state-autocomplete"
          options={guessableStateRecords(gameState).map((stateRecord: StateRecord) => stateRecord.name)}
          onInputChange={inputChangeHandler}
          renderInput={(params) => (<TextField {...params} label="Guess a state" />)}
          disabled={!isGameOngoing(gameState)}
          componentsProps={autocompoleteComponentProps}
        />
        <MainButton gameState={ gameState } setGameState={ setGameState } />
      </div>
      <TargetStateSnackbar gameState={gameState} setGameState={setGameState} />
      <ShareableResultSnackbar gameState={gameState} setGameState={setGameState} />
    </>
  );
}
