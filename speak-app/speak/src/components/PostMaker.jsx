import { useState } from "react";
import { v4 as uuid } from "uuid";
import { usePostProvider } from "../postProvider";
import "./PostMaker.css";
import axios from "axios";
export const PostMaker = () => {
  const { state, dispatch } = usePostProvider();
  const [newPost, setNewPost] = useState("");

  const postThePost = async () => {
    const token = localStorage.getItem("encodedToken");
    const response = await axios.post(
      "/api/posts",
      {
        postData: {
          content: newPost,
        },
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 201) {
      dispatch({ type: "GET_POSTS", payload: response.data.posts });
    }
  };
  return (
    <div>
      <div className="avatar-textarea-container">
        <div className="duck-avatar-badge duck-avatar-badge-l">
          <img
            src="https://picsum.photos/536/354"
            alt=""
            className="duck-avatar-badge-img"
          />
        </div>
        <textarea
          value={newPost}
          className="textarea"
          placeholder="Whats happening?"
          onChange={(e) => {
            setNewPost(e.target.value);
          }}
        ></textarea>
      </div>
      <div className="bottom-container">
        <button
          className="duck-primary-btn-s duck-primary-btn"
          onClick={() => {
            postThePost();
            setNewPost("");
          }}
        >
          speak
        </button>
      </div>
    </div>
  );
};
