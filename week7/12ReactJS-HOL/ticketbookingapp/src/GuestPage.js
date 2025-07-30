import React from 'react';

function GuestPage() {
  return (
    <div className="card">
      <h2>Welcome, Guest!</h2>
      <p>You can view flight details but must log in to book tickets.</p>
      <ul>
        <li>Flight: IND → DEL | 8:30 AM</li>
        <li>Flight: BOM → BLR | 10:15 AM</li>
        <li>Flight: HYD → GOA | 1:00 PM</li>
      </ul>
    </div>
  );
}

export default GuestPage;
