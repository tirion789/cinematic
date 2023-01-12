import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IFilterSliceState {
  searchValue: string;
}

const initialState: IFilterSliceState = {
  searchValue: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
