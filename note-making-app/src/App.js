import "./App.css";
import {Routes, Route} from "react-router-dom";
import { LandingPage,  } from "./utilities/LandingPage";
import { ArchivePage } from "./utilities/ArchivePage"
import { LabelsPage } from "./utilities/Labels";
import { LoginPage } from "./utilities/LoginPage";

function App() {
  return (
  <div>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/archive" element={<ArchivePage/>}/>
      <Route path="/labels" element={<LabelsPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
    </Routes>
  </div>
  );
}

export default App;
