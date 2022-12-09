import React from 'react';
import styles from './favorites.module.scss';

const Favorites: React.FC = () => {
  return (
    <div className={styles.favorites__conteiner}>
      <h1 className={styles.favorites__title}>Избранное</h1>
      <div className={styles.favorites__items}>
        <div className={styles.favorites__img}>
          <img src="https://via.placeholder.com/150" alt="" />
        </div>
        <div className={styles.favorites__name}>Spider-man</div>
        <div className={styles.favorites__genre}>action</div>
        <div className={styles.favorites__rating}>6.9</div>
      </div>
    </div>
  );
};

export default Favorites;
