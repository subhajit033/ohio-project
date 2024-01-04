import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState:{
        unApprovedUser: [],
        approvedUser: []
        
    },
    reducers:{
        setUnApprovedUserSlice: (state, action)=>{
            state.unApprovedUser = action.payload
        },
        setAprovedUserSlice: (state, action)=>{
            state.approvedUser = action.payload
        },
    }
})

export const {setUnApprovedUserSlice, setAprovedUserSlice} = userSlice.actions;

export default userSlice.reducer;