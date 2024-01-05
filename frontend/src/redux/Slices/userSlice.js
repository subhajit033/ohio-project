import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState:{
        unApprovedUser: [],
        approvedUser: [],
        myDetails: {}
        
    },
    reducers:{
        setUnApprovedUserSlice: (state, action)=>{
            state.unApprovedUser = action.payload
        },
        setAprovedUserSlice: (state, action)=>{
            state.approvedUser = action.payload
        },
        setMyDetails: (state, action)=>{
            state.myDetails = action.payload;
        }
    }
})

export const {setUnApprovedUserSlice, setAprovedUserSlice, setMyDetails} = userSlice.actions;

export default userSlice.reducer;