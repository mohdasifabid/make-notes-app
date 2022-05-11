import "./App.css";
import {Routes, Route} from "react-router-dom"
import { LandingPage } from "./components/LandingPage";
import { Login } from "./components/Login";
import { useEffect } from "react";
import { useAuthProvider } from "./authProvider";
import { Signup } from "./components/SignUp";
import { Postcard } from "./components/PostCard";
import { Post } from "./components/Post";
import { PrivateRoute } from "./components/PrivateRoute";

function App() {
  const {state: authState, dispatch: authDispatch} = useAuthProvider();
  useEffect(()=>{
   const token = localStorage.getItem("encodedToken")
   if(token){
     authDispatch({type: "LOGIN_STATUS", payload: true})
   }else{
    authDispatch({type: "LOGIN_STATUS", payload: false})
   }
  
  },[])


  return ( 
    <div>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route element={<PrivateRoute/>}>
        <Route path="/post" element={<Post/>}/>
      </Route>
    </Routes>
    

    </div>

  )
}

export default App;
