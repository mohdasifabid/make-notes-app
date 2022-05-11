import axios from "axios";
import { useEffect, useState } from "react";
import { usePostProvider } from "../postProvider";
import { Navbar } from "./Navbar";
import { Postcard } from "./PostCard";

export const Post = () => {
  const { state } = usePostProvider();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("encodedToken");
    const getPosts = async () => {
      const response = await axios.get("/api/posts", {
        headers: {
          authorization: token,
        },
      });
      if (response.status === 200) {
        setPosts(response.data.posts);
      }
    };
    getPosts();
  }, []);
  return (
    <div>
      <Navbar />
      <Postcard item={state.post} key={state.post._id} />
    </div>
  );
};
