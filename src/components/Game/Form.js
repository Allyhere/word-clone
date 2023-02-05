import { NUM_OF_CHARACTERS_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

const Form = ({
  setGuess,
  tries,
  setTries,
  answer,
  setError: setGameAlert,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formField = event.target.elements[0];
    setGuess((prev) => {
      const isLetterLimit =
        formField.value.split("").length !== NUM_OF_CHARACTERS_ALLOWED;
      if (isLetterLimit) {
        setGameAlert({
          state: "sad",
          message: (
            <>
              Sorry,{" "}
              <strong>
                your guess must have {NUM_OF_CHARACTERS_ALLOWED} words!
              </strong>
            </>
          ),
        });
        return prev;
      }

      const prevCopy = [...prev];
      const parsedValue = [...formField.value.toUpperCase()].map(
        (guess, index) => checkGuess(guess, index, answer)
      );
      prevCopy.splice(tries, 1, parsedValue);
      setTries((prev) => prev + 1);
      formField.value = "";
      return prevCopy;
    });
  };
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        maxLength={5}
        minLength={5}
        disabled={tries > 5}
      />
    </form>
  );
};

export { Form };
