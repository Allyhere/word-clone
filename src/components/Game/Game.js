import React, { memo, useCallback, useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { Guess as NewGuess } from "./Guess";
import { GameState as NewGameState } from "./GameState";
import { Form } from "./Form";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

const Guess = memo(NewGuess);
const GameState = memo(NewGameState);
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
          return (
            <Guess
              key={index}
              difficultyIndex={NUM_OF_GUESSES_ALLOWED - 1}
              answer={answer}
              word={word}
            />
          );
        })}
      </div>
      <Form
        tries={tries}
        setError={setGameAlert}
        setGuess={setGuess}
        setTries={setTries}
      />
      {gameAlert && (
        <GameState gameAlert={gameAlert} setGameAlert={setGameAlert} />
      )}
    </div>
  );
}

export default Game;
