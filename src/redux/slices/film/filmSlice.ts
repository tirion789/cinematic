import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authFch, fetchFilm, fetchFilms, regAuth } from './filmAsync';
import {
  AuthStatus,
  filmItem,
  filmSliceState,
  FilmStatus,
  RegisterStatus,
  Status,
} from './filmType';

const initialState: filmSliceState = {
  items: [],
  status: Status.LOADING,
  authStatus: AuthStatus.LOADING,
  registerStatus: RegisterStatus.LOADING,
  filmStatus: FilmStatus.LOADING,
  activeGenres: ['Action', 'K drama'],
  currentItem: null,
  loginFail: false,
  registerFail: false,
};

const filmSlice = createSlice({
  name: 'film',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<filmItem[]>) {
      state.items = action.payload;
    },
    setActiveGenres(state, action: PayloadAction<string>) {
      state.activeGenres = [...state.activeGenres, action.payload];
    },
    setClear(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => !obj.genre.includes(action.payload));
      state.activeGenres = state.activeGenres.filter((genre) => genre !== action.payload);
    },
    setTrendingClear(state) {
      state.items = state.items = [];
      state.activeGenres = state.activeGenres = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilms.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchFilms.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
    builder.addCase(fetchFilm.pending, (state) => {
      state.filmStatus = FilmStatus.LOADING;
    });
    builder.addCase(fetchFilm.fulfilled, (state, action) => {
      state.currentItem = action.payload;
      state.filmStatus = FilmStatus.SUCCESS;
    });
    builder.addCase(fetchFilm.rejected, (state) => {
      state.filmStatus = FilmStatus.ERROR;
      state.currentItem = null;
    });
    builder.addCase(authFch.pending, (state) => {
      state.authStatus = AuthStatus.LOADING;
    });
    builder.addCase(authFch.fulfilled, (state) => {
      state.authStatus = AuthStatus.SUCCESS;
    });
    builder.addCase(authFch.rejected, (state) => {
      state.authStatus = AuthStatus.ERROR;
      state.loginFail = true;
    });
    builder.addCase(regAuth.pending, (state) => {
      state.registerStatus = RegisterStatus.LOADING;
    });
    builder.addCase(regAuth.fulfilled, (state) => {
      state.registerStatus = RegisterStatus.SUCCESS;
    });
    builder.addCase(regAuth.rejected, (state) => {
      state.registerStatus = RegisterStatus.ERROR;
      state.registerFail = true;
    });
  },
});

export const { setTrendingClear, setItems, setActiveGenres, setClear } = filmSlice.actions;

export default filmSlice.reducer;
