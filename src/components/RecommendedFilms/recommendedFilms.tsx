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
    : filteredFilms.filter((item) => item.genre.includes(genre));

  console.log(filmByGenre.length);

  return (
    <>
      <h1 className={styles.genre}>{genre}</h1>
      <div className={styles.wrapper}>
        {genre &&
          filmByGenre
            .slice(0, 6)
            .map(({ ImgUrl, id }) => <CartFilms key={id} ImgUrl={ImgUrl} id={id} />)}
      </div>
    </>
  );
};

export default RecommededFilms;
