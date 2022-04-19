import "./App.css";
import {Routes, Route} from "react-router-dom";
import { LandingPage,  } from "./utilities/LandingPage";
import { ArchivePage } from "./utilities/ArchivePage"
import { LabelsPage } from "./utilities/Labels";
import { LoginPage } from "./utilities/LoginPage";
import { useEffect } from "react";
import { useAuthProvider } from "./authProvider";
import { Signup } from "./utilities/Signup";

function App() {
  const {dispatch: authDispatch} = useAuthProvider()
  useEffect(()=>{
   const token = localStorage.getItem("encodedToken");
   if(token){
     authDispatch({type: "LOGIN_STATUS", payload: true})
   }else {
    authDispatch({type: "LOGIN_STATUS", payload: false})
   }



  },[])
  return (
  <div>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/archive" element={<ArchivePage/>}/>
      <Route path="/labels" element={<LabelsPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
  </div>
  );
}

export default App;
