import { Navbar } from "./Navbar";
import { VideoCard } from "./VideoCard";
import "./WatchLater.css";
export const WatchLater = () => {
  return (
    <div>
      <Navbar />
      <div className="watch-later-videos-body">
        <h1>Watch Later</h1>
        <div className="watch-later-videos-container">
          <div className="watch-later-videos-card-container">
            {/* <VideoCard type="later" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
