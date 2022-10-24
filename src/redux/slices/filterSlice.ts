import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// export interface IFilterSliceState {
//   navigationIndex: number;
//   searchValue: string;
// }

const initialState = {
  navigationIndex: 0,
  searchValue: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setNavigationIndex(state, action: PayloadAction<number>) {
      state.navigationIndex = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { setNavigationIndex, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
