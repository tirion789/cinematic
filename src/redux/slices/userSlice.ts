import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  emails: null,
  token: null,
  id: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.emails = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },

    removeUser(state) {
      state.emails = null;
      state.token = null;
      state.id = null;
      localStorage.clear();
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
