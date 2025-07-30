import React from 'react';
import './App.css';

const CohortDetails = ({ cohort }) => {
  if (!cohort) return <p>No cohort data available</p>;

  return (
    <div className="cohort-card">
      <h3>{cohort.code}</h3>
      <p><strong>Name:</strong> {cohort.name}</p>
      <p><strong>Status:</strong> {cohort.status}</p>
      <p><strong>Start Date:</strong> {cohort.startDate}</p>
    </div>
  );
};

export default CohortDetails;
