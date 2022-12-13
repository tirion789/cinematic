import React from 'react';
import { useDispatch } from 'react-redux';
import { deletedFilm } from '../../redux/slices/profileSlice';
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

const Favorites: React.FC<FavoritesProps> = ({ ImgUrl, title, rating, genre, id }) => {
  console.log(id);
  const dispatch = useDispatch();
  const onClickDeleted = (id: string) => {
    dispatch(deletedFilm(id));
  };
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
          <button onClick={() => onClickDeleted(id)}>удалить</button>
        </div>
      </div>
    </>
  );
};

export default Favorites;
