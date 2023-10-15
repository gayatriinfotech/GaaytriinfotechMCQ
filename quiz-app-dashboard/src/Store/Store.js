import { configureStore } from "@reduxjs/toolkit";
import questionOperation from '../Slice/QuestionSlice'
export const store = configureStore({
    reducer:{questionOperation:questionOperation}
})