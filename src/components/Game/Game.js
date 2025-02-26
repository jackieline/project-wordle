import React from 'react';
import GuessInput from "./GuessInput";

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from './GuessInput';
import GuessResults from './GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  return (
    <>
      <GuessResults guessList={guessList} />
      <GuessInput setGuessList={setGuessList} guessList={guessList} />
    </>
    );
}

export default Game;
