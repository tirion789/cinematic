import React from 'react';
import { Link } from 'react-router-dom';
import styles from './cartFilm.module.scss';

type cartFilmsProps = {
  ImgUrl: string;
  id: string;
};

const CartFilms: React.FC<cartFilmsProps> = ({ ImgUrl, id }) => {
  return (
    <ul className={styles.genres__film}>
      <li>
        <Link to={`/film/${id}`}>
          <img src={ImgUrl} alt="Карточка фильма" />
        </Link>
      </li>
    </ul>
  );
};

export default CartFilms;
