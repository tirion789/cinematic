import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
  items: [],
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
  },
});

export const { addFilms } = profileSlice.actions;

export default profileSlice.reducer;
