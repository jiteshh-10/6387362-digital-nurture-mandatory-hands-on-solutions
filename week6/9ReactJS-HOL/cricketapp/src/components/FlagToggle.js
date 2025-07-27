import React from 'react';

const FlagToggle = ({ flag, setFlag }) => (
  <div className="text-center mb-4">
    <button 
      className={`btn ${flag ? 'btn-primary' : 'btn-outline-primary'} me-2`}
      onClick={() => setFlag(true)}
    >
      Show Top Scorers
    </button>
    <button 
      className={`btn ${!flag ? 'btn-secondary' : 'btn-outline-secondary'}`}
      onClick={() => setFlag(false)}
    >
      Show Team Split
    </button>
  </div>
);

export default FlagToggle;
