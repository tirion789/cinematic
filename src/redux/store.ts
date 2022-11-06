import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import filterSlice from './slices/filterSlice';
import userSlice from './slices/userSlice';
import filmSlice from './slices/filmSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    user: userSlice,
    film: filmSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
