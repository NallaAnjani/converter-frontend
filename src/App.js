
import React, { useState } from 'react';
import './App.css';

function App() {
  const [inr, setInr] = useState('');
  const [result, setResult] = useState({ usd: '', eur: '' });
  const convert = async () => {
    const res = await fetch(`https://currency-backend-rose.vercel.app/api/convert?amount=${inr}`);
    const data = await res.json();
    setResult(data);
  };

  return (
  
    <div className="App">
      <h2>INR to USD/EUR Converter</h2>
      <label>Enter your emount :</label>
      <input type="number" placeholder="Enter INR" value={inr} onChange={(e) => setInr(e.target.value)}/><br/>
      <button onClick={convert}>Convert</button>
      <h3>USD: {result.usd}</h3>
      <h3>EUR: {result.eur}</h3>
    </div>
  );
}

export default App;


