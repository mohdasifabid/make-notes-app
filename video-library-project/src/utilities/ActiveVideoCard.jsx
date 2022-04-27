import axios from "axios";
import { useState } from "react";
import { useVideo } from "../useVideo";
import "./ActiveVideoCard.css";

export const ActiveVideoCard = ({ video }) => {
  const { state, dispatch } = useVideo();
  const [likes, setLikes] = useState("");
  const [dislikes, setDislikes] = useState(0);

  const getLikedVideo = async (likedVideo) => {
    const token = localStorage.getItem("encodedToken");
    const response = await axios.post(
      "/api/user/likes",
      {
        video: likedVideo,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 201) {
      setLikes(response.data.likes.length);
    }
    console.log(response);
  };
  const deleteDislikedVideo = async (dislikedVideo) => {
    const token = localStorage.getItem("encodedToken");
    const response = await axios.delete(
      `/api/user/likes/${dislikedVideo._id}`,
      {
        headers: {
          authorization: token,
        },
        data: {
          video: dislikedVideo,
        },
      }
    );
  };
  const getWatchlaterVideo = async (watchlaterVideo) => {
    const token = localStorage.getItem("encodedToken");
    const response = await axios.post(
      "/api/user/watchlater",
      {
        video: watchlaterVideo,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
  };
  const getPlaylistVideo = async (playlistVideo) => {
    const token = localStorage.getItem("encodedToken");
    const response = await axios.post(
      "/api/user/playlists",
      {
        video: playlistVideo,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log(response);
  };
  return (
    <div className="active-video-card-container">
      <p className="active-video-card-title">
        <strong>{video.title}</strong>
      </p>
      <p className="active-video-card-sub-title">{video.creator}</p>
      <iframe
        className="active-video-card-media"
        src={`https://youtube.com/embed/${video.vLink}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />
      <div className="active-video-card-bottom-content">
        <div className="activ-video-card-icons-container">
          <span className="active-video-card-icons-and-tags">
            <i
              class="fa-solid fa-thumbs-up"
              onClick={() => {
                getLikedVideo(video);
              }}
            ></i>
            {likes}
          </span>
          <span className="active-video-card-icons-and-tags">
            <i
              class="fa-solid fa-thumbs-down"
              onClick={() => {
                deleteDislikedVideo(video);
                setDislikes(dislikes + 1);
              }}
            ></i>{" "}
            {dislikes}
          </span>
          <span className="active-video-card-icons-and-tags">
            <i
              class="fa-solid fa-heart"
              onClick={() => getWatchlaterVideo(video)}
            ></i>
            Watch Later
          </span>
          <span className="active-video-card-icons-and-tags">
            <i
              class="fa-solid fa-list"
              onClick={() => getPlaylistVideo(video)}
            ></i>{" "}
            Add to Playlist
          </span>
        </div>
        <div className="active-video-card-bottom-content-right-side">
          <span className="active-video-card-views">123k Views</span>
          <span className="active-video-card-release-time">7 hour ago</span>
        </div>
      </div>
      <div className="active-video-card-description-container">
        <p className="active-video-card-description-title">
          <strong>Description</strong>
        </p>
        <p className="active-video-card-description-content">
          {" "}
          {video.description}
        </p>
      </div>
    </div>
  );
};
