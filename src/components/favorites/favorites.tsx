import React from 'react';
import styles from './favorites.module.scss';

type FavoritesProps = {
  ImgUrl: string;
  title: string;
  time: string;
  rating: string;
  description: string;
  country: string;
  flag: string;
  genre: string[];
  id: string;
};

const Favorites: React.FC<FavoritesProps> = ({ ImgUrl, title, rating, genre }) => {
  console.log(genre);
  return (
    <>
      <div className={styles.favorites__conteiner}>
        <div className={styles.favorites__items}>
          <div className={styles.favorites__img}>
            <img width={177} height={250} src={ImgUrl} alt={'asdf'} />
          </div>
          <div className={styles.favorites__name}>{title}</div>
          <div className={styles.favorites__genre}>{genre}</div>
          <div className={styles.favorites__rating}>{rating}</div>
        </div>
      </div>
    </>
  );
};

export default Favorites;
