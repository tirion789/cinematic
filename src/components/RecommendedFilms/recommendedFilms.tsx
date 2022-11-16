import React from 'react';
import { filmItem } from '../../redux/slices/filmSlice';
import CartFilms from '../cartFilms/cartFilms';
import styles from './recommendedFilms.module.scss';

type RecommendedFilmsProps = {
  genre: string;
  filteredFilms: filmItem[];
};

const RecommededFilms: React.FC<RecommendedFilmsProps> = ({ genre, filteredFilms }) => {
  const filmByGenre = !genre
    ? filteredFilms
    : filteredFilms.slice(0, 7).filter((item) => item.genre.includes(genre));
  return (
    <>
      <h1 className={styles.genre}>{genre}</h1>
      <div className={styles.wrapper}>
        {filmByGenre.map(({ ImgUrl, id }) => (
          <CartFilms ImgUrl={ImgUrl} id={id} />
        ))}
      </div>
    </>
  );
};

export default RecommededFilms;
