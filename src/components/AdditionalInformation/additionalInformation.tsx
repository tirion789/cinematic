import React from 'react';
import styles from './additionalInformation.module.scss';

type DopProps = {
  country: string;
  flag: string;
  genre: string[];
  release: string;
  director: string[];
};

const Dop: React.FC<DopProps> = ({ director, release, country, flag, genre }) => {
  const massiveGenres = genre.join(', ');
  return (
    <div className={styles.additionalInformation}>
      <div className={styles.additionalInformation__container}>
        <p className={styles.additionalInformation__country}>{country}</p>
        <img width={42} className={styles.additionalInformation__flag} src={flag} alt="" />
      </div>
      <ul className={styles.additionalInformation__aboutFilm}>
        <li>
          <ul>
            <li>Genre:</li>
            <li>Release:</li>
            <li>Directors:</li>
            <li>Cast:</li>
          </ul>
        </li>
        <li>
          <ul>
            <li>{massiveGenres}</li>
            <li>{release}</li>
            <li>{director}</li>
            <li>asdfasdf</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Dop;
