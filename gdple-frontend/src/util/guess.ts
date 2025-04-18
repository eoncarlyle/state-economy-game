import { DateTime } from "luxon";
import { Dispatch, StateUpdater } from "preact/hooks";

import { getBearingEmoji } from "../components/BearingIcon.tsx";
import { MAX_GUESSES } from "./constants.ts";
import { GameState, GlobalState, Guess, StateRecord } from "./model.ts";
import { postGuessSubmission } from "./rest";
import {
  getReferenceDate,
  getUsStateRecords,
  isGoneResponse,
  resetGlobalState,
  updatePuzzleHistory,
} from "./util.ts";

export function getGuessSubmitHandler(
  globalState: GlobalState,
  setGlobalState: Dispatch<StateUpdater<GlobalState>>,
  maxGuesses: number,
) {
  return async () => {
    //TODO: reflect on if the 'don't update anything if you hit an error' makes sense, Issue #20

    const gameState = globalState.gameState;

    const setGameState = (gameState: GameState | null) =>
      setGlobalState({ ...globalState, gameState: gameState });

    if (
      gameState &&
      gameState.currentGuessName &&
      guessableStateRecords(gameState).includes(
        StateRecord.of(gameState.currentGuessName),
      )
    ) {
      const guessedStateRecord = StateRecord.of(gameState.currentGuessName);
      const guessSubmissionResponse = await postGuessSubmission({
        id: gameState.id,
        guessStateName: gameState.currentGuessName,
        requestTimestamp: Date.now(),
      });

      if (guessSubmissionResponse && "id" in guessSubmissionResponse) {
        const submittedGuess: Guess = {
          stateRecord: guessedStateRecord,
          bearing: guessSubmissionResponse.bearing,
          gdpRatio: guessSubmissionResponse.gdpRatio,
          isWin: guessSubmissionResponse.isWin,
        };
        let updatedState: GameState = {
          ...gameState,
          guesses: gameState.guesses.concat(submittedGuess),
          currentGuessName: null,
        };
        if (guessSubmissionResponse.isWin) {
          updatedState = {
            ...updatedState,
            isWin: true,
          };
        } else if (gameState.guesses.length + 1 >= maxGuesses) {
          updatedState = {
            ...updatedState,
            showAnswer: true,
          };
        }
        updatePuzzleHistory(updatedState);
        setGameState(updatedState);
      } else if (isGoneResponse(guessSubmissionResponse)) {
        resetGlobalState(setGlobalState, true);
      }
    }
  };
}

function getResultRow(guess: Guess) {
  if (guess.isWin) return "🏁🏁";
  else {
    if (guess.gdpRatio > 1) {
      return "📈" + getBearingEmoji(guess.bearing);
    } else if (guess.gdpRatio < 1) {
      return "📉" + getBearingEmoji(guess.bearing);
    } else {
      return "🟰" + getBearingEmoji(guess.bearing);
    }
  }
}

export function getShareableResult(gameState: GameState) {
  const emojiResult = gameState.guesses.map(getResultRow).join("\n");
  const numericResult = gameState.isWin
    ? String(gameState.guesses.length)
    : "X";
  const referenceDate = getReferenceDate().toLocaleString(DateTime.DATE_MED);
  return `#gdple ${referenceDate}\n\n${numericResult}/5\n${emojiResult}\ngdple.iainschmitt.com`;
}

export function shareableResultClickHandler(
  gameState: GameState | null,
  setGameState: (gameState: GameState | null) => void,
) {
  return async () => {
    if (gameState) {
      const type = "text/plain";
      const data = [
        new ClipboardItem({
          [type]: new Blob([getShareableResult(gameState)], { type }),
        }),
      ];
      await navigator.clipboard.write(data);
      setGameState({ ...gameState, showShareableResultMessage: true });
    }
  };
}

//TODO Change this for game state overhaul, Issue #21
export function isGameOngoing(gameState: GameState | null) {
  return (
    gameState === null ||
    (gameState.guesses.length < MAX_GUESSES && !gameState.isWin)
  );
}

export function guessableStateRecords(gameState: GameState) {
  return getUsStateRecords().filter(
    (stateRecord: StateRecord) =>
      !gameState.guesses
        .map((guess: Guess) => guess.stateRecord.name)
        .includes(stateRecord.name),
  );
}
