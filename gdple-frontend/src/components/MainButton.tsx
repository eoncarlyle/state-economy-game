import Button from "@mui/material/Button";
import { StateUpdater } from "preact/hooks";

import {
  getGuessSubmitHandler,
  isGameOngoing,
  shareableResultClickHandler,
} from "../util/guess";
import { MAX_GUESSES } from "../../lib/constants";
import { GameState } from "../../lib/model";

export default function MainButton({
  gameState,
  setGameState,
}: {
  gameState: GameState;
  setGameState: StateUpdater<GameState | null>;
}) {
  const gameOngoing = isGameOngoing(gameState);
  if (gameOngoing)
    return (
      <Button
        className="guess-button"
        variant="contained"
        disabled={!gameOngoing}
        onClick={getGuessSubmitHandler(MAX_GUESSES, gameState, setGameState)}
      >
        Guess
      </Button>
    );
  else
    return (
      <Button
        className="guess-button"
        variant="contained"
        color="warning"
        onClick={shareableResultClickHandler(gameState, setGameState)}
      >
        Share Result
      </Button>
    );
}
