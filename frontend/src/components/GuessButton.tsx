import { GuessInputsState } from "../model/model";

export default function GuessButton({ maxGuesses, guessInputState }: { maxGuesses: number, guessInputState: GuessInputsState }) {
  const guessAllowed = guessInputState.guesses.length < maxGuesses && !guessInputState.gameWin;
  if (guessAllowed) {

  } else {

  } 
}