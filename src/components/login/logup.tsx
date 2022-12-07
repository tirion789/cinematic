import React, { useEffect, useState } from 'react';
import styles from '../../scss/components/regauth.module.scss';
import { setUser } from '../../redux/slices/userSlice';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import { useInput } from '../../hooks/validation';

type LogupProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Logup: React.FC<LogupProps> = ({ setOpen }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [registerFail, setRegisterFail] = useState(false);
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

  const handlerRegister = async () => {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email.value, password.value)
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
      <input
        value={email.value}
        onChange={(e) => email.onChange(e)}
        onBlur={(e) => email.onBlur(e)}
        className={styles.regauth__input}
        name="email"
        type="text"
        placeholder="Email"
      />
      {email.isDirty && (email.isEmpty || email.emailError) && (
        <div style={{ color: 'red' }}>
          {email.isEmpty === true ? <p>Поле не может быть пустым</p> : <p>Некорректный email</p>}
        </div>
      )}
      {/* {email.isDirty && email.minLength && <div style={{ color: 'red' }}>Некорректная длина</div>}
      {email.isDirty && email.emailError && <div style={{ color: 'red' }}>Некорректный email</div>} */}
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
      {/* {password.isDirty && password.minLength && (
        <div style={{ color: 'red' }}>Некорректная длина</div>
      )}
      {password.isDirty && password.maxLength && (
        <div style={{ color: 'red' }}>Слишком длинный пороль</div>
      )} */}
      <button className={styles.regauth__buttonShow} onClick={handlerShowPasswordButtonClick}>
        show/hidden
      </button>
      <button
        disabled={!email.inputValid || !password.inputValid}
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
