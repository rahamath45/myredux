import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../Slices/themeSlice";
import todoReducer from "../Slices/todoSlice";

  


  const store = configureStore({
    reducer:{
          theme: themeReducer,
          todo: todoReducer,
    },
  });

  export default store;