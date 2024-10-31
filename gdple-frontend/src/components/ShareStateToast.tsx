import { useEffect, StateUpdater } from "preact/hooks";
import { toast } from "react-tiny-toast";

import { GameState } from "../util/model.ts";

export default function ShareResultToast(props: {
  gameState: GameState;
  setGameState: StateUpdater<GameState | null>;
}) {
  const { gameState, setGameState } = props;
  useEffect(() => {
    toast.show("Result coppied to clipboard!", {
      timeout: 4000,
      className: "custom-toast",
    });
    setTimeout(() => {
      setGameState({ ...gameState, showShareResultToast: false });
    }, 4000);
  }, []);
}
