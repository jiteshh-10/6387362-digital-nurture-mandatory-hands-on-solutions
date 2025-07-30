import React from 'react';

function UserPage() {
  return (
    <div className="card">
      <h2>Welcome Back!</h2>
      <p>Select a flight and book your ticket.</p>
      <ul>
        <li>
          Flight: IND → DEL | 8:30 AM 
          <button>Book</button>
        </li>
        <li>
          Flight: BOM → BLR | 10:15 AM 
          <button>Book</button>
        </li>
        <li>
          Flight: HYD → GOA | 1:00 PM 
          <button>Book</button>
        </li>
      </ul>
    </div>
  );
}

export default UserPage;
