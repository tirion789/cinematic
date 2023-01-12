import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import styles from './fullFilms.module.scss';
import Navigation from '../../components/Navigation/navigation';
import Footer from '../../components/footer/footer';
import Description from '../../components/Descpription/description';
import Dop from '../../components/AdditionalInformation/additionalInformation';
import LikeFilms from '../../components/LikeFilms/likeFilms';
import { fetchFilm } from '../../redux/slices/film/filmAsync';
import { RootState, useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';

const FullFilm = () => {
  const film = useSelector((state: RootState) => state.film.currentItem);
  const dispatch = useAppDispatch();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchFilm(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://yohoho.cc/yo.js';
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  console.log(film?.video);

  console.log(film);

  return (
    <>
      <Header />
      <Navigation />
      <div className={styles.fullFilms}>
        {!film ? (
          <h1 className={styles.fullFilms__loading}>...Загрузка</h1>
        ) : (
          <>
            <h1 className={styles.fullFilms__title}>Home/ {film.title}</h1>
            <div className={styles.fullFilms__video}>
              <div id="yohoho" data-kinopoisk={film.video}></div>
            </div>
            <div className={styles.fullFilms__containter}>
              <div>
                <Description
                  ImgUrl={film.ImgUrl}
                  description={film.description}
                  rating={film.rating}
                  time={film.time}
                  title={film.title}
                  id={film.id}
                  genre={film.genre}
                />
                <Dop
                  director={film.director}
                  release={film.release}
                  genre={film.genre}
                  flag={film.flag}
                  country={film.country}
                />
              </div>
              <LikeFilms genre={film.genre} id={film.id} />
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default FullFilm;
