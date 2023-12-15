// registrationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const registrationSlice = createSlice({
  name: 'registration',
  initialState: {
    step: 1,
    formData: {selectedCheckboxes: []},
  },
  reducers: {
    setFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    toggleCheckbox: (state, action) => {
      const checkboxValue = action.payload;
      const index = state.formData.selectedCheckboxes.indexOf(checkboxValue);

      if (index === -1) {
        state.formData.selectedCheckboxes.push(checkboxValue);
      } else {
        state.formData.selectedCheckboxes.splice(index, 1);
      }
    },
    nextStep: (state) => {
      state.step += 1;
    },
    prevStep: (state) => {
      state.step -= 1;
    },
  },
});

export const { setFormData, nextStep, prevStep, toggleCheckbox } = registrationSlice.actions;
// export const selectRegistration = (state) => state.registration;
export default registrationSlice.reducer;
