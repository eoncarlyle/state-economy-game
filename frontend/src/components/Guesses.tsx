import { useState } from "preact/hooks";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

import React from "react";

import GuessRow from "./GuessRow";
import { getUsStateRecords } from "state-economy-game-util/util";
import { StateRecord, GameState, Guess } from "state-economy-game-util/model";
import {
  getGameState,
  getShareableResult,
  guessSubmitHandlerFactory,
  shareableResultClickHandler,
} from "../util/guess";
import { MAX_GUESSES } from "state-economy-game-util/constants";
import TargetStateSnackbar from "./TargetStateSnackbar";
import ShareableResultSnackbar from "./ShareableResultSnackbar";

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

  const guessableStateRecords = getUsStateRecords().filter(
    (stateRecord: StateRecord) =>
      !gameState.guesses.map((guess: Guess) => guess.stateRecord.name).includes(stateRecord.name)
  );

  //
  const inputChangeHandler = (_event: any, newInputValue: string | null) => {
    setGameState({ ...gameState, currentGuessName: newInputValue });
  };

  const MainButton = () => {
    if (gameOngoing)
      return (
        <Button
          className="guess-button"
          variant="contained"
          disabled={!gameOngoing}
          onClick={guessSubmitHandlerFactory(MAX_GUESSES, guessableStateRecords, gameState, setGameState)}
        >
          Guess
        </Button>
      );
    else
      return (
        <Button
          className="guess-button"
          variant="contained"
          color="warning"
          onClick={shareableResultClickHandler(gameState, setGameState)}
        >
          Share Result
        </Button>
      );
  };

  //TODO: Handling inconsistent attempts remaining between frontend, backend is undefined right now

  return (
    <>
      <div className="guesses">
        {/* @ts-ignore */}
        <Grid container direction="column" alignItems="center">
          {closedGuesses}
          {openGuesses}
          <Autocomplete
            disablePortal
            value={gameState.currentGuessName}
            id="us-state-autocomplete"
            className="us-state-autocomplete"
            options={guessableStateRecords.map((stateRecord: StateRecord) => stateRecord.name)}
            onInputChange={inputChangeHandler}
            renderInput={(params) => (<TextField {...params} label="Guess a state" />) as React.ReactNode}
            disabled={!gameOngoing}
          />
        </Grid>
        <MainButton />
      </div>
      {(<TargetStateSnackbar gameState={gameState} setGameState={setGameState} />) as React.ReactNode}
      {(<ShareableResultSnackbar gameState={gameState} setGameState={setGameState} />) as React.ReactNode}
    </>
  );
}

/*
- Replace existing button with different color button for sharing
#gdple X/6 blocks
*/
