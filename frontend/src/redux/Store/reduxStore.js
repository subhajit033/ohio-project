import { configureStore } from "@reduxjs/toolkit";
import registration from "../Slices/registration";
const reduxStore = configureStore({
    reducer: {
      registration: registration
    },
  });
  
  export default reduxStore;