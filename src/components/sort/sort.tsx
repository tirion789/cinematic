import React from 'react';
import styles from './sort.module.scss';

const titleArray = ['Trending', 'Action', 'Sitcom', 'Romantic', 'K drama'];

const Sort: React.FC = () => {
  return (
    <div className={styles.sort}>
      <p className={styles.sort__title}>Recommended</p>
      <ul className={styles.sort__list}>
        {titleArray.map((obj) => (
          <li className={styles.sort__item}>{obj}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sort;
