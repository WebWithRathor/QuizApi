import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    User:JSON.parse(localStorage.getItem('Quiz'))||[]
}

export const questionSlice = createSlice({
    name:'questions',
    initialState,
    reducers:{
        LoadUser:(state,action)=>{
            state.User = action.payload;
        },
        emptyState:(state,action)=>{
            state.User = [];
        }
    }
})

export const { LoadUser,emptyState } = questionSlice.actions
export default questionSlice.reducer;
