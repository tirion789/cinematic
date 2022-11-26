import React from 'react';
import { useDispatch } from 'react-redux';
import { setClear } from '../../redux/slices/filmSlice';
import styles from './recommended.module.scss';

type RecommendedProps = {
  activeGenre: string[];
};

const Recommended: React.FC<RecommendedProps> = ({ activeGenre }) => {
  const dispatch = useDispatch();
  const onClickRemove = (genre: string) => {
    dispatch(setClear(genre));
  };

  return (
    <div className={styles.recommended}>
      <p className={styles.recommended__title}>Recommended</p>
      <div className={styles.recommended__list}>
        {activeGenre.map((genre) => (
          <button className={styles.recommended__item}>
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
          </button>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
