import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import { useVideo } from "./useVideo";
import { Login } from "./utilities/Login";
import { History } from "./utilities/History";
import { Routes, Route} from "react-router-dom"
import { Playlist } from "./utilities/Playlist";
import { VideoPage } from "./utilities/VideoPage";
import { WatchLater } from "./utilities/WatchLater";
import { LandingPage} from "./utilities/LandingPage";
import { TrendingVideos } from "./utilities/TrendingVideos";

function App() {  
  const {state, dispatch} = useVideo()
  useEffect(() => {
    const getVideos = async () => {
      const response = await axios.get("api/videos");
      dispatch({ type: "GET_VIDEOS", payload: response.data.videos });
    };
    getVideos();
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/video-page/:videoId" element={<VideoPage/>}/>
        <Route path="/trending" element={<TrendingVideos/>}/>
        <Route path="/watch-later" element={<WatchLater/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/playlist" element={<Playlist/>}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>

  )
}

export default App;
