import React, { useState } from 'react';

function ComplaintRegister() {
  const [employeeName, setEmployeeName] = useState('');
  const [complaintText, setComplaintText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!employeeName || !complaintText) {
      alert("Please fill in all fields.");
      return;
    }
    const referenceNumber = 'REF-' + Math.floor(Math.random() * 1000000);
    alert(`Complaint submitted!\nReference No: ${referenceNumber}`);
    setEmployeeName('');
    setComplaintText('');
  };

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <label>
        Employee Name:
        <input
          type="text"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
          placeholder="Enter your name"
        />
      </label>

      <label>
        Complaint:
        <textarea
          value={complaintText}
          onChange={(e) => setComplaintText(e.target.value)}
          placeholder="Describe your issue"
        />
      </label>

      <button type="submit">Submit Complaint</button>
    </form>
  );
}

export default ComplaintRegister;
