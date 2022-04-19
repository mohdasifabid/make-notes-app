import { usePostProvider } from "../contextProvider";
import { Leftbar } from "./Leftbar";
import { Navbar } from "./Navbar";
import { Postcard } from "./Postcard";
import { Postcreater } from "./Postcreater";

export const LandingPage = () => {
  const { state } = usePostProvider();

  return (
    <div className="landing-page">
      <div className="landing-page-post-creator-and-card">
        <div>
          <Leftbar />
        </div>
        <div>
          <Navbar />
          <Postcreater />
          {state.postInfo.map((item) => {
            return <Postcard item={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};
