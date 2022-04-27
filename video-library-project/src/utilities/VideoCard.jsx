import axios from "axios";
import { Link } from "react-router-dom";
import "./VideoCard.css";

export const VideoCard = ({ item, type: later, type: lv, type: history }) => {
  const postHistory = async (playedVideo) => {
    const token = localStorage.getItem("encodedToken");
    const response = await axios.post(
      "/api/user/history",
      {
        video: playedVideo,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log("history", response);
  };

  return (
    <div className="video-card-container">
      <iframe
        className="video-card-media"
        src={`https://youtube.com/embed/${item.vLink}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />
      <p className="video-card-title">
        <strong>{item.title}</strong>
      </p>
      <p className="video-card-sub-title">{item.creator}</p>
      <Link to={`/videos/${item._id}`}>
        <button
          class="video-card-btn duck-primary-btn-s duck-primary-btn"
          onClick={() => postHistory(item)}
        >
          Watch Now
        </button>
      </Link>
      <i class="video-card-like-icon fa-solid fa-heart"></i>
    </div>
  );
};
