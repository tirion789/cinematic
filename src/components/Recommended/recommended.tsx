import React from 'react';
import styles from './recommended.module.scss';

type RecommendedProps = {
  activeGenre: string;
};

const Recommended: React.FC<RecommendedProps> = ({ activeGenre }) => {
  return (
    <div className={styles.recommended}>
      <p className={styles.recommended__title}>Recommended</p>
      <div className={styles.recommended__list}>
        <button className={styles.recommended__item}>{activeGenre}</button>
      </div>
    </div>
  );
};

export default Recommended;
