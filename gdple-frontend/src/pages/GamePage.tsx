import "@mantine/core/styles/CloseButton.css";
import "@mantine/core/styles/Combobox.css";
import "@mantine/core/styles/Flex.css";
import "@mantine/core/styles/Group.css";
import "@mantine/core/styles/InlineInput.css";
import "@mantine/core/styles/Input.css";
import "@mantine/core/styles/Loader.css";
import "@mantine/core/styles/ModalBase.css";
import "@mantine/core/styles/Overlay.css";
import "@mantine/core/styles/Paper.css";
import "@mantine/core/styles/Popover.css";
import "@mantine/core/styles/ScrollArea.css";
import "@mantine/core/styles/UnstyledButton.css";
import "@mantine/core/styles/VisuallyHidden.css";
import "@mantine/core/styles/global.css";
import { useState } from "preact/hooks";
import { Link } from "wouter";
import EconomyDiagram from "../components/EconomyDiagram";
import Guesses from "../components/Guesses";
import { GameState, GlobalState, StateEconomy } from "../util/model.ts";
import { useResetGlobalState } from "../util/util.ts";

export default function GamePage() {
  const [globalState, setGlobalState] = useState<GlobalState>({
    gameState: null,
    stateEconomy: null,
  });

  if (!globalState.stateEconomy && !globalState.gameState) {
    useResetGlobalState(globalState, setGlobalState, false);
  }
  return (
    <>
      <h1 className="gdple-heading">
        GDP<span style={{ color: "#ffc107" }}>LE</span>
      </h1>
      <EconomyDiagram stateEconomy={globalState.stateEconomy} />

      <Guesses globalState={globalState} setGlobalState={setGlobalState} />
      <Link href="/about" className="center-link">
        How to play/about this project
      </Link>
    </>
  );
}
