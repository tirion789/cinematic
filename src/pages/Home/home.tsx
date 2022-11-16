import React, { useEffect, useState } from 'react';
import Header from '../../components/header/header';
import Navigation from '../../components/Navigation/navigation';
import Search from '../../components/Search';
import styles from './home.module.scss';
import Recommended from '../../components/Recommended/recommended';
import Footer from '../../components/footer/footer';
import { fetchFilms } from '../../redux/slices/filmSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import RecommededFilms from '../../components/RecommendedFilms/recommendedFilms';

const Home: React.FC = () => {
  const [value, setValue] = useState('');
  const [activeGenre, setActiveGenre] = useState<string[]>(['Action', 'K drama']);
  const items = useSelector((state: RootState) => state.film.items);
  const dispatch = useDispatch<AppDispatch>();

  const getFilms = async () => {
    dispatch(fetchFilms());
  };

  console.log(activeGenre);

  useEffect(() => {
    getFilms();
  }, [activeGenre]);

  const filterSearch = items.filter((film) => {
    return film.title.toLowerCase().includes(value.toLowerCase());
  });

  const handleOnGenreClick = (value: string) => {
    setActiveGenre((prev) => [...prev, value]);
  };

  return (
    <>
      <Header />
      <Navigation setActiveGenre={handleOnGenreClick} />
      <p className={styles.title}>Find Movies, TV Series and much more</p>
      <Search value={value} setValue={setValue} />
      <div className={styles.container}>
        <Recommended activeGenre={activeGenre} />
        {activeGenre.map((item) => (
          <RecommededFilms genre={item} filteredFilms={filterSearch} />
        ))}
        <Footer />
      </div>
    </>
  );
};

export default Home;
