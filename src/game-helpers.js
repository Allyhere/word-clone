export const checkGuess = (guess, guessIndex, answer) => {
  const hasWord = [...answer].includes(guess);
  const isInSameIndex = guessIndex == [...answer].indexOf(guess);
  const isMisplaced = hasWord && !isInSameIndex && "misplaced";
  const isIncorrect = !isInSameIndex && !hasWord && "incorrect";
  const isCorrect = hasWord && isInSameIndex && "correct";
  return {
    letter: guess,
    state: isIncorrect || isMisplaced || isCorrect,
  };
};
