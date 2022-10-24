import React, { useEffect, useState } from 'react';
import Header from '../components/header/header';
import axios from 'axios';
import CartFilms from '../components/cartFilms/cartFilms';
import styles from './main.module.scss';
import Footer from '../components/footer/footer';

const Home: React.FC = () => {
  const [items, setItems] = useState([]);

  console.log(items);
  useEffect(() => {
    axios.get('https://629b64b3656cea05fc3883e0.mockapi.io/Items2').then((response) => {
      setItems(response.data);
    });
  }, []);

  return (
    <>
      <Header />
      <p className={styles.wrapper__title}>TV Shows</p>
      <p className={styles.wrapper__text}>
        Enjoy online streaming of the best Action, Comedy, and Romantic tv series from all over the
        world
      </p>
      <div className={styles.wrapper}>
        {items.map((obj: { ImgUrl: string }) => (
          <CartFilms ImgUrl={obj.ImgUrl} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;
