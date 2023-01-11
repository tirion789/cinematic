import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { filterFilms } from '../../redux/slices/profile/profileSlice';
import { RootState, useAppDispatch } from '../../redux/store';
import styles from './checkbox.module.scss';

const Checkbox: FC = () => {
  const items = useSelector((state: RootState) => state.profile.items);
  const array = ['All', 'Action', 'Romantic', 'K drama', 'Sitcom'];
  const [checkbox, setCheckbox] = useState(false);

  const dispatch = useAppDispatch();

  const filterSearchs = (genre: string) => {
    setCheckbox((prev) => !prev);
    return checkbox ? items : dispatch(filterFilms(genre));
  };
  return (
    <>
      <div className={styles.checkbox__list}>
        {array.map((element) => (
          <label className={styles.checkbox__listItem} style={{ color: 'red' }}>
            <input
              className={styles.checkbox__listInput}
              type="checkbox"
              onChange={() => filterSearchs(element)}
            />
            {element}
          </label>
        ))}
      </div>
    </>
  );
};

export default Checkbox;
