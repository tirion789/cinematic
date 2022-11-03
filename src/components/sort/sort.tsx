import React from 'react';
import styles from './sort.module.scss';

const titleArray = ['All', 'Action', 'Sitcom', 'Romantic', 'K drama'];

type HomeProps = {
  activeIndex: number;
  setActiveIndex: (n: number) => void;
};

const Sort: React.FC<HomeProps> = ({ setActiveIndex, activeIndex }) => {
  const onActiveIndex = (n: number) => {
    setActiveIndex(n);
  };
  return (
    <div className={styles.sort}>
      <p className={styles.sort__title}>Recommended</p>
      <ul className={styles.sort__list}>
        {titleArray.map((value, index) => (
          <li
            onClick={() => onActiveIndex(index)}
            className={activeIndex === index ? styles.sort__active_item : styles.sort__item}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sort;
