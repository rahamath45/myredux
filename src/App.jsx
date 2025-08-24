import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./Slices/themeSlice";
import TodoList from "./Components/TodoList";
import AddTodo from "./Components/AddTodo";



function App() {
  
  const mode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  return (
    <>
    <div style ={{ background : mode === "light" ? "#fff" : "#333",
            color: mode === "light" ? "#000" : "#fff", height:"100vh"
    }}>
      <h1>nisha</h1>
      <h2>current Theme :{mode}</h2>
      <button onClick={() =>{
             dispatch(toggleTheme());
      }}>Toggle theme</button>
      <AddTodo/>
      <TodoList/>
      </div>
    </>
  )
}

export default App;
