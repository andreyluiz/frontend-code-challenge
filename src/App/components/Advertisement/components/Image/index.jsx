import React from 'react';
import styles from './styles.css';

type Props = {
  thumbnail: ?string,
  purpose: Object,
};

const Image = ({
  thumbnail,
  purpose,
}: Props) => (
  <div className={styles.image}>
    {purpose}
    <img
      src={thumbnail}
      alt="Thumbnail"
      width="100%"
      height="auto"
    />
  </div>
);

export default Image;
