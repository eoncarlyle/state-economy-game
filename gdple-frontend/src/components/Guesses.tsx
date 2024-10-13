import { useState, useEffect } from "preact/hooks";
import CustomAutocomplete from "./autocomplete/CustomAutcomplete";

import { useMediaQuery } from "@mui/material";
import { ReactNode } from "preact/compat";

import GuessRow from "./GuessRow";
import { GameState, Guess, StateRecord } from "../../lib/model";
import {
  getStoredGameState,
  guessableStateRecords,
  isGameOngoing,
} from "../util/guess";
import PuzzleAnswerModal from "./PuzzleAnswerModal";
import MainButton from "./MainButton";
import { MAX_GUESSES } from "../../lib/constants";
import { ToastContainer } from "react-tiny-toast";
import ShareResultToast from "./ShareStateToast";

export default function Guesses() {
  const [gameState, setGameState] = useState<GameState | null>(null);
  getStoredGameState(setGameState);

  //TODO Not proud of this Issue #22
  if (!gameState) return <></>;

  const closedGuesses = gameState.guesses.map((guess: Guess) => (
    <GuessRow guess={guess} />
  ));
  const openGuesses = Array(MAX_GUESSES - gameState.guesses.length)
    .fill(undefined)
    .map(() => <GuessRow />);

  const inputChangeHandler = (_event: any, newInputValue: string | null) => {
    setGameState({ ...gameState, currentGuessName: newInputValue });
  };

  const autocompoleteComponentProps = useMediaQuery("(min-width:600px)")
    ? {}
    : {
        popper: {
          placement: "top",
        },
      };

  function suggest(query: string, populateResults: any) {
    const results = gameState
      ? guessableStateRecords(gameState).map(
          (stateRecord: StateRecord) => stateRecord.name,
        )
      : [];
    const filteredResults = results.filter(
      (result) => result.toLowerCase().indexOf(query.toLowerCase()) !== -1,
    );
    populateResults(filteredResults);
  }

  //TODO: Handling inconsistent attempts remaining between frontend, backend is undefined right now, Issue #21
  return (
    <>
      <div className="guesses">
        {/* @ts-ignore */}
        {closedGuesses}
        {openGuesses}
        {/*
        <Autocomplete
          disablePortal
          value={gameState.currentGuessName}
          id="us-state-autocomplete"
          className="us-state-autocomplete"
          options={guessableStateRecords(gameState).map(
            (stateRecord: StateRecord) => stateRecord.name,
          )}
          onInputChange={inputChangeHandler}
          renderInput={(params) =>
            (<TextField {...params} label="Guess a state" />) as ReactNode
          }
          disabled={!isGameOngoing(gameState)}
          componentsProps={autocompoleteComponentProps}
        />
        */}
        <CustomAutocomplete
          display="overview"
          id="us-state-autocomplete"
          source={suggest}
          disabled={true}
        />
        <MainButton gameState={gameState} setGameState={setGameState} />
      </div>
      <PuzzleAnswerModal gameState={gameState} setGameState={setGameState} />
      <ToastContainer />
      {gameState.showShareResultToast && (
        <ShareResultToast gameState={gameState} setGameState={setGameState} />
      )}
    </>
  );
}
