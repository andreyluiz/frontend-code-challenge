import React from 'react';
import Advertisement from './components/Advertisement';
import styles from './styles.css';

const App = () => (
  <div className={styles.content}>
    <div className={styles.row}>
      <div className={styles.column}>
        <Advertisement />
      </div>
      <div className={styles.column}>
        <Advertisement />
      </div>
      <div className={styles.column}>
        <Advertisement />
      </div>
    </div>
    <div className={styles.row}>
      <div className={styles.column}>
        <Advertisement />
      </div>
      <div className={styles.column}>
        <Advertisement />
      </div>
      <div className={styles.column}>
        <Advertisement />
      </div>
    </div>
    <div className={styles.row}>
      <div className={styles.column}>
        <Advertisement />
      </div>
    </div>
  </div>
);

export default App;
