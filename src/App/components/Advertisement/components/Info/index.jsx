// @flow
import React from 'react';
import styles from './styles.css';

// For docs about these props, see Advertisement/index.jsx
type Props = {
  title: String,
  price: number,
  numberOfRooms: number,
  space: number,
};

/**
 * This component renders the informations about the advertisement.
 */
const Info = ({
  title,
  price,
  numberOfRooms,
  space,
}: Props) => (
  <div className={styles.info}>
    <div className={styles.body}>
      <div className={styles.title}>
        <h2 title={title}>{ title }</h2>
      </div>
      <p>35764 Sinn / Fleisbach</p>
    </div>
    <div className={styles.footer}>
      <div className={styles.price}>
        <h2>{ price } €</h2>
      </div>
      <div className={styles.size}>
        <div className={styles.bedrooms}>
          <span>{ numberOfRooms } Zimmer</span>
        </div>
        <div className={styles.metres}>
          <span>ab { parseInt(space, 10) } m²</span>
        </div>
      </div>
    </div>
  </div>
);

Info.defaultProps = {
  title: 'Advertisement title',
  price: 0,
  numberOfRooms: 0,
  space: 0,
};

export default Info;
