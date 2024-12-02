import EconomyDiagram from "../components/EconomyDiagram";
import Guesses from "../components/Guesses";
import { StateEconomy, GameState } from "../util/model.ts";
import { useState } from "preact/hooks";

import "@mantine/core/styles/global.css";
import "@mantine/core/styles/ScrollArea.css";
import "@mantine/core/styles/UnstyledButton.css";
import "@mantine/core/styles/VisuallyHidden.css";
import "@mantine/core/styles/Paper.css";
import "@mantine/core/styles/Popover.css";
import "@mantine/core/styles/CloseButton.css";
import "@mantine/core/styles/Group.css";
import "@mantine/core/styles/Loader.css";
import "@mantine/core/styles/Overlay.css";
import "@mantine/core/styles/ModalBase.css";
import "@mantine/core/styles/Input.css";
import "@mantine/core/styles/InlineInput.css";
import "@mantine/core/styles/Flex.css";
import "@mantine/core/styles/Combobox.css";

import { Link } from "wouter";
import { useResetGlobalState } from "../util/util.ts";

export default function GamePage() {
  const [economyResponse, setEconomyResponse] = useState<StateEconomy | null>(
    null,
  );
  const [gameState, setGameState] = useState<GameState | null>(null);
  if (!gameState || !economyResponse) {
    useResetGlobalState(
      {
        gameState: gameState,
        setGameState: setGameState,
        economyResponse: economyResponse,
        setEconomyResponse: setEconomyResponse,
      },
      false,
    );
  }
  return (
    <>
      <h1 className="gdple-heading">
        GDP<span style={{ color: "#ffc107" }}>LE</span>
      </h1>
      <EconomyDiagram
        gameState={gameState}
        setGameState={setGameState}
        economyResponse={economyResponse}
        setEconomyResponse={setEconomyResponse}
      />

      <Guesses
        gameState={gameState}
        setGameState={setGameState}
        economyResponse={economyResponse}
        setEconomyResponse={setEconomyResponse}
      />
      <Link href="/about" className="center-link">
        How to play/about this project
      </Link>
    </>
  );
}
