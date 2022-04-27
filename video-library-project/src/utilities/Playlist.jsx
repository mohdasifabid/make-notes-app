import axios from "axios";
import { useEffect } from "react";
import { useVideo } from "../useVideo";
import { Navbar } from "./Navbar";
import "./Playlist.css";

export const Playlist = () => {
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
        dispatch({ type: "GET_PLAYLIST", payload: response.data.playlists });
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

        {state.playlist.map((pVideo) => {
          return (
            <div className="playlist-body-content">
              <div>
                <p className="playlist-body-content-playlist-name">
                  <strong>{pVideo.category} : playlist</strong>
                </p>
                <p className="playlist-body-content-playlist-count">
                  {pVideo.title}
                </p>
              </div>
              <div>
                <i class="playlist-delete-icon fa-solid fa-trash-can"></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
