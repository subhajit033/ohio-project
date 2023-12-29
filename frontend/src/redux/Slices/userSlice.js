import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState:{
        unApprovedUser: [],
        
    },
    reducers:{
        setUnApprovedUserSlice: (state, action)=>{
            state.unApprovedUser = action.payload
        }
    }
})

export const {setUnApprovedUserSlice} = userSlice.actions;

export default userSlice.reducer;