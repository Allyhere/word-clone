import { checkGuess } from "../../game-helpers";

const Guess = ({ difficultyIndex, answer, word = "" }) => {
  const cellCounter =
    word.split("").length > 0
      ? word.split("")
      : new Array(difficultyIndex).fill("");

  return (
    <p className="guess">
      {cellCounter.map((content, index) => (
        <span
          key={index}
          className={`cell ${content && checkGuess(content, index, answer)}`}
        >
          {content}
        </span>
      ))}
    </p>
  );
};

export { Guess };
