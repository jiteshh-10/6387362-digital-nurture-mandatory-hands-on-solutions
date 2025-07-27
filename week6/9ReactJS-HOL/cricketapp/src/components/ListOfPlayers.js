import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ListOfPlayers = () => {
  // let and const for variable declarations
  const players = [
    { name: 'Virat Kohli', score: 85 },
    { name: 'Rohit Sharma', score: 45 },
    { name: 'Shubman Gill', score: 77 },
    { name: 'Rishabh Pant', score: 55 },
    { name: 'Hardik Pandya', score: 92 },
    { name: 'KL Rahul', score: 36 },
    { name: 'Ravindra Jadeja', score: 73 },
    { name: 'Ashwin', score: 64 },
    { name: 'Shami', score: 82 },
    { name: 'Bumrah', score: 68 },
    { name: 'Siraj', score: 52 },
  ];

  // Arrow function + filter
  const topScorers = players.filter(player => player.score >= 70);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">🌟 Top Scorers</h2>
      <div className="row justify-content-center">
        {topScorers.map((player, i) => (
          <div className="col-md-4 mb-3" key={i}>
            <div className="card border-success shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{player.name}</h5>
                <span className="badge bg-success fs-5">Score: {player.score}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListOfPlayers;
