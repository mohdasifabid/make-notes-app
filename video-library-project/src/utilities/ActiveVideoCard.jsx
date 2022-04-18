import { useVideo } from "../useVideo";
import "./ActiveVideoCard.css";

export const ActiveVideoCard = ({ videoToPlay }) => {
  const { state, dispatch } = useVideo();
  const { setLikes, setDislikes, watchNow } = state;
  return (
    <div className="active-video-card-container">
      <p className="active-video-card-title">
        <strong>{videoToPlay.title}</strong>
      </p>
      <p className="active-video-card-sub-title">{videoToPlay.creator}</p>

      <iframe
        className="active-video-card-media"
        src={`https://youtube.com/embed/${videoToPlay.video}`}
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
              onClick={() => dispatch({ type: "SET_LIKES", payload: 1 })}
            ></i>
            {setLikes}
          </span>
          <span className="active-video-card-icons-and-tags">
            <i
              class="fa-solid fa-thumbs-down"
              onClick={() => dispatch({ type: "SET_DISLIKES", payload: 1 })}
            ></i>{" "}
            {setDislikes}
          </span>
          <span className="active-video-card-icons-and-tags">
            <i
              class="fa-solid fa-heart"
              onClick={() =>
                dispatch({ type: "WATCH_LATER", payload: state.watchNow })
              }
            ></i>
            Watch Later
          </span>
          <span className="active-video-card-icons-and-tags">
            <i
              class="fa-solid fa-list"
              onClick={() =>
                dispatch({ type: "ADD_TO_PLAYLIST", payload: state.watchNow })
              }
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
          {videoToPlay.description}
        </p>
      </div>
    </div>
  );
};
