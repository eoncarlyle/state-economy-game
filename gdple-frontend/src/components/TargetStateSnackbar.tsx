import { StateUpdater, useEffect, useState } from "preact/hooks";

import { Modal, Dialog, Heading, Button } from "react-aria-components";

import { GameState, PuzzleAnswerResponse } from "../../lib/model";
import { getPuzzleAnswer } from "../util/rest";
import BaseIcon from "./BaseIcon.tsx";

type TargetStateSnackbarProps = {
  gameState: GameState;
  setGameState: StateUpdater<GameState | null>;
};

export default function TargetStateSnackbar(
  props: TargetStateSnackbarProps,
): React.ReactNode {
  const { gameState, setGameState } = props;
  if (!gameState.showAnswer) return <></>;
  const [targetStateName, setTargetStateName] = useState<String | null>(null);

  //TODO: Retry logic, Issue #21
  useEffect(() => {
    getPuzzleAnswer(gameState.id).then(
      (response: PuzzleAnswerResponse | null) => {
        if (response) setTargetStateName(response.targetStateName);
        else setTargetStateName(null);
      },
    );
  }, [setTargetStateName]);

  const closeAnswerHandler = () => {
    setGameState({ ...gameState, showAnswer: false });
  };

  if (targetStateName) {
    return (
      <Modal
        isDismissable
        isOpen={gameState.showAnswer}
        onOpenChange={closeAnswerHandler}
      >
        <Dialog>
          <div className={"dialog"}>
            <h3>Correct answer: {targetStateName}</h3>
            <Button
              className="new-button new-close-button"
              onPress={closeAnswerHandler}
            >
              Close
            </Button>
          </div>
        </Dialog>
      </Modal>
    ) as React.ReactNode;
  } else return <></>;
}
