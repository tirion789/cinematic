import React, { useEffect, useState } from 'react';
import styles from '../../scss/components/regauth.module.scss';
import { setUser } from '../../redux/slices/user/userSlice';
import { RootState, useAppDispatch } from '../../redux/store';
import { useInput } from '../../hooks/validation';
import { authFch } from '../../redux/slices/film/filmAsync';
import { useSelector } from 'react-redux';

type LoginProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Login: React.FC<LoginProps> = ({ setOpen }) => {
  const dispatch = useAppDispatch();
  const loginFail = useSelector((state: RootState) => state.film.loginFail);
  const [blurPassword, setBlurPassword] = useState(true);
  const email = useInput('', { isEmpty: true, emailError: true });
  const password = useInput('', { isEmpty: true, minLength: 5, maxLength: 12 });
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

  const handlerLogin = () => {
    dispatch(authFch({ email, password }));
  };

  return (
    <>
      <div className={styles.regauth__modal_inner}>
        <button className={styles.regauth__close} onClick={() => setOpen(false)}></button>
      </div>
      <input
        value={email.value}
        onChange={(e) => email.onChange(e)}
        onBlur={(e) => email.onBlur(e)}
        className={styles.regauth__input}
        name="email"
        type="text"
        placeholder="Username or email"
      />
      {email.isDirty && (email.isEmpty || email.emailError) && (
        <div style={{ color: 'red' }}>
          {email.isEmpty === true ? <p>Поле не может быть пустым</p> : <p>Некорректный email</p>}
        </div>
      )}
      <input
        value={password.value}
        onChange={(e) => password.onChange(e)}
        onBlur={(e) => password.onBlur(e)}
        className={styles.regauth__input}
        name="password"
        type={blurPassword ? 'password' : 'text'}
        placeholder="Password"
      />
      {password.isDirty && (password.isEmpty || password.minLength || password.maxLength) && (
        <div style={{ color: 'red' }}>
          {password.isEmpty === true ? (
            <p>Поле не может быть пустым</p>
          ) : password.minLength === true ? (
            <p>Минимальная длина 5 символов</p>
          ) : password.maxLength === true ? (
            <p>Максимальная длина 12 символов</p>
          ) : (
            ''
          )}
        </div>
      )}
      <button className={styles.regauth__buttonShow} onClick={handlerShowPasswordButtonClick}>
        show/hidden
      </button>
      <button
        disabled={!email.inputValid || !password.inputValid}
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
