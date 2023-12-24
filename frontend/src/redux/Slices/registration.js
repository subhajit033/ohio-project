// registrationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const registrationSlice = createSlice({
  name: 'registration',
  initialState: {
    step: 1,
    formData: {memberShip: []},
  },
  reducers: {
    setFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    toggleCheckbox: (state, action) => {
      const checkboxValue = action.payload;
      const index = state.formData.memberShip.indexOf(checkboxValue);

      if (index === -1) {
        state.formData.memberShip.push(checkboxValue);
      } else {
        state.formData.memberShip.splice(index, 1);
      }
    },
    setFormDataByLogin: (state, action)=>{
      state.formData = action.payload;
    },
    nextStep: (state) => {
      state.step += 1;
    },
    prevStep: (state) => {
      state.step -= 1;
    },
  },
});

export const { setFormData, nextStep, prevStep, toggleCheckbox, setFormDataByLogin } = registrationSlice.actions;
// export const selectRegistration = (state) => state.registration;
export default registrationSlice.reducer;
