import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import "./TrendingVideos.css";
export const CategorisedVideos = () => {
  return (
    <div>
      <Navbar />
      <div className="trending-videos-body">
        <h1 className="trending-videos-heading">category</h1>
        <div className="trending-videos-card-container">
          <div className="video-card-container">
            <iframe
              className="video-card-media"
              src={`https://youtube.com/embed/sdg`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
            />
            <p className="video-card-title">
              <strong>title</strong>
            </p>
            <p className="video-card-sub-title">creator</p>
            <Link to={`/videos/}`}>
              <button class="video-card-btn duck-primary-btn-s duck-primary-btn">
                Watch Now
              </button>
            </Link>
            <i class="video-card-like-icon fa-solid fa-heart"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
