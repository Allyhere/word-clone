import { NUM_OF_CHARACTERS_ALLOWED } from "./constants";

export const checkGuess = (guess, guessIndex, answer) => {
  const hasWord = [...answer].includes(guess);
  const isInSameIndex = guessIndex == [...answer].indexOf(guess);
  const isMisplaced = hasWord && !isInSameIndex && "misplaced";
  const isIncorrect = !isInSameIndex && !hasWord && "incorrect";
  const isCorrect = hasWord && isInSameIndex && "correct";
  return isIncorrect || isMisplaced || isCorrect;
};

export const GAME_STATES = {
  isLetterLimit: {
    state: "sad",
    message: (
      <>
        Sorry,{" "}
        <strong>your guess must have {NUM_OF_CHARACTERS_ALLOWED} words!</strong>
      </>
    ),
  },
  isTriesLimit: {
    state: "sad",
    message: <strong>Sorry, you are out of tries :/</strong>,
  },
  isGameWon: {
    state: "happy",
    message: <strong>YAY, you won the game!! </strong>,
  }
};
