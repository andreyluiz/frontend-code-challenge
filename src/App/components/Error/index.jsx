import React from 'react';
import styles from './styles.css';

const Error = ({
  error,
}) => (
  <div className={styles.error}>
    <span>{error}</span>
  </div>
);

export default Error;
