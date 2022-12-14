import React, { useEffect, useState } from 'react';
import Header from '../../components/header/header';
import CartFilms from '../../components/cartFilms/cartFilms';
import styles from './main.module.scss';
import Footer from '../../components/footer/footer';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import Modal from '../../components/Modal/modal';
import { fetchFilms } from '../../redux/slices/film/filmAsync';

const Main: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((state: RootState) => state.film.items);
  const status = useSelector((state: RootState) => state.film.status);
  const [open, setOpen] = useState(false);

  const getFilms = async () => {
    dispatch(fetchFilms());
  };

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <p className={styles.wrapper__title}>TV Shows</p>
        <p className={styles.wrapper__text}>
          Enjoy online streaming of the best Action, Comedy, and Romantic tv series from all over
          the world
        </p>
        {status === 'error' ? (
          <h1>error</h1>
        ) : status === 'loading' ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <button onClick={() => setOpen(true)} className={styles.button}>
              Sing in
            </button>
            <div className={styles.wrapper}>
              {items.map(({ ImgUrl, id }) => (
                <CartFilms key={id} ImgUrl={ImgUrl} id={id} />
              ))}
              <div className={styles.overlay}></div>
            </div>
          </>
        )}
        <Modal open={open} setOpen={setOpen} />
      </div>
      <Footer />
    </>
  );
};

export default Main;
