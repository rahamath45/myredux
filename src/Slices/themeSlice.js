import { createSlice } from "@reduxjs/toolkit";

 

 const themSlice = createSlice({
    name:"myapp theme",
    initialState:{
        mode:"light",
    },
    reducers:{
        toggleTheme:(state) => {
            state.mode = state.mode === "light" ? "dark" :"light";
        }
    }
 })

 export const {toggleTheme} = themSlice.actions;
 const themeReducer = themSlice.reducer;
 export default themeReducer;