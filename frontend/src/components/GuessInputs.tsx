import { useState } from "preact/hooks";
import { Autocomplete, Button, TextField } from "@mui/material";

import GuessRow from "./GuessRow";
import { getStateRecords } from "../util/util";
import { StateRecord } from "../model/model";

const maxGuesses = 5;

interface GuessInputsState {
  guesses: Array<StateRecord>;
  currentGuessName: string | null;
}

export default function GuessInputs() {
  const [state, setState] = useState<GuessInputsState>({ guesses: [], currentGuessName: null });
  const guessEnabled = state.currentGuessName && (state.guesses.length < maxGuesses);
  const priorGuesses = state.guesses.map((guess: StateRecord) => <GuessRow guessStateName={guess.name} />);
  const futureGuesses = Array(maxGuesses - state.guesses.length)
    .fill(undefined)
    .map((guess: string) => <GuessRow guessStateName={guess} />);
  const guessableStateRecords = getStateRecords().filter((stateRecord: StateRecord) => !state.guesses.includes(stateRecord))
  
  const inputChangeHandler = (event: any, newInputValue: string | null) => {
    setState({ ...state, currentGuessName: newInputValue});
  };

  const submitHandler = () => {
    if (state.currentGuessName && guessableStateRecords.includes(StateRecord.of(state.currentGuessName)))
      setState({ guesses: state.guesses.concat( StateRecord.of(state.currentGuessName)), currentGuessName: null });
  };

  return (
    <div className="guess-input-container">
      {priorGuesses}
      {futureGuesses}
      
      <Autocomplete
        disablePortal
        value={state.currentGuessName}
        id="us-state-autocomplete"
        options={ guessableStateRecords.map((stateRecord: StateRecord) => stateRecord.name ) }
        className="guess-row"
        onInputChange={inputChangeHandler}
        renderInput={(params) => (<TextField {...params} className="guess-row" />) as React.ReactNode}
      />
      
      <Button className="guess-row" disabled={!guessEnabled} onClick={submitHandler}>
        Guess
      </Button>
    </div>
  );
}
