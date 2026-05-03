import { Dispatch, StateUpdater } from "preact/hooks";
import { Button, Dialog, Modal } from "react-aria-components";

import { GameState } from "../util/model.ts";
import { useAnswerQuery } from "../util/queries.ts";
import { isGoneResponse } from "../util/util.ts";

export default function PuzzleAnswerModal(props: {
  gameState: GameState;
  setGameState: Dispatch<StateUpdater<GameState | null>>;
}) {
  const { gameState, setGameState } = props;

  const { data: response, isLoading } = useAnswerQuery(
    gameState?.id || "",
    !!gameState?.showAnswer
  );

  if (!gameState || !gameState.showAnswer) return <></>;

  // Handle GoneResponse edge case
  if (response && isGoneResponse(response)) {
    // Session is gone, reset the game state
    setGameState(null);
    return <></>;
  }

  const targetStateName = response && "targetStateName" in response ? response.targetStateName : null;

  const closeAnswerHandler = () => {
    setGameState({ ...gameState, showAnswer: false });
  };

  return (
    <Modal
      isDismissable
      isOpen={gameState.showAnswer}
      onOpenChange={closeAnswerHandler}
    >
      <Dialog>
        <div className={"dialog"}>
          {isLoading ? (
            <h3>Loading answer...</h3>
          ) : targetStateName ? (
            <h3>Correct answer: {targetStateName}</h3>
          ) : (
            <h3>Failed to load answer</h3>
          )}
          <Button
            className="button close-button"
            onPress={closeAnswerHandler}
          >
            Close
          </Button>
        </div>
      </Dialog>
    </Modal>
  );
}
