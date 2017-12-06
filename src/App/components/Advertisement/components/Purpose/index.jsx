import React from 'react';
import styles from './styles.css';

// For docs about this prop, see Advertisement/index.jsx
type Props = {
  purpose: number,
};

/**
 * Renders the badge in the top left corner about the purpose of the advertisement.
 */
const Purpose = ({
  purpose,
}: Props) => (
  <div className={styles.type}>
    <span>{(purpose === 1) ? 'Kaufen' : 'Mieten'}</span>
  </div>
);

Purpose.defaultProps = {
  purpose: 1,
};

export default Purpose;
