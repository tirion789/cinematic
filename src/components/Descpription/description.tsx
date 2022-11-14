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
              <li>
                <svg
                  width="38"
                  height="34"
                  viewBox="0 0 38 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M33.5833 0.5H4.41667C2.10417 0.5 0.25 2.15 0.25 4.16667V29.8333C0.25 31.85 2.10417 33.5 4.41667 33.5H33.5833C35.875 33.5 37.75 31.85 37.75 29.8333V4.16667C37.75 2.15 35.875 0.5 33.5833 0.5ZM16.9167 22.5H13.7917V18.8333H9.625V22.5H6.5V11.5H9.625V16.0833H13.7917V11.5H16.9167V22.5ZM21.0833 11.5H29.4167C30.5625 11.5 31.5 12.325 31.5 13.3333V20.6667C31.5 21.675 30.5625 22.5 29.4167 22.5H21.0833V11.5ZM24.2083 19.75H28.375V14.25H24.2083V19.75Z"
                    fill="white"
                  />
                </svg>
              </li>
              <li>{rating}</li>
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
