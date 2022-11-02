import React, { ChangeEvent, useEffect, useState } from 'react';
import Login from '../login/login';
import Logup from '../logup/logup';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordError, setPassError] = useState('the password cannot be empty');
  const [emailError, setEmailError] = useState('the email cannot be empty');
  const [userDirty, setUserDirty] = useState(false);
  const [usernameError, setUsernameError] = useState('the username cannot be empty');
  const [username, setUsername] = useState('');
  const [formValid, setFormValid] = useState(false);
  const [formType, setFormType] = useState(FORM_TYPES.signUp);
  const { isAuth, emails } = useAuth();
  const dispatch = useAppDispatch();

  const onClickCategories = () => {
    if (formType === FORM_TYPES.signUp) {
      setFormType(FORM_TYPES.singIn);
    } else setFormType(FORM_TYPES.signUp);
  };

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const blurHandler = (e: { target: { name: string } }) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
      case 'username':
        setUserDirty(true);
    }
  };

  const usernameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    if (e.target.value.length < 3) {
      setUsernameError('the username cannot be empty');
      if (e.target.value) {
        setUsernameError('the number of characters cannot be less than 3');
      }
    } else {
      setUsernameError('');
    }
  };

  const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('the email cannot be empty');

      if (e.target.value) {
        setEmailError('incorrect email');
      }
    } else {
      setEmailError('');
    }
  };

  const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value.length < 5) {
      setPassError('the password cannot be empty');
      if (e.target.value) {
        setPassError('the number of characters cannot be less than 5');
      }
    } else {
      setPassError('');
    }
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
            <Logup
              emailHandler={emailHandler}
              usernameHandler={usernameHandler}
              setOpen={setOpen}
              password={password}
              username={username}
              blurHandler={blurHandler}
              email={email}
              userDirty={userDirty}
              usernameError={usernameError}
              emailDirty={emailDirty}
              emailError={emailError}
              formValid={formValid}
              passwordHandler={passwordHandler}
              passwordDirty={passwordDirty}
              passwordError={passwordError}
            />
          ) : (
            <Login
              password={password}
              passwordHandler={passwordHandler}
              emailHandler={emailHandler}
              usernameHandler={usernameHandler}
              setOpen={setOpen}
              username={username}
              blurHandler={blurHandler}
              email={email}
              userDirty={userDirty}
              usernameError={usernameError}
              emailDirty={emailDirty}
              emailError={emailError}
              passwordDirty={passwordDirty}
              passwordError={passwordError}
              formValid={formValid}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
