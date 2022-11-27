import React, { useEffect, useState } from 'react';
import styles from '../../scss/components/regauth.module.scss';
import { setUser } from '../../redux/slices/userSlice';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import { ILogup } from './logup.interface';

const Logup: React.FC<ILogup> = ({
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
      <div className={styles.regauth__modal_inner}>
        <button className={styles.regauth__close} onClick={() => setOpen(false)}></button>
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
        className={styles.regauth__input}
        name="email"
        type="text"
        placeholder="Email"
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
        onClick={handlerRegister}
        className={styles.regauth__submit_button}
        type="submit">
        Register
      </button>
      {registerFail && (
        <div style={{ width: 500, color: 'red', margin: 65 }}>
          Похоже данная почта уже зарегестрированна
        </div>
      )}
    </>
  );
};

export default Logup;
