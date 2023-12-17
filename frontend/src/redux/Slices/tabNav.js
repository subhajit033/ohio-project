import { createSlice } from '@reduxjs/toolkit';

const tabNavSlice = createSlice({
  name: 'tabNav',
  initialState: {
    tab: '',
    sideBarOpen: false,
  },
  reducers: {
    setTab: (state, action) => {
      state.tab = action.payload;
    },
    setSideBarOpen: (state)=>{
      state.sideBarOpen = !state.sideBarOpen
    }
  },
});

export const { setTab, setSideBarOpen } = tabNavSlice.actions;
// export const selectRegistration = (state) => state.registration;
export default tabNavSlice.reducer;
