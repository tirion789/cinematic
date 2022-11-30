import React, { useState } from 'react';
import Login from '../login/logup';
import Logup from '../logup/login';
import styles from './header.module.scss';
import { useAuth } from '../../hooks/auth';
import { removeUser } from '../../redux/slices/userSlice';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';

const FORM_TYPES = {
  signUp: 'Sing Up',
  singIn: 'Sing In',
};

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [formType, setFormType] = useState(FORM_TYPES.signUp);
  const { isAuth, emails } = useAuth();
  const dispatch = useAppDispatch();

  const onClickCategories = () => {
    if (formType === FORM_TYPES.signUp) {
      setFormType(FORM_TYPES.singIn);
    } else setFormType(FORM_TYPES.signUp);
  };

  return (
    <div className={styles.header}>
      <ul className={styles.header__list}>
        <li className={styles.header__name}>CINETREX</li>
        {isAuth ? (
          <Link style={{ color: 'black' }} onClick={() => dispatch(removeUser())} to={'/'}>
            {emails}
          </Link>
        ) : (
          <li className={styles.header__buttons_list}>
            <a onClick={() => setOpen(true)} className={styles.header__buttons}>
              Sign in
            </a>
            <a className={styles.header__buttons}>Join</a>
          </li>
        )}
      </ul>
      <div className={open ? styles.header__modal_overlay : ''}>
        <div className={`${styles.header__modal} ${open ? styles.header__modal_show : ''}`}>
          <div className={styles.header__buttons_cotainer}>
            <button
              onClick={onClickCategories}
              className={`${
                formType === FORM_TYPES.signUp ? styles.header__active : styles.header__login
              }`}>
              Sing Up
            </button>
            <button
              onClick={onClickCategories}
              className={`${
                formType === FORM_TYPES.singIn ? styles.header__active : styles.header__login
              }`}>
              Sing In
            </button>
          </div>
          {formType === FORM_TYPES.singIn ? (
            <Logup setOpen={setOpen} />
          ) : (
            <Login setOpen={setOpen} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
