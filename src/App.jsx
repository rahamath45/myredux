import { Link, Route, Routes } from "react-router-dom";
import Posts from "./Components/Posts";
import Samples from "./Components/Samples";




function App() {
 
  
  return (
    <>
     <nav>
      <Link to="/">home</Link> | <Link to="/posts">posts</Link>
     </nav>
     <Routes>
      <Route path="/" element={<Samples/>} />
       <Route path="/posts" element={<Posts/>} />

     </Routes>
    
    </>
  )
}

export default App;
