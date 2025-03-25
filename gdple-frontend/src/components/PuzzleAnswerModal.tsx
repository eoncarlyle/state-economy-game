import { Dispatch, StateUpdater, useEffect, useState } from "preact/hooks";
import { Button, Dialog, Modal } from "react-aria-components";

import {
  GameState,
  GlobalState,
  GoneResponse,
  PuzzleAnswerResponse,
} from "../util/model.ts";
import { getPuzzleAnswer } from "../util/rest";
import { isGoneResponse, resetGlobalState } from "../util/util.ts";

// TODO extract this out to dedicated type

export default function PuzzleAnswerModal(props: {
  globalState: GlobalState;
  setGlobalState: Dispatch<StateUpdater<GlobalState>>;
}): React.ReactNode {
  const { globalState, setGlobalState } = props;
  const gameState = globalState.gameState;
  const setGameState = (gameState: GameState | null) =>
    setGlobalState({ ...globalState, gameState: gameState });

  if (!gameState || !gameState.showAnswer) return <></>;
  const [targetStateName, setTargetStateName] = useState<String | null>(null);

  //TODO: Retry logic, Issue #21
  useEffect(() => {
    getPuzzleAnswer(gameState.id).then(
      (response: PuzzleAnswerResponse | GoneResponse | null) => {
        if (response && "targetStateName" in response) {
          setTargetStateName(response.targetStateName);
        } else if (isGoneResponse(response)) {
          resetGlobalState(setGlobalState, true);
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
