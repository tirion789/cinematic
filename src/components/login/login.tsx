import React, { useEffect, useState } from 'react';
import styles from '../header/header.module.scss';
import { setUser } from '../../redux/slices/userSlice';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import { ILogin } from './login.interface';

const Login: React.FC<ILogin> = ({
  passwordHandler,
  emailHandler,
  setOpen,
  blurHandler,
  password,
  email,
  emailDirty,
  emailError,
  passwordDirty,
  passwordError,
  formValid,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [registerFail, setRegisterFail] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('users');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      dispatch(setUser(foundUser));
    }
  }, [dispatch]);

  const handlerRegister = async () => {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setRegisterFail(false);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          }),
        );
        navigate('/home');
        localStorage.setItem('users', JSON.stringify(user));
      })
      .catch(() => {
        setRegisterFail(true);
      });
  };

  return (
    <>
      <div className={styles.header__modal_inner}>
        <button className={styles.header__close} onClick={() => setOpen(false)}></button>
      </div>
      {/* <input
            value={username}
            onChange={(e) => usernameHandler(e)}
            onBlur={(e) => blurHandler(e)}
            className={styles.header__input}
            name="username"
            type="text"
            placeholder="Username"
          />
          {userDirty && usernameError && <div style={{ color: 'red' }}>{usernameError}</div>} */}
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
      <button
        disabled={!formValid}
        onClick={handlerRegister}
        className={styles.header__submit_button}
        type="submit">
        Register
      </button>
      {registerFail && (
        <div style={{ width: 500, color: 'red', margin: 65 }}>
          Похоже данная почта уже зарегестрированна :(
        </div>
      )}
    </>
  );
};

export default Login;
