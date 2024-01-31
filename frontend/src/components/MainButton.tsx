import Button from "@mui/material/Button";
import { StateUpdater } from "preact/hooks";

import { guessSubmitHandlerFactory, guessableStateRecords, isGameOngoing, shareableResultClickHandler } from "../util/guess";
import { MAX_GUESSES } from "state-economy-game-util/constants";
import { GameState } from "state-economy-game-util/model";

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
        onClick={guessSubmitHandlerFactory(MAX_GUESSES, guessableStateRecords(gameState), gameState, setGameState)}
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
