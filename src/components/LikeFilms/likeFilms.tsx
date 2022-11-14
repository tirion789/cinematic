import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store';
import styles from './likeFilms.module.scss';

type LikeFilmsProps = {
  genre: string;
  id: string;
};

const LikeFilms: React.FC<LikeFilmsProps> = ({ genre, id }) => {
  const items = useSelector((state: RootState) => state.film.items);
  return (
    <div className={styles.likeFilms__container}>
      <h1 className={styles.likeFilms__title}>
        Movies may you <br /> Like
      </h1>
      <div className={styles.likeFilms__list}>
        <>
          {items.map((obj) =>
            obj.genre === genre && obj.id !== id ? (
              <div>
                <Link to={`/film/${obj.id}`}>
                  <img src={obj.ImgUrl} alt="" />
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
