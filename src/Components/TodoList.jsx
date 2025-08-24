import { useDispatch, useSelector } from "react-redux"
import { deleteTodo, markComplete } from "../Slices/todoSlice";

 


 const TodoList =() =>{
    const{todos} =useSelector((state)=>state.todo);
    const dispatch = useDispatch();

    return(
        <div style ={{padding:"20px",display:"flex",flexDirection:"column",gap:"10px"}}>
            {todos.map((todo,index)=>(
                <div key={index} style={{display:"flex" , gap:"10px",alignItems:"center"}}>
                <p  
                style={todo.completed ? {textDecoration:"line-through"}:{}}
                 onClick={()=>{dispatch(markComplete(index))}} >{todo.task}</p>
                 <button type="button" onClick={()=>{dispatch(deleteTodo(index))
                 }}>detele </button>
                 </div>
            ))}
        </div>
    );
 } ;

 export default TodoList;