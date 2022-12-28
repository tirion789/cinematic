import React, { useEffect, useState } from 'react';
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
  const videoPlayerList = ['VidCloud', 'HDRip', 'Videovard', 'Dosteam', 'Vidstem'];
  const [activeButton, setActiveButton] = useState('VidCloud');
  const film = useSelector((state: RootState) => state.film.currentItem);
  const dispatch = useAppDispatch();

  const { id } = useParams();

  const onClickButton = (n: string) => {
    setActiveButton(n);
  };

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

  return (
    <>
      <Header />
      <Navigation setActiveGenre={String} />
      <div className={styles.fullFilms}>
        {!film ? (
          <h1 className={styles.fullFilms__loading}>...Загрузка</h1>
        ) : (
          <>
            <h1 className={styles.fullFilms__title}>Home/ {film.title}</h1>
            <div className={styles.fullFilms__video}>
              <div id="yohoho" data-kinopoisk={film.video}></div>
            </div>
            <div className={styles.fullFilms__player_list}>
              {videoPlayerList.map((value, index) => (
                <button
                  key={index}
                  onClick={() => onClickButton(value)}
                  className={
                    value === activeButton
                      ? styles.fullFilms__players_items_active
                      : styles.fullFilms__player_items
                  }>
                  {value}
                </button>
              ))}
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
                <Dop flag={film.flag} country={film.country} />
              </div>
              <LikeFilms genre={film.genre} id={film.id} />
            </div>
            <Footer />
          </>
        )}
      </div>
    </>
  );
};

export default FullFilm;
