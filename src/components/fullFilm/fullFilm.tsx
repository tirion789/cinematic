import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Header from '../header/header';

const FullFilm = () => {
  const { id } = useParams();
  const [film, setFilm] = useState<{
    ImgUrl: string;
  }>();

  useEffect(() => {
    const featchFilms = async () => {
      try {
        const { data } = await axios.get(
          'https://629b64b3656cea05fc3883e0.mockapi.io/Items2/' + id,
        );
        console.log(data);
        setFilm(data);
      } catch (error) {
        alert('ошибка епта');
      }
    };
    featchFilms();
  }, [id]);

  if (!film) {
    return <>Загрузка</>;
  }
  return (
    <>
      <Header />
      <div>
        <img src={film.ImgUrl} alt="" />
      </div>
    </>
  );
};

export default FullFilm;
