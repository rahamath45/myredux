import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../Slices/themeSlice";
import todoReducer from "../Slices/todoSlice";
import postsReducer from "../Slices/PostsSlice";

  


  const store = configureStore({
    reducer:{
          theme: themeReducer,
          todo: todoReducer,
          post: postsReducer,
    },
  });

  export default store;