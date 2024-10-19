import { Button } from "react-aria-components";
import { StateUpdater } from "preact/hooks";
import { ReactNode } from "preact/compat";

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
        className="button guess-button lowerbox-item"
        isDisabled={!gameOngoing}
        onPress={getGuessSubmitHandler(MAX_GUESSES, gameState, setGameState)}
      >
        Guess
      </Button>
    ) as ReactNode;
  else
    return (
      <Button
        className="button share-button lowerbox-item"
        color="warning"
        onPress={shareableResultClickHandler(gameState, setGameState)}
      >
        Share Result
      </Button>
    );
}
