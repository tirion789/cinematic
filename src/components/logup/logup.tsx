import React from 'react';
import styles from '../header/header.module.scss';

type HeaderProps = {
  emailHandler: (e: { target: { value: React.SetStateAction<string> } }) => void;
  usernameHandler: (e: { target: { value: React.SetStateAction<string> } }) => void;
  blurHandler: (e: { target: { name: string } }) => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;

  username: string;
  email: string;
  userDirty: boolean;
  usernameError: string;
  emailDirty: boolean;
  emailError: string;
  formValid: boolean;
  openFormAuth: boolean;
};

const Logup: React.FC<HeaderProps> = ({
  emailHandler,
  usernameHandler,
  setOpen,
  username,
  blurHandler,
  email,
  userDirty,
  usernameError,
  emailDirty,
  emailError,
  formValid,
  openFormAuth,
}) => {
  return (
    <>
      {openFormAuth && (
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
            placeholder="Username or email"
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
          <button disabled={!formValid} className={styles.header__submit_button} type="submit">
            Log in
          </button>
        </>
      )}
    </>
  );
};

export default Logup;
