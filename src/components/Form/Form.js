import { useState } from "react";
import { NUM_OF_CHARACTERS_ALLOWED } from "../../constants";

const Form = ({ handleSubmitGuess, setGameAlert, tries }) => {
  console.count("Form render");
  const [guessTentative, setGuessTentative] = useState("");

  const handleTentative = ({ target }) => {
    const nextTentative = target.value.toUpperCase();
    setGuessTentative(nextTentative);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formField = event.target.elements[0];
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
      return;
    }

    handleSubmitGuess(guessTentative);
    setGuessTentative("");
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
        onChange={handleTentative}
        value={guessTentative}
      />
    </form>
  );
};

export { Form };
