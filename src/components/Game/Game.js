import React, { memo, useState } from "react";

import { sample } from "../../utils";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import { Guess as MemoizedGuess } from "../Guess/Guess";
import { GameState as MemoizedGameState } from "../GameState/GameState";
import { Form as MemoizedForm } from "../Form/Form";

const Guess = memo(MemoizedGuess);
const GameState = memo(MemoizedGameState);
const Form = memo(MemoizedForm);

const answer = sample(WORDS);
const initialState = Array(NUM_OF_GUESSES_ALLOWED).fill("");

function Game() {
  const [guess, setGuess] = useState(initialState);
  const [tries, setTries] = useState(0);
  const [gameAlert, setGameAlert] = useState(null);

  const gameReset = () => {
    setGuess(initialState);
    setTries(0);
  };

  const handleSubmitGuess = (tentativeGuess) => {
    setGuess((prev) => {
      const prevCopy = [...prev];
      const parsedValue = [...tentativeGuess].map((guess, index) =>
        checkGuess(guess, index, answer)
      );
      prevCopy.splice(tries, 1, parsedValue);
      setTries((prev) => prev + 1);
      return prevCopy;
    });
  };

  const isWordCorrect = guess[tries - 1] === answer;
  const isTriesLimit = tries > 5;

  if (isWordCorrect) {
    setGameAlert({
      state: "happy",
      message: (
        <>
          <strong>Congratulations!</strong> Got it in
          <strong>{tries} guesses</strong>.
        </>
      ),
    });
    gameReset();
    return;
  }

  if (isTriesLimit) {
    setGameAlert({
      state: "sad",
      message: (
        <>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </>
      ),
    });
    gameReset();
    return;
  }

  return (
    <div className="game-wrapper">
      <div className="guess-results">
        {guess.map((word, index) => {
          return <Guess word={word} key={index} />;
        })}
      </div>
      <Form
        setError={setGameAlert}
        tries={tries}
        handleSubmitGuess={handleSubmitGuess}
      />
      {gameAlert && (
        <GameState gameAlert={gameAlert} setGameAlert={setGameAlert} />
      )}
    </div>
  );
}

export { Game };
