import axios from "axios";
import { useEffect } from "react";
import { useVideo } from "../useVideo";
import { Navbar } from "./Navbar";
import "./Playlist.css";
// import { VideoCard } from "./VideoCard";

export const Aplaylist = () => {
  const { state, dispatch } = useVideo();

  useEffect(() => {
    const getPlaylistVideos = async () => {
      const token = localStorage.getItem("encodedToken");
      const response = await axios.get("/api/user/playlists", {
        headers: {
          authorization: token,
        },
      });
      if (response.status === 200) {
        dispatch({ type: "GET_PLAYLISTS", payload: response.data.playlists });
      }
    };
    getPlaylistVideos();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="playlist-body">
        <div className="playlist-heading-clear-btn-container">
          <h1>Playlist</h1>
          <button class=" playlist-clear-btn duck-primary-btn-s duck-primary-btn">
            Clear Playlist
          </button>
        </div>
        <div className="playlist-body-content">
          {state.playlists.map((item) => {
            return (
              <p className="playlist-body-content-playlist-name">
                <strong>{item.title}</strong>
              </p>
            );
          })}
          <div>
            <i class="playlist-delete-icon fa-solid fa-trash-can"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
