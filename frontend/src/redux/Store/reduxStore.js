import { configureStore } from '@reduxjs/toolkit';
import registration from '../Slices/registration';
import tabNav from '../Slices/tabNav';
import toastSlice from '../Slices/toastSlice';
const reduxStore = configureStore({
  reducer: {
    registration: registration,
    tabNav: tabNav,
    toast: toastSlice
  },
});

export default reduxStore;
