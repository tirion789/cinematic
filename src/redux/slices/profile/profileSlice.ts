import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getCartFromLocalStorage } from '../../../utils/getCartFromLocalStorage';
import { IProfileSliceState, ProfileSliceState } from './profileType';

const initialState: ProfileSliceState = {
  items: getCartFromLocalStorage(),
};

const profileSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addFilms(state, action: PayloadAction<IProfileSliceState>) {
      state.items.push(action.payload);
    },
    deletedFilm(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    filterFilms(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.genre.includes(action.payload));
    },
  },
});

export const { addFilms, deletedFilm, filterFilms } = profileSlice.actions;

export default profileSlice.reducer;
