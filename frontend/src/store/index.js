import { configureStore } from "@reduxjs/toolkit";
import articlesSlice from "./slices/articles.slice";
import isLoading from "./slices/isLoading.slice";

// 👷🏽‍♂️ we configure the store reducers we will manage in the application,
// to future slices updates -> 
// 1. create mySlice.slice.jsx,
// 2.import the reducers by the name used in the createSlice.name

export default configureStore({
    reducer: {
        articlesSlice,
        isLoading
    }
})