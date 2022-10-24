import React, { useEffect, useState } from 'react';
import Header from '../components/header/header';
import Navigation from '../components/Navigation/navigation';
import Search from '../components/Search';
import styles from './home.module.scss';
import Sort from '../components/sort/sort';
import CartFilms from '../components/cartFilms/cartFilms';
import axios from 'axios';

const Home: React.FC = () => {
  const [value, setValue] = useState('');

  const [items, setItems] = useState([]);

  console.log(items);
  useEffect(() => {
    axios.get('https://629b64b3656cea05fc3883e0.mockapi.io/Items2').then((response) => {
      setItems(response.data);
    });
  }, []);

  const filterFilms = items.filter((film: { title: string }) => {
    return film.title.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <>
      <Header />
      <div className={styles.content}>
        <Navigation />
        <p className={styles.title}>Find Movies, TV Series and much more</p>
        <Search value={value} setValue={setValue} />
      </div>
      <Sort />
      <div className={styles.wrapper}>
        {filterFilms.map((obj: { ImgUrl: string }) => (
          <CartFilms ImgUrl={obj.ImgUrl} />
        ))}
      </div>
    </>
  );
};

export default Home;

// {filterFilms.map((obj: { imgUrl: string[] }) => (
//   <CartFilms imgUrl={obj.imgUrl} />
// ))}
