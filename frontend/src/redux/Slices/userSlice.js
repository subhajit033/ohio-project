import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState:{
        unApprovedUser: [],
        approvedUser: [],
        myDetails: {},
        nationality : null

        
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
        },
        setNationality: (state, action)=>{
            state.nationality = action.payload;
        }
    }
})

export const {setUnApprovedUserSlice, setAprovedUserSlice, setMyDetails, setNationality} = userSlice.actions;

export default userSlice.reducer;