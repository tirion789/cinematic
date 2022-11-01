import React, { useState } from 'react';
import styles from '../header/header.module.scss';
import { setUser } from '../../redux/slices/userSlice';
import { AuthErrorCodes, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';

type HeaderProps = {
  emailHandler: (e: { target: { value: React.SetStateAction<string> } }) => void;
  usernameHandler: (e: { target: { value: React.SetStateAction<string> } }) => void;
  blurHandler: (e: { target: { name: string } }) => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  passwordHandler: (e: { target: { value: React.SetStateAction<string> } }) => void;

  username: string;
  email: string;
  password: string;
  userDirty: boolean;
  usernameError: string;
  emailDirty: boolean;
  emailError: string;
  formValid: boolean;
  openFormAuth: boolean;
  passwordDirty: boolean;
  passwordError: string;
};

const Logup: React.FC<HeaderProps> = ({
  emailHandler,
  passwordHandler,
  setOpen,
  passwordDirty,
  passwordError,
  blurHandler,
  email,
  emailDirty,
  emailError,
  openFormAuth,
  password,
  formValid,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loginFail, setLoginFail] = useState(false);

  const handlerLogin = async () => {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setLoginFail(false);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          }),
        );
        navigate('/home');
      })
      .catch(() => {
        setLoginFail(true);
      });
  };

  return (
    <>
      {openFormAuth && (
        <>
          <div className={styles.header__modal_inner}>
            <button className={styles.header__close} onClick={() => setOpen(false)}></button>
          </div>
          <input
            value={email}
            onChange={(e) => emailHandler(e)}
            onBlur={(e) => blurHandler(e)}
            className={styles.header__input}
            name="email"
            type="text"
            placeholder="Username or email"
          />
          {emailDirty && emailError && <div style={{ color: 'red' }}>{emailError}</div>}
          <input
            onChange={(e) => passwordHandler(e)}
            value={password}
            onBlur={(e) => blurHandler(e)}
            className={styles.header__input}
            name="password"
            type="text"
            placeholder="Password"
          />
          {passwordDirty && passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
          <button
            disabled={!formValid}
            onClick={handlerLogin}
            className={styles.header__submit_button}
            type="submit">
            Log in
          </button>
          {loginFail && (
            <div style={{ width: 500, color: 'red', margin: 65 }}>
              Ошибка в вводе пороля или почты
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Logup;
