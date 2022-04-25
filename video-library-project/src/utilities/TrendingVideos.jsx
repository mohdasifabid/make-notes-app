import { Navbar } from "./Navbar";
import { VideoCard } from "./VideoCard";
import "./TrendingVideos.css";
import { useVideo } from "../useVideo";
export const TrendingVideos = () => {
  const { state } = useVideo();
  return (
    <div>
      <Navbar />
      <div className="trending-videos-body">
        <h1 className="trending-videos-heading">Trending Videos</h1>
        <div className="trending-videos-card-container">
          {state.videos.map((item) => {
            return <VideoCard item={item} key={item._id} />;
          })}
        </div>
      </div>
    </div>
  );
};
