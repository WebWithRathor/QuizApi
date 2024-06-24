import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Questions : []
}

export const questionSlice = createSlice({
    name:'questions',
    initialState,
    reducers:{
        Load:(state,action)=>{
            state.Questions = action.payload;
        },
    }
})

export const { Load } = questionSlice.actions
export default questionSlice.reducer;
