import React, { useEffect, useState } from 'react';
import Header from '../../components/header/header';
import Navigation from '../../components/Navigation/navigation';
import Search from '../../components/Search';
import styles from './home.module.scss';
import Recommended from '../../components/Recommended/recommended';
import Footer from '../../components/footer/footer';
import { fetchFilms, setActiveGenres } from '../../redux/slices/filmSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import RecommededFilms from '../../components/RecommendedFilms/recommendedFilms';
// import Skeleton from '../../components/cartFilms/skeleton';

const Home: React.FC = () => {
  const [value, setValue] = useState('');
  const items = useSelector((state: RootState) => state.film.items);
  const status = useSelector((state: RootState) => state.film.status);
  const activeGenres = useSelector((state: RootState) => state.film.activeGenres);
  const dispatch = useDispatch<AppDispatch>();

  const getFilms = async () => {
    dispatch(fetchFilms());
  };

  useEffect(() => {
    getFilms();
  }, [activeGenres]);

  console.log(activeGenres);
  const filterSearch = items.filter((film) => {
    return film.title.toLowerCase().includes(value.toLowerCase());
  });

  const handleOnGenreClick = (value: string) => {
    dispatch(setActiveGenres(value));
  };
  // const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <>
      <Header setOpen={String} />
      <Navigation setActiveGenre={handleOnGenreClick} />
      <p className={styles.title}>Find Movies, TV Series and much more</p>
      <Search value={value} setValue={setValue} />
      <div className={styles.container}>
        <Recommended activeGenre={activeGenres} />
        {status === 'error' ? (
          <div style={{ color: 'red' }}>error</div>
        ) : status === 'loading' ? (
          <div className={styles.loading}>Loading...</div>
        ) : activeGenres.length === 0 ? (
          <h1 className={styles.asdf}>Выберите жанр во вкладке Genre, чтобы появились фильмы</h1>
        ) : (
          activeGenres.map((item: string) => (
            <RecommededFilms key={item} genre={item} filteredFilms={filterSearch} />
          ))
        )}
        <Footer />
      </div>
    </>
  );
};

export default Home;
