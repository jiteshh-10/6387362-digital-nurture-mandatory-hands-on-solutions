import React, { useState } from 'react';
import './App.css';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
    sayHello();
  };

  const sayHello = () => {
    console.log("Hello! Increment button clicked.");
  };

  const decrement = () => {
    setCount(prev => prev - 1);
  };

  const sayWelcome = (message) => {
    alert(message);
  };

  const handleSyntheticEvent = (e) => {
    alert("I was clicked!");
    console.log("Synthetic event:", e);
  };

  return (
    <div className="container">
      <h1>React Event Handling Examples</h1>

      <div className="counter">
        <p>Counter Value: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>

      <button onClick={() => sayWelcome("Welcome!")}>Say Welcome</button>
      <button onClick={handleSyntheticEvent}>Synthetic Event (OnPress)</button>

      <CurrencyConvertor />
    </div>
  );
}

export default App;
