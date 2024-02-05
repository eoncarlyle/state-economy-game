import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import { StateUpdater, useEffect, useState } from "preact/hooks";
import CloseIcon from "@mui/icons-material/Close";

import { GameState, PuzzleAnswerResponse } from "state-economy-game-util/model";
import { getPuzzleAnswer } from "../util/rest";

type TargetStateSnackbarProps = {
  gameState: GameState;
  setGameState: StateUpdater<GameState | null>;
};

export default function TargetStateSnackbar(props: TargetStateSnackbarProps): React.ReactNode {
  const { gameState, setGameState } = props;
  if (!gameState.showAnswer) return <></>;
  const [targetStateName, setTargetStateName] = useState<String | null>(null);

  //TODO: Retry logic
  useEffect(() => {
    getPuzzleAnswer(gameState.id).then((response: PuzzleAnswerResponse | null) => {
      if (response) setTargetStateName(response.targetStateName);
      else setTargetStateName(null);
    });
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
          <IconButton onClick={closeAnswerHandler} color="inherit">
            <CloseIcon />
          </IconButton>
        }
      />
    ) as React.ReactNode;
  } else return <></>;
}
