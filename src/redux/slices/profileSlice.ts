import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCartFromLocalStorage } from '../../utils/getCartFromLocalStorage';

export type IProfileSliceState = {
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

interface ProfileSliceState {
  items: IProfileSliceState[];
}

const initialState: ProfileSliceState = {
  items: getCartFromLocalStorage(),
};

const profileSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addFilms(state, action: PayloadAction<IProfileSliceState>) {
      state.items.find((film) => film.id === action.payload.id);
      state.items.push({
        ...action.payload,
      });
    },
    deletedFilm(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
  },
});

export const { addFilms, deletedFilm } = profileSlice.actions;

export default profileSlice.reducer;
