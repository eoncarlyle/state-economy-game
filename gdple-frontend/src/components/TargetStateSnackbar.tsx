import Snackbar from "@mui/material/Snackbar";
import { StateUpdater, useEffect, useState } from "preact/hooks";

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
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={gameState.showAnswer}
        onClick={closeAnswerHandler}
        message={`Correct answer: ${targetStateName}`}
        action={
          <button className={"black-background"} onClick={closeAnswerHandler}>
            <BaseIcon className={"black-icon-background"}>
              <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </BaseIcon>
          </button>
        }
      />
    ) as React.ReactNode;
  } else return <></>;
}
