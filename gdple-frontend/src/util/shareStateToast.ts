import { useEffect, StateUpdater, Dispatch } from "preact/hooks";
import { toast } from "react-tiny-toast";

import { GameState } from "../util/model.ts";

export default function shareResultToast(
  gameState: GameState | null,
  setGameState: Dispatch<StateUpdater<GameState | null>>,
) {
  if (gameState) {
    useEffect(() => {
      toast.show("Result coppied to clipboard!", {
        timeout: 4000,
        className: "custom-toast",
      });
      setTimeout(() => {
        setGameState({ ...gameState, showShareableResultMessage: false });
      }, 4000);
    }, []);
  }
}
