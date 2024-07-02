import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { setIsLoadingGlobal } from "./isLoading.slice";

// 👨🏽‍💻 Article Slice: we consume the end-point by a global state, so we can use it in many components
// if we need it in the future. 
// the action setArticles sets the information from the http response.

// <i>Redux-Toolkit</i>

export const articlesSlice = createSlice({
    name:'articlesSlice',
    initialState: [],
    reducers:{
       setArticles: (state, action) => action.payload
    }
}
)

export const { setArticles } = articlesSlice.actions
export const getArticles = () => (dispatch) => {
    dispatch(setIsLoadingGlobal(true))
    const URL = `http://localhost:9000/api/articles`
    return axios.get(URL)
    .then(({data}) =>dispatch(setArticles(data)))
    .catch(err => console.log(err))
    .finally(()=> dispatch(setIsLoadingGlobal(false)))
}

export default articlesSlice.reducer;