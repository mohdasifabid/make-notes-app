import { useVideo } from "../useVideo";
import { Link } from "react-router-dom";
import "./VideoCard.css";

export const VideoCard = ({ item }) => {
  const { state, dispatch } = useVideo();
  console.log("yelo", item);
  return (
    <div className="video-card-container">
      <iframe
        className="video-card-media"
        src={`https://youtube.com/embed/${item.video}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />

      <p className="video-card-title">
        <strong>{item.title}</strong>
      </p>
      <p className="video-card-sub-title">{item.creator}</p>
      <Link to={`/video-page/${item.video}`}>
        <button
          class="video-card-btn duck-primary-btn-s duck-primary-btn"
          // onClick={() => dispatch({ type: "SET_WATCH_NOW", payload: item })}
        >
          Watch Now
        </button>
      </Link>
      <i class="video-card-like-icon fa-solid fa-heart"></i>
    </div>
  );
};
