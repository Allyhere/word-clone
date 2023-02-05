import { NUM_OF_CHARACTERS_ALLOWED } from "../../constants";
import { GAME_STATES } from "../../game-helpers";

const Form = ({ setGuess, tries, setTries, setError: setGameAlert }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formField = event.target.elements[0];
    setGuess((prev) => {
      const isLetterLimit =
        formField.value.split("").length !== NUM_OF_CHARACTERS_ALLOWED;
      if (isLetterLimit) {
        setGameAlert({ ...GAME_STATES.isLetterLimit });
        return prev;
      }

      const prevCopy = [...prev];
      prevCopy.splice(tries, 1, formField.value.toUpperCase());
      setTries((prev) => prev + 1);
      formField.value = "";
      return prevCopy;
    });
  };
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" type="text" />
    </form>
  );
};

export { Form };
