import React from 'react';


function DisplayQuote({ quote }) {
  return (
    quote && (
      <div className='DisplayQuote'>
        <img src={quote[0].image} alt={quote[0].character} />
        <ul>
          <li>Quote: {quote[0].quote}</li>
          <li>
            Name: {quote[0].character}
          </li>
        </ul>
      </div>
    )
  );
}
export default DisplayQuote;