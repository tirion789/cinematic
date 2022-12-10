import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import styles from './fullFilms.module.scss';
import Navigation from '../../components/Navigation/navigation';
import Footer from '../../components/footer/footer';
import Description from '../../components/Descpription/description';
import Dop from '../../components/AdditionalInformation/additionalInformation';
import LikeFilms from '../../components/LikeFilms/likeFilms';

const FullFilm = () => {
  const videoPlayerList = ['VidCloud', 'HDRip', 'Videovard', 'Dosteam', 'Vidstem'];
  const [activeButton, setActiveButton] = useState('VidCloud');
  const { id } = useParams();
  const [film, setFilm] = useState<{
    ImgUrl: string;
    title: string;
    time: string;
    rating: string;
    description: string;
    country: string;
    flag: string;
    genre: string[];
    id: string;
  }>();

  const onClickButton = (n: string) => {
    setActiveButton(n);
  };

  useEffect(() => {
    const featchFilms = async () => {
      try {
        const { data } = await axios.get(
          'https://629b64b3656cea05fc3883e0.mockapi.io/Items2/' + id,
        );
        console.log(data);
        setFilm(data);
      } catch (error) {
        alert('ошибка');
      }
    };
    featchFilms();
  }, [id]);

  return (
    <>
      <Header setOpen={Boolean} />
      <Navigation setActiveGenre={String} />
      <div className={styles.fullFilms}>
        {!film ? (
          <h1 className={styles.fullFilms__loading}>...Загрузка</h1>
        ) : (
          <>
            <h1 className={styles.fullFilms__title}>Home/ {film.title}</h1>
            <div className={styles.fullFilms__video}></div>
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
