import React from 'react';

const GuessResults = ({guessList}) => {
    
    return (
        <div className="guess-results">
            {guessList.map((guess, index) => {
    return(<p className="guess" key={index}>{guess}</p>)
  })}
</div>
    )
}


export default GuessResults;