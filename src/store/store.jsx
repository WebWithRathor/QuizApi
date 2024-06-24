import { configureStore } from "@reduxjs/toolkit";
import questionSlice from "./reducers/questionSlice";

export const store = configureStore({
    reducer:{questionSlice}
})