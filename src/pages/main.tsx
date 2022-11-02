import React, { useEffect, useState } from 'react';
import Header from '../components/header/header';
import axios from 'axios';
import CartFilms from '../components/cartFilms/cartFilms';
import styles from './main.module.scss';
import Footer from '../components/footer/footer';

const Main: React.FC = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log(items);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get('https://629b64b3656cea05fc3883e0.mockapi.io/Items2')
      .then((response) => {
        setItems(response.data);
        setIsLoading(false);
      })
      .catch(() => {
        setError(true);
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
      {error ? (
        <h1 style={{ color: 'white', padding: 50 }}>error</h1>
      ) : isLoading ? (
        <h1 style={{ color: 'white', padding: 50 }}>Loading</h1>
      ) : (
        <div className={styles.wrapper}>
          {items.map(({ ImgUrl }) => (
            <CartFilms ImgUrl={ImgUrl} />
          ))}
        </div>
      )}
      <Footer />
    </>
  );
};

export default Main;

// {data.map(({title, imgUrl}) => (
//   <h2>{title}</h2>
//   {imgUrl.map(({src})=> (
//     <img src={src} alt="" />
//   ))}
// ))}
