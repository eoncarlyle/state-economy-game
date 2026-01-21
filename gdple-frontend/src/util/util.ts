import { DateTime } from "luxon";
import { Dispatch, StateUpdater, useEffect } from "preact/hooks";

import { getTargetStateEconomy, postPuzzleSession } from "../util/rest";
import stateRecordList from "./UsStates.ts";
import { MAX_GUESSES } from "./constants.ts";
import {
  CachedEconomy,
  GameState,
  GlobalState,
  IPuzzleSession,
  PuzzleHistory,
  StateEconomy,
  StateRecord,
} from "./model.ts";

const CACHED_ECONOMY_KEY = "puzzleStateEconomy";
const GAME_HISTORY = "gameHistory";

export const getUsStateRecords = () => stateRecordList;

export const getUsStateRecord = (stateName: string) =>
  stateRecordList.find(
    (stateRecord: StateRecord) => stateRecord.name === stateName,
  );

export const getReferenceDate = () => {
  return DateTime.now().setZone("America/Chicago");
};

export const getReferenceDateString = () => {
  return getReferenceDate().toFormat("yyyy-MM-dd");
};

const getCachedEconomy = (): CachedEconomy | null => {
  const cachedEconomy = localStorage.getItem(CACHED_ECONOMY_KEY);
  if (cachedEconomy) {
    return JSON.parse(cachedEconomy);
  } else {
    return null;
  }
};

export const getPuzzleHistory = (): PuzzleHistory => {
  const gameHistory = localStorage.getItem(GAME_HISTORY);
  if (gameHistory) {
    return JSON.parse(gameHistory);
  } else return {};
};

export const getCurrentStreak = (): number => {
  const puzzleHistory = getPuzzleHistory();
  const dates = Object.keys(puzzleHistory).sort();

  if (dates.length === 0) return 0;

  let currentStreak = 0;
  let expectedDate = new Date();

  for (let index = dates.length - 1; index >= 0; index--) {
    const date = dates[index];
    const dayData = puzzleHistory[date];
    const currentDate = new Date(date);

    if (index === dates.length - 1) {
      if (dayData.guesses && dayData.guesses.length > 0) {
        currentStreak++;
        expectedDate = new Date(currentDate);
        expectedDate.setDate(expectedDate.getDate() - 1);
      } else {
        break;
      }
    } else {
      const expectedDateStr = expectedDate.toISOString().split("T")[0];

      if (
        date === expectedDateStr &&
        dayData.guesses &&
        dayData.guesses.length > 0
      ) {
        currentStreak++;
        expectedDate.setDate(expectedDate.getDate() - 1);
      } else {
        break;
      }
    }
  }

  return currentStreak;
};

export const getMaxStreak = () => {
  const puzzleHistory = getPuzzleHistory();
  const dates = Object.keys(puzzleHistory).sort();

  if (dates.length === 0) return 0;

  let maxStreak = 0;
  let currentStreak = 0;
  let lastDate: Date | null = null;

  for (const dateStr of dates) {
    const dayData = puzzleHistory[dateStr];
    const currentDate = new Date(dateStr);

    if (dayData.guesses && dayData.guesses.length > 0) {
      if (lastDate === null) {
        currentStreak = 1;
      } else {
        const expectedDate = new Date(lastDate);
        expectedDate.setDate(expectedDate.getDate() + 1);
        const expectedDateStr = expectedDate.toISOString().split("T")[0];

        if (dateStr === expectedDateStr) {
          currentStreak++;
        } else {
          currentStreak = 1;
        }
      }

      maxStreak = Math.max(maxStreak, currentStreak);
      lastDate = currentDate;
    } else {
      currentStreak = 0;
      lastDate = null;
    }
  }

  return maxStreak;
};

//? Will strange things happen when players start a game on one reference...
//? ...day and pick it up on the next reference day?
export const updatePuzzleHistory = (updatedState: GameState) => {
  const gameHistory = getPuzzleHistory();

  gameHistory[getReferenceDateString()] = {
    id: updatedState.id,
    guesses: updatedState.guesses,
    isWin: updatedState.isWin,
  };
  localStorage.setItem(GAME_HISTORY, JSON.stringify(gameHistory));
};

export const getStoredGameState = (
  stateEconomy: StateEconomy | null,
  setGlobalState: Dispatch<StateUpdater<GlobalState>>,
  forceSessionRequery: boolean,
) => {
  if (!forceSessionRequery && getReferenceDateString() in getPuzzleHistory()) {
    const puzzleHistoryEntry = getPuzzleHistory()[getReferenceDateString()];
    setGlobalState({
      stateEconomy: stateEconomy,
      gameState: {
        id: puzzleHistoryEntry.id,
        guesses: puzzleHistoryEntry.guesses,
        currentGuessName: null,
        isWin: puzzleHistoryEntry.isWin,
        showAnswer:
          !puzzleHistoryEntry.isWin &&
          puzzleHistoryEntry.guesses.length >= MAX_GUESSES,
        showShareableResultMessage: false,
      },
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
        setGlobalState({
          stateEconomy: stateEconomy,
          gameState: gameState,
        });
        updatePuzzleHistory(gameState);
      } else setGlobalState({ stateEconomy: stateEconomy, gameState: null });
    });
  }
};

export const resetGlobalState = (
  setGlobalState: Dispatch<StateUpdater<GlobalState>>,
  forceRequery: boolean,
) => {
  const cachedEconomy = getCachedEconomy();
  if (
    forceRequery ||
    !cachedEconomy ||
    cachedEconomy.referenceDateString !== getReferenceDateString()
  ) {
    getTargetStateEconomy().then((response: StateEconomy | null) => {
      if (response) {
        localStorage.setItem(
          CACHED_ECONOMY_KEY,
          JSON.stringify({
            stateEconomy: response,
            referenceDateString: getReferenceDateString(),
          }),
        );
        getStoredGameState(response, setGlobalState, true); // *
      } else {
        console.error("Failure to fetch state economy");
      }
    });
  } else {
    getStoredGameState(cachedEconomy.stateEconomy, setGlobalState, false); // *
  }
};

export const useResetGlobalState = (
  globalState: GlobalState,
  setGlobalState: Dispatch<StateUpdater<GlobalState>>,
  forceEconomyRequery: boolean,
) => {
  useEffect(() => {
    resetGlobalState(setGlobalState, forceEconomyRequery);
  }, [globalState]);
};

export const isGoneResponse = (response: any) => {
  return response.type === "GoneResponse";
};
