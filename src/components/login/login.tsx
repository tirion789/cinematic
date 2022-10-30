import React from 'react';
import styles from '../header/header.module.scss';

type HeaderProps = {
  passwordHandler: (e: { target: { value: React.SetStateAction<string> } }) => void;
  emailHandler: (e: { target: { value: React.SetStateAction<string> } }) => void;
  usernameHandler: (e: { target: { value: React.SetStateAction<string> } }) => void;
  blurHandler: (e: { target: { name: string } }) => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;

  openFormReg: boolean;
  username: string;
  password: string;
  email: string;
  userDirty: boolean;
  usernameError: string;
  emailDirty: boolean;
  emailError: string;
  passwordDirty: boolean;
  passwordError: string;
  formValid: boolean;
};

const Login: React.FC<HeaderProps> = ({
  passwordHandler,
  emailHandler,
  usernameHandler,
  openFormReg,
  setOpen,
  username,
  blurHandler,
  password,
  email,
  userDirty,
  usernameError,
  emailDirty,
  emailError,
  passwordDirty,
  passwordError,
  formValid,
}) => {
  return (
    <>
      {openFormReg && (
        <>
          <div className={styles.header__modal_inner}>
            <button className={styles.header__close} onClick={() => setOpen(false)}></button>
          </div>
          <input
            value={username}
            onChange={(e) => usernameHandler(e)}
            onBlur={(e) => blurHandler(e)}
            className={styles.header__input}
            name="username"
            type="text"
            placeholder="Username"
          />
          {userDirty && usernameError && <div style={{ color: 'red' }}>{usernameError}</div>}
          <input
            onChange={(e) => emailHandler(e)}
            value={email}
            onBlur={(e) => blurHandler(e)}
            className={styles.header__input}
            name="email"
            type="text"
            placeholder="Email"
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
          <button disabled={!formValid} className={styles.header__submit_button} type="submit">
            Log in
          </button>
        </>
      )}
    </>
  );
};

export default Login;
