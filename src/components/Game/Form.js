import { NUM_OF_CHARACTERS_ALLOWED } from "../../constants";

const Form = ({ setGuess, tries, setTries, setError: setGameAlert }) => {
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
      prevCopy.splice(tries, 1, formField.value.toUpperCase());
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
