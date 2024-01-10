import { useState, useContext } from "preact/hooks";
import { Autocomplete, Button, TextField, Grid, Snackbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import TargetStateRecord from "../util/TargetStateRecordContext";
import GuessRow from "./GuessRow";
import { getStateRecords } from "../util/util";
import { StateRecord, GuessInputsState } from "../model/model";
import React from "react";

// I think this should be elsewhwere
const maxGuesses = 5;

export default function Guesses() {
  const [state, setState] = useState<GuessInputsState>({
    guesses: [],
    currentGuessName: null,
    gameWin: false,
    showAnswer: false,
  });
  const targetStateRecord = useContext(TargetStateRecord);

  const guessAllowed = state.guesses.length < maxGuesses && !state.gameWin;
  const closedGuesses = state.guesses.map((guess: StateRecord) => <GuessRow guessStateName={guess.name} />);
  const openGuesses = Array(maxGuesses - state.guesses.length)
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

  const guessSubmitHandler = () => {
    if (state.currentGuessName && guessableStateRecords.includes(StateRecord.of(state.currentGuessName))) {
      const guessedStateRecord = StateRecord.of(state.currentGuessName);
      if (targetStateRecord === guessedStateRecord) {
        setState({
          ...state,
          guesses: state.guesses.concat(guessedStateRecord),
          currentGuessName: null,
          gameWin: true,
        });
      } else if (targetStateRecord !== guessedStateRecord && state.guesses.length + 1 === maxGuesses) {
        setState({
          ...state,
          guesses: state.guesses.concat(guessedStateRecord),
          currentGuessName: null,
          showAnswer: true,
        });
      } else {
        setState({
          ...state,
          guesses: state.guesses.concat(guessedStateRecord),
          currentGuessName: null,
        });
      }
    }
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
        <Button className="guess-button" variant="contained" disabled={!guessAllowed} onClick={guessSubmitHandler}>
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
