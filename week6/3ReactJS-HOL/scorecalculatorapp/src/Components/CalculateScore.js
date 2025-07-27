import React from 'react';
import '../Stylesheets/mystyle.css';

export const CalculateScore = ({ Name, School, total, goal }) => {
  const calcScore = (total, goal) => {
    const percentage = (total / goal);
    return `${percentage.toFixed(2)}%`;
  };

  return (
    <div className="formatstyle">
      <h1><font color="Brown">Student Details:</font></h1>
      <div className="Name"><b>Name:</b> <span>{Name}</span></div>
      <div className="School"><b>School:</b> <span>{School}</span></div>
      <div className="Total"><b>Total:</b> <span>{total} Marks</span></div>
      <div className="Score"><b>Score:</b> <span>{calcScore(total, goal)}</span></div>
    </div>
  );
};
