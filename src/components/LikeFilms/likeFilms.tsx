import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store';
import styles from './likeFilms.module.scss';

type LikeFilmsProps = {
  id: string;
};

const LikeFilms: React.FC<LikeFilmsProps> = ({ id }) => {
  const items = useSelector((state: RootState) => state.film.items);

  // const getSimilarFilm = () => {
  //   return items.filter((item) => {
  //     return genre.some((genre) => {
  //       item.genre.includes(genre);
  //     });
  //   });
  // };

  return (
    <div className={styles.likeFilms__container}>
      <h1 className={styles.likeFilms__title}>
        Movies may you <br /> Like
      </h1>
      <div className={styles.likeFilms__list}>
        <>
          {items.slice(0, 4).map((obj) =>
            obj.id !== id ? (
              <div>
                <Link to={`/film/${obj.id}`}>
                  <img width={137} height={200} src={obj.ImgUrl} alt="" />
                </Link>
                <h1 className={styles.likeFilms__list_text}>{obj.title}</h1>
                <ul>
                  <li>{obj.time} min</li>
                  <li>{}</li>
                </ul>
              </div>
            ) : (
              ''
            ),
          )}
        </>
      </div>
    </div>
  );
};

export default LikeFilms;
