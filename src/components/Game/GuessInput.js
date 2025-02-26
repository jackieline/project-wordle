import React from 'react';


const GuessInput = ({guessList, setGuessList}) => {
    const [guess, setGuess] = React.useState('');
    return (
        <form onSubmit={(event) => {
            event.preventDefault();

            if(guess.length !== 5) {
                window.alert('Please enter exactly 5 characters.')
                return;
            }
            console.log({guess})
            const nextGuessList = [...guessList, guess];
            setGuessList(nextGuessList);
            setGuess('');
        }}
        className="guess-input-wrapper">
            <label htmlFor="guess-input">Enter guess:</label>
            <input required id="guess-input" type="text" minLength={5} maxLength={5} value={guess} onChange={event => setGuess(event.target.value.toUpperCase())} pattern="[a-zA-Z]{5}"
  title="5 letter word" />
        </form>
    )
};

export default GuessInput;