import React from 'react';
import { useParams } from 'react-router-dom';
import trainers from './TrainersMock';

const TrainerDetails = () => {
  const { id } = useParams();
  const trainer = trainers.find(t => t.trainerId === id);

  if (!trainer) return <div className="container mt-4">Trainer not found.</div>;

  return (
    <div className="container mt-4">
      <h3 className="mb-4">Trainer Details</h3>
      <div className="card p-3 shadow-sm">
        <p><strong>Name:</strong> {trainer.name}</p>
        <p><strong>Email:</strong> {trainer.email}</p>
        <p><strong>Phone:</strong> {trainer.phone}</p>
        <p><strong>Stream:</strong> {trainer.technology}</p>
        <p><strong>Skills:</strong> {trainer.skills.join(', ')}</p>
      </div>
    </div>
  );
};

export default TrainerDetails;
