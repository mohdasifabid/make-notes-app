import { Navbar } from "./Navbar";
import { VideoCard } from "./VideoCard";
import "./History.css";
import { useEffect } from "react";
import axios from "axios";
import { useVideo } from "../useVideo";

export const History = () => {
  const { state, dispatch } = useVideo();
  useEffect(() => {
    const getPlaylistVideos = async () => {
      const token = localStorage.getItem("encodedToken");
      const response = await axios.get("/api/user/history", {
        headers: {
          authorization: token,
        },
      });
      if (response.status === 200) {
        dispatch({ type: "GET_HISTORY", payload: response.data.history });
      }
    };
    getPlaylistVideos();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="history-videos-body">
        <div className="history-videos-heading-clear-btn-container">
          <h1>History</h1>
          <button class=" history-videos-clear-btn duck-primary-btn-s duck-primary-btn">
            Clear History
          </button>
        </div>
        <div className="history-videos-container">
          <div className="history-videos-card-container">
            {state.history.map((hvideo) => {
              return <VideoCard item={hvideo} type="history" />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
