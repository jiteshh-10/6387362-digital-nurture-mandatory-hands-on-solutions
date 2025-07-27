import React from 'react';
import CohortDetails from './components/CohortDetails';
import styles from './components/CohortDetails.module.css';

function App() {
  const cohorts = [
    {
      code: 'INTADMDF10',
      track: '.NET FSD',
      startDate: '22-Feb-2022',
      status: 'Scheduled',
      coach: 'Aathma',
      trainer: 'Jojo Jose',
    },
    {
      code: 'ADM21JF014',
      track: 'Java FSD',
      startDate: '10-Sep-2021',
      status: 'Ongoing',
      coach: 'Apoorv',
      trainer: 'Elisa Smith',
    },
    {
      code: 'CDBJF21025',
      track: 'Java FSD',
      startDate: '24-Dec-2021',
      status: 'Ongoing',
      coach: 'Aathma',
      trainer: 'John Doe',
    },
  ];

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Cohorts Details</h1>
      <div className={styles.container}>
        {cohorts.map((cohort, index) => (
          <CohortDetails key={index} cohort={cohort} />
        ))}
      </div>
    </div>
  );
}

export default App;
