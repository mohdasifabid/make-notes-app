import { Link } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./utilities/LandingPage";
import { Routes, Route} from "react-router-dom"
import { VideoPage } from "./utilities/VideoPage";
import { TrendingVideos } from "./utilities/TrendingVideos";
import { WatchLater } from "./utilities/WatchLater";
import { Playlist } from "./utilities/Playlist";
import { Login } from "./utilities/Login";
import { History } from "./utilities/History";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/video-page" element={<VideoPage/>}/>
        <Route path="/trending" element={<TrendingVideos/>}/>
        <Route path="/watch-later" element={<WatchLater/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/playlist" element={<Playlist/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App;
