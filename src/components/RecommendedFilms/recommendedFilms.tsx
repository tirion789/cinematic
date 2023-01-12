import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import CartFilms from '../cartFilms/cartFilms';
import styles from './recommendedFilms.module.scss';

type RecommendedFilmsProps = {
  genre: string;
};

const RecommededFilms: React.FC<RecommendedFilmsProps> = ({ genre }) => {
  const items = useSelector((state: RootState) => state.film.items);
  const value = useSelector((state: RootState) => state.filter.searchValue);

  const filteredFilms = items.filter((film) => {
    return film.title.toLowerCase().includes(value.toLowerCase());
  });

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
