import React, { useState } from 'react';
import './App.css';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euros, setEuros] = useState('');

  const handleSubmit = () => {
    const euroRate = 0.011; // Example rate
    setEuros((parseFloat(rupees) * euroRate).toFixed(2));
  };

  return (
    <div className="converter">
      <h2>Currency Convertor</h2>
      <input
        type="number"
        placeholder="INR"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
      />
      <button onClick={handleSubmit}>Convert</button>
      {euros && <p>{rupees} INR = {euros} EUR</p>}
    </div>
  );
}

export default CurrencyConvertor;
