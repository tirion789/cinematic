import React, { useEffect } from 'react';
import RecommededFilms from '../RecommendedFilms/recommendedFilms';
import styles from '../../pages/Home/home.module.scss';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { fetchFilms } from '../../redux/slices/film/filmAsync';

const FilmList: React.FC = () => {
  const status = useSelector((state: RootState) => state.film.status);
  const activeGenres = useSelector((state: RootState) => state.film.activeGenres);
  const dispatch = useAppDispatch();
  const getFilms = async () => {
    dispatch(fetchFilms());
  };

  useEffect(() => {
    getFilms();
  }, [activeGenres]);
  return (
    <div>
      {status === 'error' ? (
        <div style={{ color: 'red' }}>error</div>
      ) : status === 'loading' ? (
        <div className={styles.loading}>Loading...</div>
      ) : activeGenres.length === 0 ? (
        <h1 className={styles.text}>Выберите жанр во вкладке Genre, чтобы появились фильмы</h1>
      ) : (
        activeGenres.map((item: string) => <RecommededFilms key={item} genre={item} />)
      )}
    </div>
  );
};

export default FilmList;
