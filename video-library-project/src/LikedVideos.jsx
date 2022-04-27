import axios from "axios";
import { useEffect } from "react";
import { useVideo } from "./useVideo";
import { Navbar } from "./utilities/Navbar";
import { VideoCard } from "./utilities/VideoCard";
import "./utilities/WatchLater.css";
export const LikedVideos = () => {
  const { state, dispatch } = useVideo();
  console.log("how is it going", state.likedVideos);
  useEffect(() => {
    const getLikedVideos = async () => {
      const token = localStorage.getItem("encodedToken");
      const response = await axios.get("/api/user/likes", {
        headers: {
          authorization: token,
        },
      });
      if (response.status === 200) {
        dispatch({ type: "GET_LIKED_VIDEOS", payload: response.data.likes });
      }
    };
    getLikedVideos();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="watch-later-videos-body">
        <h1>Liked videos</h1>
        <div className="watch-later-videos-container">
          <div className="watch-later-videos-card-container">
            {state.likedVideos.map((likedV) => {
              return <VideoCard type="lv" likedV={likedV} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
