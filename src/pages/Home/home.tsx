import React, { useEffect, useState } from 'react';
import Header from '../../components/header/header';
import Navigation from '../../components/Navigation/navigation';
import Search from '../../components/Search';
import styles from './home.module.scss';
import Recommended from '../../components/Recommended/recommended';
import CartFilms from '../../components/cartFilms/cartFilms';
import Footer from '../../components/footer/footer';
import { fetchFilms } from '../../redux/slices/filmSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';

const Home: React.FC = () => {
  const [value, setValue] = useState('');
  const [activeGenre, setActiveGenre] = useState('All');
  const items = useSelector((state: RootState) => state.film.items);
  const dispatch = useDispatch<AppDispatch>();

  const getFilms = async () => {
    dispatch(fetchFilms());
  };

  const filterBy = (value: string) => {
    return items.filter((item) => item.genre === value);
  };

  useEffect(() => {
    getFilms();
  }, [activeGenre]);

  const filterFilms = filterBy(activeGenre).filter((film) => {
    return film.title.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <>
      <Header />
      <Navigation setActiveGenre={setActiveGenre} />
      <p className={styles.title}>Find Movies, TV Series and much more</p>
      <Search value={value} setValue={setValue} />
      <div className={styles.container}>
        <Recommended activeGenre={activeGenre} />
        <h1 className={styles.genre}>{activeGenre}</h1>
        <div className={styles.wrapper}>
          {activeGenre === 'All'
            ? items.map(({ ImgUrl, id }) => <CartFilms key={id} ImgUrl={ImgUrl} id={id} />)
            : filterFilms.map(({ id, ImgUrl }) => <CartFilms key={id} ImgUrl={ImgUrl} id={id} />)}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;

// {filterFilms.map((obj: { imgUrl: string[] }) => (
//   <CartFilms imgUrl={obj.imgUrl} />
// ))}

// useEffect(() => {
//   axios
//     .get('https://629b64b3656cea05fc3883e0.mockapi.io/Items2?genre=' + activeIndex)
//     .then((response) => {
//       setItems(response.data);
//     });
// }, [activeIndex]);

// const filterFilms = items.filter((film: { title: string }) => {
//   return film.title.toLowerCase().includes(value.toLowerCase());
// });
