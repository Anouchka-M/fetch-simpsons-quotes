import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import DisplayQuote from './components/DisplayQuotes';
import './App.css';

const sampleQuote = {"quote": "By chilling my loins I increase the chances of impregnating my wife.",
"character": "Apu Nahasapeemapetilon",
"image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
"characterDirection": "Left"
}

function App() {
  const [quote, setQuote] = useState(sampleQuote);
  const getQuote = () => {
    // Send the request  
    axios  
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')  
      // Extract the DATA from the received response  
      .then((response) => response.data[0])
      // Use this data to update the state  
      .then((data) => {
          setQuote(data)
        })
      };
      
  return (
    <div className="App">
      <DisplayQuote quote={quote} />
      <button type="button" onClick={() => getQuote()}>Get quote</button>
    </div>
  );
}

export default App;
