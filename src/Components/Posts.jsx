
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../Slices/PostsSlice";



 const Posts =() =>{
    const {data:posts,isLoading,error}=useSelector((state)=>state.post);
     const dispatch = useDispatch();

     useEffect(()=>{
        dispatch(fetchPosts());
     },[])

    if(isLoading){
  return<p>Loading....</p>
    }
     if(error){
        return<P>error:{error}</P>
     }
  
  
  return (
    <>
      <h1>post page</h1>
      <ul>
        {posts.map((post)=>(
            <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  )
}

export default Posts;