import React, { useState } from 'react';
import styles from './navigation.module.scss';
import { MouseEvent } from 'react';

type HomeProps = {
  setActiveGenre: (n: string) => void;
};

const Navigation: React.FC<HomeProps> = ({ setActiveGenre }) => {
  const [genre, setGenre] = useState(false);
  const navigations = ['Home', 'Genre', 'Country', 'Movies', 'TV Series', 'TopImDb'];
  const titleArray = ['All', 'Action', 'Sitcom', 'Romantic', 'K drama'];

  const onActiveGenre = (event: MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value;
    setActiveGenre(value);
  };

  const handerLi = () => {
    setGenre(true);
  };

  return (
    <ul className={styles.navigation}>
      {navigations.map((navigationName) =>
        navigationName === 'Genre' ? (
          <>
            <li onClick={handerLi} key={navigationName} className={styles.navigation__item}>
              Genre
            </li>
            {genre && (
              <div className={styles.navigation__genre_list}>
                {titleArray.map((value) => (
                  <button
                    value={value}
                    onClick={onActiveGenre}
                    className={styles.navigation__genre_items}>
                    {value}
                  </button>
                ))}
              </div>
            )}
          </>
        ) : (
          <li className={styles.navigation__item}>{navigationName}</li>
        ),
      )}
    </ul>
  );
};

export default Navigation;
