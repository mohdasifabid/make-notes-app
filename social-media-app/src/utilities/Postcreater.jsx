import { useState } from "react";
import { v4 as uuid } from "uuid";
import { usePostProvider } from "../contextProvider";
import "./postcreater.css";

export const Postcreater = () => {
  const { state, dispatch } = usePostProvider();
  const [newPost, setNewPost] = useState("");
  const postDetails = { id: uuid(), createdAt: new Date(), post: newPost };
  return (
    <div>
      <div className="avatar-textarea-container">
        <div class="duck-avatar-badge duck-avatar-badge-l">
          <img
            src="https://picsum.photos/536/354"
            alt=""
            class="duck-avatar-badge-img"
          />
        </div>
        <textarea
          className="textarea"
          placeholder="Whats happening?"
          onChange={(e) => {
            setNewPost(e.target.value);
          }}
        ></textarea>
      </div>
      <div className="bottom-container">
        <button
          class="duck-primary-btn-s duck-primary-btn"
          onClick={() =>
            dispatch({
              type: "POSTS",
              payload: postDetails,
            })
          }
        >
          Tweet
        </button>
      </div>
    </div>
  );
};
