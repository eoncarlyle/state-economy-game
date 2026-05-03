import { DateTime } from "luxon";

import { getBearingEmoji } from "../components/BearingIcon.tsx";
import { MAX_GUESSES } from "./constants.ts";
import { GameState, Guess, StateRecord } from "./model.ts";
import {
  getReferenceDate,
  getUsStateRecords,
} from "./util.ts";

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
