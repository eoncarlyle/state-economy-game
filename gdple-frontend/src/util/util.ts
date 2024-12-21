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

function getPuzzleHistory(): PuzzleHistory {
  const gameHistory = localStorage.getItem(GAME_HISTORY);
  if (gameHistory) {
    return JSON.parse(gameHistory);
  } else return {};
}

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

/*

#43: Midnight problem/chaching state economy works right now, but I am not handling the invalidation well right now (or really at all)
I think the best way to show to the user 'yes we have invalidated, now play again' is with a loading spinner modal that deliberately
takes like a second.

Also I don't love the way things are right now - even if they technically work. A lot of the function names don't make a ton of sense,
must refactor this before merging

*/

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
    // * If these are instead replaced with a call at the end of the function, we get mutliple erroneous
    // calls to `/economy`, which does make sense when you walk through it
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
