import React from 'react';


function DisplayQuote({ quote }) {
  return (
    quote && (
      <div className='DisplayQuote'>
        <img src={quote.image} alt={quote.character} />
        <ul>
          <li>Quote: {quote.quote}</li>
          <li>
            Name: {quote.character}
          </li>
        </ul>
      </div>
    )
  );
}
export default DisplayQuote;