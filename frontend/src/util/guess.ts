import { StateUpdater } from "preact/hooks";
import { DateTime } from "luxon";

import { StateRecord, GameState, GameHistory, GameId, Guess } from "state-economy-game-util/model";
import { getUsStateRecords } from "state-economy-game-util/util";
import { MAX_GUESSES } from "state-economy-game-util/constants";
import { postGuessSubmission, postGameId } from "./rest";
import { useEffect } from "react";

const GAME_HISTORY = "gameHistory";

export function guessSubmitHandlerFactory(
  maxGuesses: number,
  gameState: GameState,
  setGameState: StateUpdater<GameState | null>
) {
  return async () => {
    //TODO: reflect on if the 'don't update anything if you hit an error' makes sense
    if (
      gameState.currentGuessName &&
      guessableStateRecords(gameState).includes(StateRecord.of(gameState.currentGuessName))
    ) {
      const guessedStateRecord = StateRecord.of(gameState.currentGuessName);
      const guessSubmissionResponse = await postGuessSubmission({
        id: gameState.id,
        guessStateName: gameState.currentGuessName,
        requestTimestamp: Date.now()
      });

      if (guessSubmissionResponse) {
        const submittedGuess: Guess = {
          stateRecord: guessedStateRecord,
          distance: guessSubmissionResponse.distance,
          bearing: guessSubmissionResponse.bearing,
          percentileScore: guessSubmissionResponse.percentileScore,
        };
        let updatedState: GameState = {
          ...gameState,
          guesses: gameState.guesses.concat(submittedGuess),
          currentGuessName: null,
        };
        if (guessSubmissionResponse.distance === 0) {
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
        updateGameHistory(updatedState);
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

function getGameHistory(): GameHistory {
  const gameHistory = localStorage.getItem(GAME_HISTORY);
  if (gameHistory) {
    return JSON.parse(gameHistory);
  } else return {};
}

//? Will strange things happen when players start a game on one reference...
//? ...day and pick it up on the next reference day?
export function updateGameHistory(updatedState: GameState) {
  const gameHistory = getGameHistory();

  gameHistory[getReferenceDateString()] = {
    id: updatedState.id,
    guesses: updatedState.guesses,
    isWin: updatedState.isWin,
  };
  localStorage.setItem(GAME_HISTORY, JSON.stringify(gameHistory));
}

export function getStoredGameState(setGameState: StateUpdater<GameState | null>) {
  useEffect(() => {
    if (getReferenceDateString() in getGameHistory()) {
      const gameEntry = getGameHistory()[getReferenceDateString()];
      setGameState({
        id: gameEntry.id,
        guesses: gameEntry.guesses,
        currentGuessName: null,
        isWin: gameEntry.isWin,
        showAnswer: !gameEntry.isWin && gameEntry.guesses.length >= MAX_GUESSES,
        showShareableResultMessage: false,
      });
    } else {
      postGameId().then((gameId: GameId | null) => {
        if (gameId)
          setGameState({
            id: gameId.id,
            guesses: [],
            currentGuessName: null,
            isWin: false,
            showAnswer: false,
            showShareableResultMessage: false,
          });
        else setGameState(null);
      });
    }
  }, [setGameState]);
}

export function getShareableResult(gameState: GameState) {
  const emojiResult = gameState.guesses
    .map((guess: Guess) => {
      const greenCount = Math.floor(guess.percentileScore / 20);
      return Array(greenCount)
        .fill("🟩")
        .concat(Array(5 - greenCount).fill("🟨"))
        .join("");
    })
    .join("\n");
  const numericResult = gameState.isWin ? String(gameState.guesses.length) : "X";
  return `#gdple,${numericResult}/5\n${emojiResult}\ngdple.iainschmitt.com`;
}

export function shareableResultClickHandler(gameState: GameState, setGameState: StateUpdater<GameState | null>) {
  return async () => {
    if (gameState) {
      const type = "text/plain";
      const data = [new ClipboardItem({ [type]: new Blob([getShareableResult(gameState)], { type }) })];
      await navigator.clipboard.write(data);
      setGameState({ ...gameState, showShareableResultMessage: true });
    }
  };
}

//TODO Change this for game state overhaul
export function isGameOngoing(gameState: GameState) {
  return gameState.guesses.length < MAX_GUESSES && !gameState.isWin;
}

export function guessableStateRecords(gameState: GameState) {
  return getUsStateRecords().filter(
    (stateRecord: StateRecord) =>
      !gameState.guesses.map((guess: Guess) => guess.stateRecord.name).includes(stateRecord.name)
  );
}
