import { Button } from "react-aria-components";
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
        className="new-button new-guess-button"
        isDisabled={!gameOngoing}
        onPress={getGuessSubmitHandler(MAX_GUESSES, gameState, setGameState)}
      >
        Guess
      </Button>
    );
  else
    return (
      <Button
        className="new-button new-share-button"
        variant="contained"
        color="warning"
        onClick={shareableResultClickHandler(gameState, setGameState)}
      >
        Share Result
      </Button>
    );
}
