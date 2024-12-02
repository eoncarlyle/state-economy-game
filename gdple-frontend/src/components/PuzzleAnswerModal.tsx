import { useEffect, useState } from "preact/hooks";

import { Modal, Dialog, Button } from "react-aria-components";

import { getPuzzleAnswer } from "../util/rest";
import {
  PuzzleAnswerResponse,
  GoneResponse,
  GlobalState,
} from "../util/model.ts";
import { resetGlobalState } from "../util/util.ts";

// TODO extract this out to dedicated type

export default function PuzzleAnswerModal(props: GlobalState): React.ReactNode {
  const { gameState, setGameState } = props;
  if (!gameState || !gameState.showAnswer) return <></>;
  const [targetStateName, setTargetStateName] = useState<String | null>(null);

  //TODO: Retry logic, Issue #21
  useEffect(() => {
    getPuzzleAnswer(gameState.id).then(
      (response: PuzzleAnswerResponse | GoneResponse | null) => {
        if (response && "targetStateName" in response) {
          setTargetStateName(response.targetStateName);
        } else if (response && "statusCode" in response) {
          resetGlobalState(props, true);
        } else setTargetStateName(null);
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
              className="button close-button"
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
