import React from 'react';
import { Link } from 'react-router-dom';
import styles from './cartFilm.module.scss';

type cartFilmsProps = {
  ImgUrl: string;
  id: string;
};

const CartFilms: React.FC<cartFilmsProps> = ({ ImgUrl, id }) => {
  return (
    <div className={styles.genres__film}>
      <Link to={`/film/${id}`}>
        <img width={177} height={250} src={ImgUrl} alt="Карточка фильма" />
      </Link>
    </div>
  );
};

export default CartFilms;
