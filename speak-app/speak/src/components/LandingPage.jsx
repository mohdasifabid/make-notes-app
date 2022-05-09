import { usePostProvider } from "../postProvider";
import { Navbar } from "./Navbar";
import { Postcard } from "./PostCard";
import { PostMaker } from "./PostMaker";

export const LandingPage = () => {
  const { state } = usePostProvider();
  return (
    <div>
      <Navbar />
      <PostMaker />
      {state.postInfo.map((post) => {
        return <Postcard item={post} key={post.id} />;
      })}
    </div>
  );
};
