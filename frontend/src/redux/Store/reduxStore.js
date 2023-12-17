import { configureStore } from '@reduxjs/toolkit';
import registration from '../Slices/registration';
import tabNav from '../Slices/tabNav';
const reduxStore = configureStore({
  reducer: {
    registration: registration,
    tabNav: tabNav,
  },
});

export default reduxStore;
