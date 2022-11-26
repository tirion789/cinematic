import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export type filmItem = {
  ImgUrl: string;
  title: string;
  time: string;
  rating: string;
  description: string;
  country: string;
  flag: string;
  genre: string[];
  id: string;
};

export const fetchFilms = createAsyncThunk<filmItem[]>('film/fetchFilmsStatus', async () => {
  const { data } = await axios.get<filmItem[]>(
    'https://629b64b3656cea05fc3883e0.mockapi.io/Items2',
  );
  return data;
});

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface filmSliceState {
  items: filmItem[];
  status: Status;
  activeGenres: string[];
}

const initialState: filmSliceState = {
  items: [],
  status: Status.LOADING,
  activeGenres: ['Action', 'K drama'],
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
      state.activeGenres = state.activeGenres.filter((obj) => obj !== action.payload);
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
  },
});

export const { setItems, setActiveGenres, setClear } = filmSlice.actions;

export default filmSlice.reducer;
