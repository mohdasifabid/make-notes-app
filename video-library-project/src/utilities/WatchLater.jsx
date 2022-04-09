import { useVideo } from "../useVideo";
import { Navbar } from "./Navbar";
import { VideoCard } from "./VideoCard";
import "./WatchLater.css";
export const WatchLater = () => {
  const { state } = useVideo();
  return (
    <div>
      <Navbar />
      <div className="watch-later-videos-body">
        <h1>Watch Later</h1>
        <div className="watch-later-videos-container">
          {state.setWatchLater.map((item) => {
            return (
              <div className="watch-later-videos-card-container">
                <VideoCard item={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
