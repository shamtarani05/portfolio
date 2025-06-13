// CommandLine.jsx
import React from 'react';
import styles from './CommandLine.module.css';

const CommandLine = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.terminal}>
          <div className={styles.prompt}>
            <span className={styles.user}>shamtarani@codingspace:~$</span>
            <span className={styles.cursor}>_</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandLine;