import { StateUpdater } from "preact/hooks";
import { DateTime } from "luxon";

import { getUsStateRecords } from "./util.ts";
import { MAX_GUESSES } from "./constants.ts";
import { postGuessSubmission, postPuzzleSession } from "./rest";
import { useEffect } from "react";
import {GameState, Guess, IPuzzleSession, PuzzleHistory, StateRecord} from "./model.ts";

const GAME_HISTORY = "gameHistory";
const GREEN_SQUARE_VALUE = 20;
const YELLOW_SQUARE_VALUE = 10;

export function getGuessSubmitHandler(
  maxGuesses: number,
  gameState: GameState,
  setGameState: StateUpdater<GameState | null>,
) {
  return async () => {
    //TODO: reflect on if the 'don't update anything if you hit an error' makes sense, Issue #20
    if (
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

      if (guessSubmissionResponse) {
        const submittedGuess: Guess = {
          stateRecord: guessedStateRecord,
          bearing: guessSubmissionResponse.bearing,
          percentileScore: guessSubmissionResponse.percentileScore,
        };
        let updatedState: GameState = {
          ...gameState,
          guesses: gameState.guesses.concat(submittedGuess),
          currentGuessName: null,
        };
        if (guessSubmissionResponse.percentileScore === 100) {
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
      }
    }
  };
}

function getReferenceDate() {
  return DateTime.now().setZone("America/Chicago");
}

function getReferenceDateString() {
  return getReferenceDate().toFormat("yyyy-MM-dd");
}

function getPuzzleHistory(): PuzzleHistory {
  const gameHistory = localStorage.getItem(GAME_HISTORY);
  if (gameHistory) {
    return JSON.parse(gameHistory);
  } else return {};
}

//? Will strange things happen when players start a game on one reference...
//? ...day and pick it up on the next reference day?
export function updatePuzzleHistory(updatedState: GameState) {
  const gameHistory = getPuzzleHistory();

  gameHistory[getReferenceDateString()] = {
    id: updatedState.id,
    guesses: updatedState.guesses,
    isWin: updatedState.isWin,
  };
  localStorage.setItem(GAME_HISTORY, JSON.stringify(gameHistory));
}

export function getStoredGameState(
  setGameState: StateUpdater<GameState | null>,
) {
  useEffect(() => {
    if (getReferenceDateString() in getPuzzleHistory()) {
      const puzzleHistoryEntry = getPuzzleHistory()[getReferenceDateString()];
      setGameState({
        id: puzzleHistoryEntry.id,
        guesses: puzzleHistoryEntry.guesses,
        currentGuessName: null,
        isWin: puzzleHistoryEntry.isWin,
        showAnswer:
          !puzzleHistoryEntry.isWin &&
          puzzleHistoryEntry.guesses.length >= MAX_GUESSES,
        showShareResultToast: false,
      });
    } else {
      postPuzzleSession().then((puzzleSession: IPuzzleSession | null) => {
        if (puzzleSession) {
          const gameState = {
            id: puzzleSession.id,
            guesses: [],
            currentGuessName: null,
            isWin: false,
            showAnswer: false,
            showShareableResultMessage: false,
          };
          setGameState(gameState);
          updatePuzzleHistory(gameState);
        } else setGameState(null);
      });
    }
  }, [setGameState]);
}

export function getShareableResult(gameState: GameState) {
  const emojiResult = gameState.guesses
    .map((guess: Guess) => {
      const greenCount = Math.floor(guess.percentileScore / GREEN_SQUARE_VALUE);
      const yellowCount = Math.floor(
        (guess.percentileScore - GREEN_SQUARE_VALUE * greenCount) /
          YELLOW_SQUARE_VALUE,
      );
      return Array(greenCount)
        .fill("🟩")
        .concat(Array(yellowCount).fill("🟨"))
        .concat(Array(MAX_GUESSES - greenCount - yellowCount).fill("⬜"))
        .join("");
    })
    .join("\n");
  const numericResult = gameState.isWin
    ? String(gameState.guesses.length)
    : "X";
  const referenceDate = getReferenceDate().toLocaleString(DateTime.DATE_MED);
  return `#gdple ${referenceDate}\n\n${numericResult}/5\n${emojiResult}\ngdple.iainschmitt.com`;
}

export function shareableResultClickHandler(
  gameState: GameState,
  setGameState: StateUpdater<GameState | null>,
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
export function isGameOngoing(gameState: GameState) {
  return gameState.guesses.length < MAX_GUESSES && !gameState.isWin;
}

export function guessableStateRecords(gameState: GameState) {
  return getUsStateRecords().filter(
    (stateRecord: StateRecord) =>
      !gameState.guesses
        .map((guess: Guess) => guess.stateRecord.name)
        .includes(stateRecord.name),
  );
}
