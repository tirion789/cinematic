import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import userSlice from './slices/userSlice';
import filmSlice from './slices/film/filmSlice';
import profileSlice from './slices/profile/profileSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    film: filmSlice,
    profile: profileSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
