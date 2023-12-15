// registrationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const registrationSlice = createSlice({
  name: 'registration',
  initialState: {
    step: 1,
    formData: {},
  },
  reducers: {
    setFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    nextStep: (state) => {
      state.step += 1;
    },
    prevStep: (state) => {
      state.step -= 1;
    },
  },
});

export const { setFormData, nextStep, prevStep } = registrationSlice.actions;
// export const selectRegistration = (state) => state.registration;
export default registrationSlice.reducer;
