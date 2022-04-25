import { Navbar } from "./Navbar";
import "./Playlist.css";

export const Playlist = () => {
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
          <div>
            <p className="playlist-body-content-playlist-name">
              <strong>My Playlist Name</strong>
            </p>
            <p className="playlist-body-content-playlist-count">title</p>
          </div>
          <div>
            <i class="playlist-delete-icon fa-solid fa-trash-can"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
