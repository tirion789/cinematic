import React, { useEffect, useState } from 'react';
import styles from '../../scss/components/regauth.module.scss';
import { setUser } from '../../redux/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import { ILogin } from './login.iterface';

const Login: React.FC<ILogin> = ({
  emailHandler,
  passwordHandler,
  setOpen,
  passwordDirty,
  passwordError,
  blurHandler,
  email,
  emailDirty,
  emailError,
  password,
  formValid,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loginFail, setLoginFail] = useState<boolean>(false);
  const [blurPassword, setBlurPassword] = useState(true);
  useEffect(() => {
    const loggedInUser = localStorage.getItem('users');
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      dispatch(setUser(foundUser));
    }
  }, [dispatch]);

  const handlerShowPasswordButtonClick = () => {
    setBlurPassword((prev) => !prev);
  };

  const handlerLogin = async () => {
    const auth = getAuth();
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      setLoginFail(false);
      dispatch(
        setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken,
        }),
      );
      navigate('/home');
      localStorage.setItem('users', JSON.stringify(user));
      console.log('1');
    } catch (error) {
      setLoginFail(true);
      console.log('ERROR', error);
    }
    console.log('2');
  };

  return (
    <>
      <div className={styles.regauth__modal_inner}>
        <button className={styles.regauth__close} onClick={() => setOpen(false)}></button>
      </div>
      <input
        value={email}
        onChange={(e) => emailHandler(e)}
        onBlur={(e) => blurHandler(e)}
        className={styles.regauth__input}
        name="email"
        type="text"
        placeholder="Username or email"
      />
      {emailDirty && emailError && <div style={{ color: 'red' }}>{emailError}</div>}
      <input
        onChange={(e) => passwordHandler(e)}
        value={password}
        onBlur={(e) => blurHandler(e)}
        className={styles.regauth__input}
        name="password"
        type={blurPassword ? 'password' : 'text'}
        placeholder="Password"
      />
      <button className={styles.regauth__buttonShow} onClick={handlerShowPasswordButtonClick}>
        show/hidden
      </button>
      {passwordDirty && passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
      <button
        disabled={!formValid}
        onClick={handlerLogin}
        className={styles.regauth__submit_button}
        type="submit">
        Log in
      </button>
      {loginFail && (
        <div style={{ width: 500, color: 'red', margin: 65 }}>Ошибка в вводе пороля или почты</div>
      )}
    </>
  );
};

export default Login;
