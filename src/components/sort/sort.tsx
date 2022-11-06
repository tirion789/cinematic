import React, { MouseEvent } from 'react';
import styles from './sort.module.scss';

const titleArray = ['all', 'action', 'sitcom', 'romantic', 'k drama'];

type HomeProps = {
  activeGenre: string;
  setActiveGenre: (n: string) => void;
};

const Sort: React.FC<HomeProps> = ({ setActiveGenre, activeGenre }) => {
  const onActiveGenre = (event: MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value;
    setActiveGenre(value);
    console.log(value);
  };

  return (
    <div className={styles.sort}>
      <p className={styles.sort__title}>Recommended</p>
      <ul className={styles.sort__list}>
        {titleArray.map((value, index) => (
          <button
            value={value}
            key={index}
            onClick={onActiveGenre}
            className={activeGenre === value ? styles.sort__active_item : styles.sort__item}>
            {value}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Sort;
