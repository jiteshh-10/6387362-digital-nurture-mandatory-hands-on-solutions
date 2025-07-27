import React from 'react';
import styles from './CohortDetails.module.css';

const CohortDetails = ({ cohort }) => {
  const statusClass = cohort.status === 'Ongoing' ? styles.ongoing : styles.scheduled;

  return (
    <div className={styles.box}>
      <div className={`${styles.title} ${statusClass}`}>
        {cohort.code} - {cohort.track}
      </div>
      <div className={styles.info}>
        <span className={styles.label}>Started On</span><br />
        {cohort.startDate}
      </div>
      <div className={styles.info}>
        <span className={styles.label}>Current Status</span><br />
        {cohort.status}
      </div>
      <div className={styles.info}>
        <span className={styles.label}>Coach</span><br />
        {cohort.coach}
      </div>
      <div className={styles.info}>
        <span className={styles.label}>Trainer</span><br />
        {cohort.trainer}
      </div>
    </div>
  );
};

export default CohortDetails;
