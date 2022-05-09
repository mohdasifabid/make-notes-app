import "./App.css";
import {Routes, Route} from "react-router-dom"
import { LandingPage } from "./components/LandingPage";
import { Login } from "./components/Login";

function App() {
  return ( 
    <div>
    <LandingPage/>
    <Routes>
      <Route path="/login" element={<Login/>}/>
    </Routes>

    </div>

  )
}

export default App;
