import { ReactNode } from "preact/compat";
import { StateUpdater } from "preact/hooks";
import { Dispatch } from "react";
import { Button } from "react-aria-components";

import { MAX_GUESSES } from "../util/constants.ts";
import {
  getGuessSubmitHandler,
  isGameOngoing,
  shareableResultClickHandler,
} from "../util/guess";
import { GameState, GlobalState } from "../util/model.ts";

export default function MainButton(props: {
  globalState: GlobalState;
  setGlobalState: Dispatch<StateUpdater<GlobalState>>;
}) {
  const { globalState, setGlobalState } = props;
  const gameState = globalState.gameState;
  const setGameState = (gameState: GameState | null) =>
    setGlobalState({ ...globalState, gameState: gameState });
  const gameOngoing = isGameOngoing(gameState);
  if (gameOngoing)
    return (
      <Button
        className="button guess-button lowerbox-item"
        isDisabled={!gameOngoing}
        onPress={getGuessSubmitHandler(
          globalState,
          setGlobalState,
          MAX_GUESSES,
        )}
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
