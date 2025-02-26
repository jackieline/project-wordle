import React from 'react';


const GuessInput = ({ handleSubmitGuess }) => {
    const [tentativeGuess, setTentativeGuess] = React.useState('');
    return (
        <form onSubmit={(event) => {
            event.preventDefault();

            if(tentativeGuess.length !== 5) {
                window.alert('Please enter exactly 5 characters.')
                return;
            }
            console.log({tentativeGuess})
            
            handleSubmitGuess(tentativeGuess);
            setTentativeGuess('');
        }}
        className="guess-input-wrapper">
            <label htmlFor="guess-input">Enter guess:</label>
            <input required id="guess-input" type="text" minLength={5} maxLength={5} value={tentativeGuess} onChange={event => setTentativeGuess(event.target.value.toUpperCase())} pattern="[a-zA-Z]{5}"
  title="5 letter word" />
        </form>
    )
};

export default GuessInput;