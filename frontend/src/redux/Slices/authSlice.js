import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: null,
  },
  reducers: {
    setAuthentication: (state, action) => {
        state.isAuthenticated = action.payload;
    },
  },
});
export const {setAuthentication} = authSlice.actions;

export default authSlice.reducer;