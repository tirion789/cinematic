import React from 'react';
import styles from './cartFilm.module.scss';

type cartFilmsProps = {
  ImgUrl: string;
};

const CartFilms: React.FC<cartFilmsProps> = ({ ImgUrl }) => {
  // const geners = ['action', 'Sitcoms', 'Romantic', 'K-drama'];

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
