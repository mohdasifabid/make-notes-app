import "./App.css";
import { Routes, Route} from "react-router-dom"
import { LandingPage } from "./utilities/LandingPage";
import { Signup } from "./utilities/Signup";
import { LoginPage } from "./utilities/Login";
import { useEffect } from "react";
import { useAuthProvider } from "./authProvider";
import axios from "axios";


function App() {
  const {state: authState, dispatch: authDispatch} = useAuthProvider();
  useEffect(()=>{
    const token = localStorage.getItem("encodedToken")
    if(token){
      authDispatch({type: "LOGIN_STATUS", payload: true})
    }
    const getPosts = async () => {
      const response = await axios.get("/api/posts")
      console.log(response);
    }
    getPosts();
  },[])
 
  return (
    <div >
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        { (authState.isLoggedIn) ? <Route path="/" element={< LoginPage/> }/> : 
        <Route path="/login" element={< LoginPage/> }/> }
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  )};

export default App;
