import axios from "axios";
import { useEffect } from "react";
import { useVideo } from "../useVideo";
import { ActiveVideoCard } from "./ActiveVideoCard";
import { Navbar } from "./Navbar";
import { VideoCard } from "./VideoCard";
import "./VideoPage.css";
import { useParams } from "react-router-dom";

export const VideoPage = () => {
  const { state, dispatch } = useVideo();
  const { videoId } = useParams();
  console.log("vidopage", videoId);

  const videoToPlay = state.videos.find((item) => item.video === videoId);
  const restVideos = state.videos.filter((item) => item.video !== videoId);
  console.log(videoToPlay);
  console.log(state.videos);
  return (
    <div>
      <Navbar />
      <div className="video-page-body">
        <div className="video-page-body-content-left-side">
          <ActiveVideoCard videoToPlay={videoToPlay} />
        </div>
        <div className="video-page-body-content-right-side">
          {restVideos.map((item) => {
            return <VideoCard key={item._id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};
