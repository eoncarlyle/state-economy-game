import { GameState } from "state-economy-game-util/model"

export default function GuessButton({ maxGuesses, guessInputState }: { maxGuesses: number, guessInputState: GameState }) {
  const guessAllowed = guessInputState.guesses.length < maxGuesses && !guessInputState.isWin;
  if (guessAllowed) {

  } else {

  } 
}