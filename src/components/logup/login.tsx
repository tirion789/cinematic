import React, { useEffect, useState } from 'react';
import styles from '../../scss/components/regauth.module.scss';
import { setUser } from '../../redux/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import { useInput } from '../../hooks/validation';

type LoginProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Login: React.FC<LoginProps> = ({ setOpen }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loginFail, setLoginFail] = useState<boolean>(false);
  const [blurPassword, setBlurPassword] = useState(true);
  const email = useInput('', { isEmpty: true, minLength: 3, emailError: true });
  const password = useInput('', { isEmpty: true, minLength: 5, maxLength: 8 });
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
      const { user } = await signInWithEmailAndPassword(auth, email.value, password.value);
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
        value={email.value}
        onChange={(e) => email.onChange(e)}
        onBlur={(e) => email.onBlur(e)}
        className={styles.regauth__input}
        name="email"
        type="text"
        placeholder="Username or email"
      />
      {email.isDirty && email.isEmpty && (
        <div style={{ color: 'red' }}>Поле не може быть пустым</div>
      )}
      {email.isDirty && email.minLength && <div style={{ color: 'red' }}>Некорректная длина</div>}
      {email.isDirty && email.emailError && <div style={{ color: 'red' }}>Некорректный email</div>}
      <input
        value={password.value}
        onChange={(e) => password.onChange(e)}
        onBlur={(e) => password.onBlur(e)}
        className={styles.regauth__input}
        name="password"
        type={blurPassword ? 'password' : 'text'}
        placeholder="Password"
      />
      {password.isDirty && password.isEmpty && (
        <div style={{ color: 'red' }}>Поле не може быть пустым</div>
      )}
      {password.isDirty && password.minLength && (
        <div style={{ color: 'red' }}>Некорректная длина</div>
      )}
      {password.isDirty && password.maxLength && (
        <div style={{ color: 'red' }}>Слишком длинный пороль</div>
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
