import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

const Guess = ({ answer, value }) => {
    const guessesStatus = checkGuess(value, answer);
    return (
        <p className="guess">
            {range(5).map((num) => 
            (<span key={num} className={`cell ${value ? guessesStatus[num].status : ''}`}>{value ? value[num] : undefined}</span>))}
        </p>
    )
}

export default Guess;