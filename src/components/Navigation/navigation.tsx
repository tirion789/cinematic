import React, { useState } from 'react';
import styles from './navigation.module.scss';
import { MouseEvent } from 'react';
import { setActiveGenres } from '../../redux/slices/film/filmSlice';
import { useAppDispatch } from '../../redux/store';

const Navigation: React.FC = () => {
  const [genre, setGenre] = useState(false);
  const navigations = ['Home', 'Genre'];
  const dispatch = useAppDispatch();
  // const asdfasdf = [{
  //   link: '/home',
  //   title: 'Home',
  // }]
  const titleArray = ['Action', 'Sitcom', 'Romantic', 'K drama'];

  const handleOnGenreClick = (value: string) => {
    dispatch(setActiveGenres(value));
  };

  const onActiveGenre = (event: MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value;
    handleOnGenreClick(value);
  };

  const handerLi = () => {
    setGenre((prev) => !prev);
  };

  return (
    <ul className={styles.navigation}>
      {navigations.map((navigationName, index) =>
        navigationName === 'Genre' ? (
          <>
            <li onClick={handerLi} className={styles.navigation__item}>
              Genre
            </li>
            {genre && (
              <div key={index} className={styles.navigation__genre_list}>
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
          <li key={index} className={styles.navigation__item}>
            {navigationName}
          </li>
        ),
      )}
    </ul>
  );
};

export default Navigation;
