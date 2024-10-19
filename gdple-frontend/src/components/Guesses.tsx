import { useState } from "preact/hooks";

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
import { Autocomplete } from "@mantine/core";

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

  const inputChangeHandler = (newInputValue: string | null) => {
    setGameState({ ...gameState, currentGuessName: newInputValue });
  };

  console.log(gameState.currentGuessName);
  //TODO: Handling inconsistent attempts remaining between frontend, backend is undefined right now, Issue #21
  return (
    <>
      <div className="guesses">
        {/* @ts-ignore */}
        {closedGuesses}
        {openGuesses}
        <Autocomplete
          label="Guess a state"
          data={guessableStateRecords(gameState).map(
            (stateRecord: StateRecord) => stateRecord.name,
          )}
          onChange={inputChangeHandler}
          disabled={!isGameOngoing(gameState)}
          limit={5}
          value={gameState.currentGuessName ? gameState.currentGuessName : ""}
        />
        <MainButton gameState={gameState} setGameState={setGameState} />
      </div>
      <PuzzleAnswerModal gameState={gameState} setGameState={setGameState} />
      <ToastContainer />
      {gameState.showShareableResultMessage && (
        <ShareResultToast gameState={gameState} setGameState={setGameState} />
      )}
    </>
  );
}
