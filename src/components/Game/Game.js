import React from 'react';
import GuessInput from "./GuessInput";

import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessResults from './GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  const updateGuessList = (guess) => {
    setGuessList([...guessList, guess]);
  };

  return (
    <>
      <GuessResults guessList={guessList} answer={answer} />
      <GuessInput handleSubmitGuess={updateGuessList} />
    </>
    );
}

export default Game;
