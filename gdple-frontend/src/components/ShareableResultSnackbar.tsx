import { StateUpdater } from "preact/hooks";
import Snackbar from "@mui/material/Snackbar";

import { GameState } from "../../lib/model.ts"
import BaseIcon from "./BaseIcon.tsx";

type ShareableResultSnackbar = {
  gameState: GameState;
  setGameState: StateUpdater<GameState | null>;
};

export default function ShareableResultSnackbar(
  props: ShareableResultSnackbar,
): React.ReactNode {
  const { gameState, setGameState } = props;
  const closeAnswerHandler = () => {
    setGameState({ ...gameState, showShareableResultMessage: false });
  };
  if (!gameState.showShareableResultMessage) return <></>;
  else {
      return (
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={gameState.showShareableResultMessage}
        onClick={closeAnswerHandler}
        message={"Result copied to clipboard"}
        action={
          <button onClick={closeAnswerHandler} className={"black-background"}> 
                <BaseIcon className={"black-icon-background"}>
                    <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                </BaseIcon>
          </button>
        }
      />
    );
  }
}
