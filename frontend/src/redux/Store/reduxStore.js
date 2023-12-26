import { configureStore } from '@reduxjs/toolkit';
import registration from '../Slices/registration';
import tabNav from '../Slices/tabNav';
import toastSlice from '../Slices/toastSlice';
import authSlice from '../Slices/authSlice';
import userSlice from '../Slices/userSlice';
const reduxStore = configureStore({
  reducer: {
    registration: registration,
    tabNav: tabNav,
    toast: toastSlice,
    auth: authSlice,
    user: userSlice
  },
});

export default reduxStore;
