import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletedFilm } from '../../redux/slices/profile/profileSlice';
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
  const dispatch = useDispatch();
  const onClickDeleted = (id: string) => {
    dispatch(deletedFilm(id));
  };

  const massiveGeres = genre.join(', ');

  return (
    <>
      <div className={styles.favorites__conteiner}>
        <div className={styles.favorites__items}>
          <div className={styles.favorites__img}>
            <Link to={`/film/${id}`}>
              <img width={177} height={250} src={ImgUrl} alt={'film poster'} />
            </Link>
          </div>
          <div className={styles.favorites__name}>{title}</div>
          <div className={styles.favorites__genre}>{massiveGeres}</div>
          <div className={styles.favorites__rating}>{rating}</div>
          <button className={styles.favorites__buttonDelete} onClick={() => onClickDeleted(id)}>
            Удалить
          </button>
        </div>
      </div>
    </>
  );
};

export default Favorites;
