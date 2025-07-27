import React from 'react';
import { Link } from 'react-router-dom';
import trainers from './TrainersMock';

const TrainerList = () => {
  return (
    <div className="container mt-4">
      <h3 className="mb-4">Trainer List</h3>
      <ul className="list-group">
        {trainers.map(trainer => (
          <li key={trainer.trainerId} className="list-group-item">
            <Link to={`/trainer/${trainer.trainerId}`}>{trainer.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainerList;

