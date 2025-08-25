import { createSlice } from "@reduxjs/toolkit";

 

 const todoSlice = createSlice({
    name:"todo",
    initialState:{
        todos: [],
    },
    reducers:{
        addTodo:(state,action) =>{
                state.todos.push({task: action.payload,completed:false}) 
        } ,
        markComplete: (state,action) => {
            state.todos[action.payload].completed = !state.todos[action.payload].completed;
        },
        deleteTodo:(state,action) => {
            state.todos.splice(action.payload,1);
        },
    }
 })

 export const {addTodo,markComplete,deleteTodo}= todoSlice.actions;

 const todoReducer = todoSlice.reducer;
 export default todoReducer;

 // from api, we are going to export the hooks
// hooks are generated based on the endpoint names
// hooks are always starts with 'use'
// getAllPosts is a query
// getAllPosts => use + GetAllPosts + Query => useGetAllPostsQuery
// getPostById => use + GetPostById + Query => useGetPostByIdQuery
// newPost is a mutation
// newPost => use + NewPost + Mutation => useNewPostMutation