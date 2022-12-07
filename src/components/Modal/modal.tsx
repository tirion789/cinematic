import React, { useState } from 'react';
import Logup from '../logup/logup';
import Login from '../login/login';
import styles from '../header/header.module.scss';

type MainProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
};

const FORM_TYPES = {
  signUp: 'Sing Up',
  singIn: 'Sing In',
};

const Modal: React.FC<MainProps> = ({ open, setOpen }) => {
  const [formType, setFormType] = useState(FORM_TYPES.signUp);
  const onClickCategories = () => {
    if (formType === FORM_TYPES.signUp) {
      setFormType(FORM_TYPES.singIn);
    } else setFormType(FORM_TYPES.signUp);
  };
  return (
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
        {formType === FORM_TYPES.singIn ? <Login setOpen={setOpen} /> : <Logup setOpen={setOpen} />}
      </div>
    </div>
  );
};

export default Modal;
