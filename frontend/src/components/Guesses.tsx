import { useState, useContext } from "preact/hooks";
import { Autocomplete, Button, TextField, Grid, Snackbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import TargetStateRecord from "../util/TargetStateRecordContext";
import GuessRow from "./GuessRow";
import { getStateRecords } from "../util/util";
import { StateRecord, GameState } from "../model/model";
import React from "react";
import { getGameState, guessSubmitHandlerFactory } from "../util/guess";
import { MAX_GUESSES } from "../config";

export default function Guesses() {
  const [state, setState] = useState<GameState>(getGameState());
  const targetStateRecord = useContext(TargetStateRecord);
  // TODO: Move this

  const guessAllowed = state.guesses.length < MAX_GUESSES && !state.isWin;
  const closedGuesses = state.guesses.map((guess: StateRecord) => <GuessRow guessStateName={guess.name} />);
  const openGuesses = Array(MAX_GUESSES - state.guesses.length)
    .fill(undefined)
    .map(() => <GuessRow />);

  const guessableStateRecords = getStateRecords().filter(
    (stateRecord: StateRecord) => !state.guesses.includes(stateRecord)
  );

  //
  const inputChangeHandler = (_event: any, newInputValue: string | null) => {
    setState({ ...state, currentGuessName: newInputValue });
  };

  const closeAnswerHandler = () => {
    setState({ ...state, showAnswer: false });
  };

  return (
    <>
      <div className="guesses">
        {/* @ts-ignore */}
        <Grid container direction="column" alignItems="center">
          {closedGuesses}
          {openGuesses}
          <Autocomplete
            disablePortal
            value={state.currentGuessName}
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
          onClick={guessSubmitHandlerFactory(MAX_GUESSES, guessableStateRecords, state, setState)}
        >
          Guess
        </Button>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={state.showAnswer}
        onClick={closeAnswerHandler}
        message={`Correct answer: ${targetStateRecord.name}`}
        action={
          (
            <>
              <IconButton onClick={closeAnswerHandler} color="inherit">
                {(<CloseIcon />) as React.ReactNode}
              </IconButton>
            </>
          ) as React.ReactNode
        }
      />
    </>
  );
}
