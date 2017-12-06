import React from 'react';
import { Purpose, Image, Info } from './components';
import styles from './styles.css';

type Props = {
  thumbnail: String,
  purpose: number,
  title: String,
  price: number,
  numberOfRooms: number,
  space: number,
};

const Advertisement = ({
  thumbnail,
  purpose,
  title,
  price,
  numberOfRooms,
  space,
}: Props) => (
  <div className={styles.card}>
    <Image thumbnail={thumbnail} purpose={<Purpose purpose={purpose} />} />
    <Info
      title={title}
      price={price}
      numberOfRooms={numberOfRooms}
      space={space}
    />
  </div>
);

export default Advertisement;
