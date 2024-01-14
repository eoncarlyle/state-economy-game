import { StateUpdater, useContext } from "preact/hooks";
import { DateTime } from "luxon";

import { StateRecord, GameState, GameHistory } from "../model/model";
import TargetStateRecord from "./TargetStateRecordContext";
import { MAX_GUESSES } from "../config";

const GAME_HISTORY = "gameHistory";

export function guessSubmitHandlerFactory(
  maxGuesses: number,
  guessableStateRecords: Array<StateRecord>,
  state: GameState,
  setState: StateUpdater<GameState>
) {
  const targetStateRecord = useContext(TargetStateRecord);
  return () => {
    if (state.currentGuessName && guessableStateRecords.includes(StateRecord.of(state.currentGuessName))) {
      const guessedStateRecord = StateRecord.of(state.currentGuessName);
      let updatedState;
      if (targetStateRecord === guessedStateRecord) {
        updatedState = {
          ...state,
          guesses: state.guesses.concat(guessedStateRecord),
          currentGuessName: null,
          isWin: true
        };
      } else if (targetStateRecord !== guessedStateRecord && state.guesses.length + 1 === maxGuesses) {
        updatedState = {
          ...state,
          guesses: state.guesses.concat(guessedStateRecord),
          currentGuessName: null,
          showAnswer: true
        };
      } else {
        updatedState = {
          ...state,
          guesses: state.guesses.concat(guessedStateRecord),
          currentGuessName: null
        };
      }
      updateGameHistory(updatedState);
      setState(updatedState);
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
    guesses: updatedState.guesses,
    isWin: updatedState.isWin
  };
  localStorage.setItem(GAME_HISTORY, JSON.stringify(gameHistory));
}

export function getGameState(): GameState {
  if (getReferenceDateString() in getGameHistory()) {
    const gameEntry = getGameHistory()[getReferenceDateString()];
    return {
      guesses: gameEntry.guesses,
      currentGuessName: null,
      isWin: gameEntry.isWin,
      showAnswer: !gameEntry.isWin && gameEntry.guesses.length >= MAX_GUESSES
    };
  } else {
    return {
      guesses: [],
      currentGuessName: null,
      isWin: false,
      showAnswer: false
    };
  }
}
