import GuessRow from "./GuessRow";
import { guessableStateRecords, isGameOngoing } from "../util/guess";
import PuzzleAnswerModal from "./PuzzleAnswerModal";
import MainButton from "./MainButton";
import { MAX_GUESSES } from "../util/constants.ts";
import { ToastContainer } from "react-tiny-toast";
import shareResultToast from "../util/shareStateToast.ts";
import { Autocomplete } from "@mantine/core";
import { Guess, StateRecord, GlobalState } from "../util/model.ts";

export default function Guesses(props: GlobalState) {
  const { gameState, setGameState } = props;

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

  //TODO: Handling inconsistent attempts remaining between frontend, backend is undefined right now, Issue #21

  gameState.showShareableResultMessage &&
    shareResultToast(gameState, setGameState);
  return (
    <>
      <div className="guesses">
        {/* @ts-ignore */}
        {closedGuesses}
        {openGuesses}
        <Autocomplete
          size={"md"}
          label="Guess a state"
          data={guessableStateRecords(gameState).map(
            (stateRecord: StateRecord) => stateRecord.name,
          )}
          onChange={inputChangeHandler}
          disabled={!isGameOngoing(gameState)}
          limit={5}
          value={gameState.currentGuessName ? gameState.currentGuessName : ""}
        />
        <MainButton {...props} />
      </div>
      {/* Todo: there has to be some better way to do this */}
      <PuzzleAnswerModal {...props} />
      <ToastContainer />
    </>
  );
}
