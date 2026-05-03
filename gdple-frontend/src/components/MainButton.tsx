import { Dispatch, StateUpdater } from "preact/hooks";
import { Button } from "react-aria-components";

import { MAX_GUESSES } from "../util/constants.ts";
import {
  isGameOngoing,
  shareableResultClickHandler,
} from "../util/guess";
import { GameState, Guess, StateRecord } from "../util/model.ts";
import { useSubmitGuessMutation } from "../util/queries.ts";
import { updatePuzzleHistory, isGoneResponse } from "../util/util.ts";

export default function MainButton(props: {
  gameState: GameState;
  setGameState: Dispatch<StateUpdater<GameState | null>>;
}) {
  const { gameState, setGameState } = props;
  const submitGuessMutation = useSubmitGuessMutation();
  const gameOngoing = isGameOngoing(gameState);

  const handleGuessSubmit = () => {
    if (gameState.currentGuessName && !submitGuessMutation.isPending) {
      const guessedStateRecord = StateRecord.of(gameState.currentGuessName);
      submitGuessMutation.mutate(
        {
          id: gameState.id,
          guessStateName: gameState.currentGuessName,
          requestTimestamp: Date.now(),
        },
        {
          onSuccess: (response) => {
            if (response && "id" in response) {
              const submittedGuess: Guess = {
                stateRecord: guessedStateRecord,
                bearing: response.bearing,
                gdpRatio: response.gdpRatio,
                isWin: response.isWin,
              };
              let updatedState: GameState = {
                ...gameState,
                guesses: gameState.guesses.concat(submittedGuess),
                currentGuessName: null,
              };
              if (response.isWin) {
                updatedState = {
                  ...updatedState,
                  isWin: true,
                };
              } else if (gameState.guesses.length + 1 >= MAX_GUESSES) {
                updatedState = {
                  ...updatedState,
                  showAnswer: true,
                };
              }
              updatePuzzleHistory(updatedState);
              setGameState(updatedState);
            } else if (isGoneResponse(response)) {
              // Note: Could handle cache invalidation here for economy
              setGameState(null); // Simple reset, GamePage will pick it up
            }
          },
        }
      );
    }
  };

  if (gameOngoing)
    return (
      <Button
        className="button guess-button lowerbox-item"
        isDisabled={!gameOngoing || submitGuessMutation.isPending}
        onPress={handleGuessSubmit}
      >
        {submitGuessMutation.isPending ? "Guessing..." : "Guess"}
      </Button>
    );
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
