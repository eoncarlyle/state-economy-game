import { StateUpdater } from "preact/hooks";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

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
          <IconButton onClick={closeAnswerHandler} color="inherit">
            {(<CloseIcon />) as React.ReactNode}
          </IconButton>
        }
      />
    );
  }
}
