import React from 'react';
import styles from './description.module.scss';

type DescpriptionProps = {
  time: string;
  description: string;
  imgUrl: string;
  rating: string;
  title: string;
};

const Description: React.FC<DescpriptionProps> = ({ time, description, imgUrl, rating, title }) => {
  return (
    <>
      <div className={styles.description__wrapper}>
        <div className={styles.description__container}>
          <div className={styles.description__image}>
            <img
              className={styles.fullFilms__description_imageFilm}
              width={262}
              src={imgUrl}
              alt="films"
            />
          </div>
          <div className={styles.description__information}>
            <h1 className={styles.description__title}>{title}</h1>
            <ul className={styles.description__list}>
              <li>Rating {rating}</li>
              <li>{time} min</li>
            </ul>
            <p className={styles.description__text}>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
