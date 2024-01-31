import { useState } from "preact/hooks";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useMediaQuery } from "@mui/material";

import GuessRow from "./GuessRow";
import { getUsStateRecords } from "state-economy-game-util/util";
import { StateRecord, GameState, Guess } from "state-economy-game-util/model";
import { getGameState, guessableStateRecords } from "../util/guess";
import TargetStateSnackbar from "./TargetStateSnackbar";
import ShareableResultSnackbar from "./ShareableResultSnackbar";
import MainButton from "./MainButton";
import { MAX_GUESSES } from "state-economy-game-util/constants";

export default function Guesses() {
  const [gameState, setGameState] = useState<GameState | null>(null);
  getGameState(setGameState);

  //TODO Not proud of this
  if (!gameState) return <></>;

  const gameOngoing = gameState.guesses.length < MAX_GUESSES && !gameState.isWin;
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

  //TODO: Handling inconsistent attempts remaining between frontend, backend is undefined right now
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
          disabled={!gameOngoing}
          componentsProps={autocompoleteComponentProps}
        />
        <MainButton gameState={ gameState } setGameState={ setGameState } />
      </div>
      <TargetStateSnackbar gameState={gameState} setGameState={setGameState} />
      <ShareableResultSnackbar gameState={gameState} setGameState={setGameState} />
    </>
  );
}
