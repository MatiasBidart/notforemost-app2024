import { createSlice } from "@reduxjs/toolkit";

// 👨🏽‍💻 We set a global and reutilizable loading state, we can modify it with dispatching it

export const isLoadingSlice = createSlice({
    name:'isLoading',
    initialState: false,
    reducers:{
       setIsLoadingGlobal: (state, action) => action.payload
    }
}
)

export const { setIsLoadingGlobal } = isLoadingSlice.actions
export default isLoadingSlice.reducer;