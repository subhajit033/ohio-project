import { createSlice } from '@reduxjs/toolkit';

const toastslice = createSlice({
  name: 'toast',
  initialState: {
    toastType:{
        type:'',
        message: ''
    }
  },
  reducers: {
    setToast: (state, action) => {
      state.toastType = {...action.payload}
    },
  },
});

export const { setToast } = toastslice.actions;

export default toastslice.reducer;
