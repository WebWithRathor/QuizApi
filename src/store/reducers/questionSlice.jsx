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
        }
    }
})

export const { LoadUser } = questionSlice.actions
export default questionSlice.reducer;
