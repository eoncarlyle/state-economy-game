import { StateUpdater } from "preact/hooks";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import Close from "../assets/close.svg"

import { GameState } from "state-economy-game-util/model";

type ShareableResultSnackbar = {
  gameState: GameState;
  setGameState: StateUpdater<GameState | null>;
};

export default function ShareableResultSnackbar(props: ShareableResultSnackbar): React.ReactNode {
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
          <Button onClick={closeAnswerHandler} color="inherit">
            <img src={Close} alt="Close"/>
          </Button>
        }
      />
    );
  }
}
