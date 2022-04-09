import "./App.css";
import {Routes, Route} from "react-router-dom";
import { LandingPage } from "./utilities/LandingPage";
import { ArchivePage } from "./utilities/ArchivePage"

function App() {
  return (
  <div>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/archive" element={<ArchivePage/>}/>
    </Routes>
  </div>
  );
}

export default App;
