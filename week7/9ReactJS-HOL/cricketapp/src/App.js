import React, { useState } from 'react';
import ListOfPlayers from './components/ListOfPlayers';
import IndianPlayers from './components/IndianPlayers';
import FlagToggle from './components/FlagToggle';
import './App.css';

const App = () => {
  const [flag, setFlag] = useState(true);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">🏏 Cricket Dashboard</h1>
      <FlagToggle flag={flag} setFlag={setFlag} />
      {flag ? <ListOfPlayers /> : <IndianPlayers />}
    </div>
  );
};

export default App;
