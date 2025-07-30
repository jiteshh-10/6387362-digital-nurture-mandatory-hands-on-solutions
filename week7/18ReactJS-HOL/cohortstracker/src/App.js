import React from 'react';
import CohortDetails from './CohortDetails';
import { CohortData } from './Cohort';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>📊 Cohort Dashboard</h1>
      {CohortData.map(cohort => (
        <CohortDetails key={cohort.code} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
