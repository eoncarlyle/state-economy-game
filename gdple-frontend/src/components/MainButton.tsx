import { Button } from "react-aria-components";
import { ReactNode } from "preact/compat";

import {
  getGuessSubmitHandler,
  isGameOngoing,
  shareableResultClickHandler,
} from "../util/guess";
import { MAX_GUESSES } from "../util/constants.ts";
import { GlobalState } from "../util/model.ts";

export default function MainButton(props: GlobalState) {
  const { gameState, setGameState } = props;
  const gameOngoing = isGameOngoing(gameState);
  if (gameOngoing)
    return (
      <Button
        className="button guess-button lowerbox-item"
        isDisabled={!gameOngoing}
        onPress={getGuessSubmitHandler(props, MAX_GUESSES)}
      >
        Guess
      </Button>
    ) as ReactNode;
  else
    return (
      <Button
        className="button share-button lowerbox-item"
        onPress={shareableResultClickHandler(gameState, setGameState)}
      >
        Share Result
      </Button>
    );
}
