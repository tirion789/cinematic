import React from 'react';
import styles from './cartFilm.module.scss';

type cartFilmsProps = {
  ImgUrl: string;
};

const CartFilms: React.FC<cartFilmsProps> = ({ ImgUrl }) => {
  return (
    <ul className={styles.genres__film}>
      <li>
        <a href="#2">
          <img src={ImgUrl} alt="Карточка фильма" />
        </a>
      </li>
    </ul>
  );
};

export default CartFilms;
