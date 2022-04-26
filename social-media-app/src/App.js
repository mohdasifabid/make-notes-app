import "./App.css";
import { Routes, Route} from "react-router-dom"
import { LandingPage } from "./utilities/LandingPage";
import { Signup } from "./utilities/Signup";
import { LoginPage } from "./utilities/Login";
import { useEffect } from "react";


function App() {
  useEffect(()=>{

  },[])
  return (
    <div >
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="login" element={< LoginPage/> }/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  )};

export default App;
