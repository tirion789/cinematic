import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setClear, setTrendingClear } from '../../redux/slices/film/filmSlice';
import { RootState } from '../../redux/store';
import styles from './recommended.module.scss';

const Recommended: React.FC = () => {
  const activeGenre = useSelector((state: RootState) => state.film.activeGenres);
  const dispatch = useDispatch();
  const onClickRemove = (genre: string) => {
    dispatch(setClear(genre));
  };

  const [trending, setTrending] = useState(true);

  const trendingDeletedButton = () => {
    dispatch(setTrendingClear());
    setTrending(false);
  };

  return (
    <div className={styles.recommended}>
      <p className={styles.recommended__title}>Recommended</p>
      <div className={styles.recommended__list}>
        {trending && (
          <div className={styles.recommended__item}>
            <svg
              className={styles.recommended__trending_svg}
              width="30"
              height="14"
              viewBox="0 0 30 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.6668 0.5L23.911 2.98083L16.9977 8.2675L11.331 3.93417L0.833496 11.9725L2.831 13.5L11.331 7L16.9977 11.3333L25.9227 4.51917L29.1668 7V0.5H20.6668Z"
                fill="black"
              />
            </svg>
            Trending
            <button onClick={trendingDeletedButton} className={styles.recommended__deteleButton}>
              <svg
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.0418 1.41L10.9256 0L6.50016 5.59L2.07475 0L0.958496 1.41L5.38391 7L0.958496 12.59L2.07475 14L6.50016 8.41L10.9256 14L12.0418 12.59L7.61641 7L12.0418 1.41Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        )}
        {activeGenre.map((genre, index) => (
          <div key={index} className={styles.recommended__item}>
            {genre}
            <button
              className={styles.recommended__deteleButton}
              onClick={() => onClickRemove(genre)}>
              <svg
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.0418 1.41L10.9256 0L6.50016 5.59L2.07475 0L0.958496 1.41L5.38391 7L0.958496 12.59L2.07475 14L6.50016 8.41L10.9256 14L12.0418 12.59L7.61641 7L12.0418 1.41Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
