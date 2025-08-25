import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

  

 export const fetchPosts = createAsyncThunk("posts/fetchposts" ,async() =>{
      const {data} = await axios.get("/posts");
      return data;
  });

  const postsSlice = createSlice({
    name:"posts",
    initialState:{
        data :[],
        isLoading:false,
        error:null,
    },
    reducers:{},
    extraReducers:(builder) =>{
     builder
        .addCase(fetchPosts.pending,(state)=>{
            state.isLoading = true;
            state.error = null;
        })
         .addCase(fetchPosts.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.data = action.payload;
        })
         .addCase(fetchPosts.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.error.message;
        })
    }
  })

  const postsReducer = postsSlice.reducer;
  export default postsReducer;