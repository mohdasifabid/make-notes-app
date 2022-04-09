import axios from "axios";
import { useEffect } from "react";
import { useVideo } from "../useVideo";
import { ActiveVideoCard } from "./ActiveVideoCard";
import { Navbar } from "./Navbar";
import { VideoCard } from "./VideoCard";
import "./VideoPage.css";

export const VideoPage = () => {
  const { state, dispatch } = useVideo();
  useEffect(() => {
    const getVideos = async () => {
      const response = await axios.get("api/videos");
      dispatch({ type: "GET_VIDEOS", payload: response.data.videos });
    };
    getVideos();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="video-page-body">
        <div className="video-page-body-content-left-side">
          <ActiveVideoCard />
        </div>
        <div className="video-page-body-content-right-side">
          {state.videos.map((item) => {
            return <VideoCard key={item._id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};
