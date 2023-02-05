import { NUM_OF_CHARACTERS_ALLOWED } from "../../constants";

const Guess = ({ word }) => {
  const cellCounter = word || new Array(NUM_OF_CHARACTERS_ALLOWED).fill('')
  return (
    <p className="guess">
      {cellCounter.map((letter, index) => (
        <span
          key={index}
          className={`cell ${letter?.state}`}
        >
          {letter?.letter}
        </span>
      ))}
    </p>
  );
};

export { Guess };
