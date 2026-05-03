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
import { useEffect, useState } from "preact/hooks";
import { Link } from "wouter";

import EconomyDiagram from "../components/EconomyDiagram";
import Guesses from "../components/Guesses";
import { GameState } from "../util/model.ts";
import { useEconomyQuery, usePuzzleSessionMutation } from "../util/queries.ts";
import {
  getCurrentStreak,
  getMaxStreak,
  getPuzzleHistory,
  getReferenceDateString,
  updatePuzzleHistory,
} from "../util/util.ts";

export default function GamePage() {
  const [gameState, setGameState] = useState<GameState | null>(null);

  const { data: stateEconomy, isLoading: isEconomyLoading } = useEconomyQuery();
  const sessionMutation = usePuzzleSessionMutation();

  useEffect(() => {
    const history = getPuzzleHistory();
    const today = getReferenceDateString();
    
    if (today in history) {
      const entry = history[today];
      setGameState({
        id: entry.id,
        guesses: entry.guesses,
        currentGuessName: null,
        isWin: entry.isWin,
        showAnswer: !entry.isWin && entry.guesses.length >= 5, // MAX_GUESSES is 5
        showShareableResultMessage: false,
      });
    } else if (!sessionMutation.isPending && !gameState) {
      sessionMutation.mutate(undefined, {
        onSuccess: (session) => {
          if (session) {
            const newGameState: GameState = {
              id: session.id,
              guesses: [],
              currentGuessName: null,
              isWin: false,
              showAnswer: false,
              showShareableResultMessage: false,
            };
            setGameState(newGameState);
            updatePuzzleHistory(newGameState);
          }
        }
      });
    }
  }, []);

  const currentStreak = getCurrentStreak();
  const maxStreak = getMaxStreak();

  return (
    <>
      <h1 className="gdple-heading">
        GDP<span style={{ color: "#ffc107" }}>LE</span>
      </h1>
      
      {stateEconomy && <EconomyDiagram stateEconomy={stateEconomy} />}
      {isEconomyLoading && <div>Loading economy...</div>}

      <Guesses gameState={gameState} setGameState={setGameState} />
      <Link href="/about" className="center">
        How to play/about this project
      </Link>

      {currentStreak > 0 && maxStreak > 0 && (
        <div className="streak-container">
          <div>Current Streak: {`${currentStreak}`}</div>
          <div>Max Streak: {`${maxStreak}`}</div>
        </div>
      )}
    </>
  );
}
