import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Slices/todoSlice";

 



 const AddTodo =()=> {
    const [text,setText] = useState("");
    const dispatch = useDispatch();
    return(
           <div>
           <form onSubmit={(e)=>{
                   e.preventDefault();
                dispatch(addTodo(text));
                setText("");
                }}>
             <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
             <input type="submit" value="Add Todo"/>
             </form> 
           </div>
    )
 }

 export default AddTodo;