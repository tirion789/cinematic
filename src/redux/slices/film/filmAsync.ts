import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../userSlice';
import { auth, filmItem } from './filmType';

export const fetchFilms = createAsyncThunk<filmItem[]>('films/fetchFilmsStatus', async () => {
  const { data } = await axios.get<filmItem[]>(
    'https://629b64b3656cea05fc3883e0.mockapi.io/Items2',
  );
  return data;
});

export const fetchFilm = createAsyncThunk('film/fetchFilm', async (id: string) => {
  const { data } = await axios.get<filmItem>(
    'https://629b64b3656cea05fc3883e0.mockapi.io/Items2/' + id,
  );
  return data;
});

export const authFch = createAsyncThunk('auth/login', async (params: auth, { dispatch }) => {
  const { email, password } = params;
  const auth = getAuth();
  const { user } = await signInWithEmailAndPassword(auth, email.value, password.value);
  dispatch(
    setUser({
      email: user.email,
      id: user.uid,
      token: user.refreshToken,
    }),
  );
  localStorage.setItem('users', JSON.stringify(user));
});

export const regAuth = createAsyncThunk('reg/signUp', async (params: auth, { dispatch }) => {
  const { email, password } = params;
  const auth = getAuth();
  const { user } = await createUserWithEmailAndPassword(auth, email.value, password.value);
  dispatch(
    setUser({
      email: user.email,
      id: user.uid,
      token: user.refreshToken,
    }),
  );
  localStorage.setItem('users', JSON.stringify(user));
});
