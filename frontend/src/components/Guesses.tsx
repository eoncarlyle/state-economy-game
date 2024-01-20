import { useState } from "preact/hooks";
import { Autocomplete, Button, TextField, Grid } from "@mui/material";
import React from "react";

import GuessRow from "./GuessRow";
import { getUsStateRecords } from "state-economy-game-util/util"
import { StateRecord, GameState, Guess } from "state-economy-game-util/model"
import { getGameState, guessSubmitHandlerFactory } from "../util/guess";
import { MAX_GUESSES } from "state-economy-game-util/constants";
import TargetStateSnackbar from "./TargetStateSnackbar";

export default function Guesses() {
  const [gameState, setGameState] = useState<GameState | null>(null);
  getGameState(setGameState)

  //TODO Not proud of this 
  if (!gameState) return <></>

  const guessAllowed = gameState.guesses.length < MAX_GUESSES && !gameState.isWin;
  const closedGuesses = gameState.guesses.map((guess: Guess) => <GuessRow guess={guess}/>);
  const openGuesses = Array(MAX_GUESSES - gameState.guesses.length)
    .fill(undefined)
    .map(() => <GuessRow/>);

  const guessableStateRecords = getUsStateRecords().filter(
    (stateRecord: StateRecord) => !gameState.guesses.map((guess: Guess) => guess.stateRecord.name).includes(stateRecord.name)
  );
  
  //
  const inputChangeHandler = (_event: any, newInputValue: string | null) => {
    setGameState({ ...gameState, currentGuessName: newInputValue });
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
            disabled={!guessAllowed}
          />
        </Grid>
        <Button
          className="guess-button"
          variant="contained"
          disabled={!guessAllowed}
          onClick={guessSubmitHandlerFactory(MAX_GUESSES, guessableStateRecords, gameState, setGameState)}
        >
          Guess
        </Button>
      </div>
      {(<TargetStateSnackbar gameState={gameState} setGameState={setGameState} />) as React.ReactNode}
    </>
  );
}
