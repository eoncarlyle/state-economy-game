import { DateTime } from "luxon";

import stateRecordList from "./UsStates.ts";
import {
  GameState,
  PuzzleHistory,
  StateRecord,
} from "./model.ts";

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
        expectedDate.setUTCDate(expectedDate.getUTCDate() - 1);
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
        expectedDate.setUTCDate(expectedDate.getUTCDate() - 1);
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
        expectedDate.setUTCDate(expectedDate.getUTCDate() + 1);
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

export const isGoneResponse = (response: any) => {
  return response?.type === "GoneResponse";
};
