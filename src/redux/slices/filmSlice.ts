import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

type filmItem = {
  ImgUrl: string;
  title: string;
  time: string;
  rating: string;
  description: string;
  country: string;
  flag: string;
  genre: string;
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
}

const initialState: filmSliceState = {
  items: [],
  status: Status.LOADING,
};

const filmSlice = createSlice({
  name: 'film',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<filmItem[]>) {
      state.items = action.payload;
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

export const { setItems } = filmSlice.actions;

export default filmSlice.reducer;
