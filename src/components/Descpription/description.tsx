import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IProfileSliceState } from '../../redux/slices/profile/profileType';
import { addFilms, deletedFilm } from '../../redux/slices/profile/profileSlice';
import styles from './description.module.scss';
import { RootState } from '../../redux/store';

type DescpriptionProps = {
  time: string;
  description: string;
  ImgUrl: string;
  rating: string;
  title: string;
  id: string;
  genre: string[];
};

const Description: React.FC<DescpriptionProps> = ({
  time,
  description,
  ImgUrl,
  rating,
  title,
  id,
  genre,
}) => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.profile.items);
  const [isFavorite, setisFavorite] = useState<boolean>(false);
  const state = localStorage.getItem('profile' + id);
  useEffect(() => {
    setisFavorite(Boolean(JSON.parse(state || 'false')));
    return items.some((obj) => obj.id === id) ? setisFavorite(true) : setisFavorite(false);
  }, [id, items, state]);

  console.log(items);

  const onClickAdd = () => {
    const item: IProfileSliceState = {
      id,
      title,
      rating,
      time,
      description,
      genre,
      ImgUrl,
      country: '',
      flag: '',
    };
    dispatch(addFilms(item));
    setisFavorite(true);
    localStorage.setItem('profile' + id, JSON.stringify(true));
  };

  const onClickDeleted = (id: string) => {
    dispatch(deletedFilm(id));
    setisFavorite(false);
    localStorage.setItem('profile' + id, JSON.stringify(false));
  };
  return (
    <>
      <div className={styles.description__wrapper}>
        <div className={styles.description__container}>
          <div className={styles.description__image}>
            <img width={262} height={370} src={ImgUrl} alt="films" />
            <div>
              {!isFavorite && (
                <button onClick={onClickAdd} className={styles.description__add_button}>
                  Добавить в избранное
                </button>
              )}
              {isFavorite && (
                <button
                  onClick={() => onClickDeleted(id)}
                  className={styles.description__add_button}>
                  Удалить из избранного
                </button>
              )}
            </div>
          </div>
          <div className={styles.description__information}>
            <h1 className={styles.description__title}>{title}</h1>
            <ul className={styles.description__list}>
              <li>
                <svg
                  width="38"
                  height="34"
                  viewBox="0 0 38 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M33.5833 0.5H4.41667C2.10417 0.5 0.25 2.15 0.25 4.16667V29.8333C0.25 31.85 2.10417 33.5 4.41667 33.5H33.5833C35.875 33.5 37.75 31.85 37.75 29.8333V4.16667C37.75 2.15 35.875 0.5 33.5833 0.5ZM16.9167 22.5H13.7917V18.8333H9.625V22.5H6.5V11.5H9.625V16.0833H13.7917V11.5H16.9167V22.5ZM21.0833 11.5H29.4167C30.5625 11.5 31.5 12.325 31.5 13.3333V20.6667C31.5 21.675 30.5625 22.5 29.4167 22.5H21.0833V11.5ZM24.2083 19.75H28.375V14.25H24.2083V19.75Z"
                    fill="white"
                  />
                </svg>
              </li>
              <li>{rating}</li>
              <li>{time} min</li>
            </ul>
            <p className={styles.description__text}>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
