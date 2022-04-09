import { Navbar } from "./Navbar";
import { VideoCard } from "./VideoCard";
import "./History.css";
import { useVideo } from "../useVideo";
export const History = () => {
  const { state } = useVideo();
  return (
    <div>
      <Navbar />
      <div className="history-videos-body">
        <div className="history-videos-heading-clear-btn-container">
          <h1>History</h1>
          <button class=" history-videos-clear-btn duck-primary-btn-s duck-primary-btn">
            Clear History
          </button>
        </div>
        <div className="history-videos-container">
          <div className="history-videos-card-container">
            <VideoCard />
          </div>
        </div>
      </div>
    </div>
  );
};
