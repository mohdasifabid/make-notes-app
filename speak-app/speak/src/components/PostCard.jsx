import axios from "axios";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { usePostProvider } from "../postProvider";
import "./PostCard.css";

export const Postcard = ({ item }) => {
  const { state, dispatch } = usePostProvider();
  const { id } = useParams();
  const [likes, setLikes] = useState(null);

  const getPost = async (id) => {
    const token = localStorage.getItem("encodedToken");
    const response = await axios.get(`/api/posts/${id}`, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 200) {
      dispatch({ type: "GET_POST", payload: response.data.post });
    }
  };
  const deletePostHandler = async (id) => {
    const token = localStorage.getItem("encodedToken");
    const response = await axios.delete(`/api/posts/${id}`, {
      headers: {
        authorization: token,
      },
    });
    if (response.status === 201) {
      const token = localStorage.getItem("encodedToken");
      const getPosts = async () => {
        const response = await axios.get("/api/posts", {
          headers: {
            authorization: token,
          },
        });
        if (response.status === 200) {
          dispatch({ type: "GET_POSTS", payload: response.data.posts });
        }
      };
      getPosts();
    }
  };
  const postLike = async (id) => {
    const token = localStorage.getItem("encodedToken");
    const response = await axios.post(
      `/api/posts/like/${id}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    if (response.status === 201) {
      const getPost = async (id) => {
        const response = await axios.get(`/api/posts/${id}`, {
          headers: {
            authorization: token,
          },
        });
        if (response.status === 200) {
          setLikes(response.data.post.likes.likeCount);
        }
      };
      getPost(id);
    }
  };

  const postDislike = async (id) => {
    const token = localStorage.getItem("encodedToken");
    const response = await axios.post(
      `/api/posts/dislike/${id}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log(response);
  };

  return (
    <div className="postcard-container">
      <div className="avatar-content-container">
        <div className="duck-avatar-badge duck-avatar-badge-m">
          <img
            src="https://picsum.photos/536/354"
            alt=""
            className="duck-avatar-badge-img"
            onClick={() => postDislike(item._id)}
          />
        </div>

        <div className="post-content">
          <p>
            <strong>{`${item.username}${" "}`}</strong>
            {new Date(item.createdAt).getHours()} hours ago
          </p>
          <Link
            to="/post"
            style={{
              cursor: "pointer",
              textDecoration: "none",
              color: "black",
            }}
          >
            <p onClick={() => getPost(item._id)}>{item.content}</p>
          </Link>
        </div>
      </div>
      <div className="user-action-icons-container">
        <span>{/* <i className="fa-regular fa-comment"></i> */}</span>
        <span>{/* <i className="fa-solid fa-retweet"></i> */}</span>
        <span>
          <i
            className="fa-regular fa-heart"
            onClick={() => postLike(item._id)}
          ></i>
          {likes}
        </span>
        <span>
          <i
            className="fa-solid fa-trash"
            onClick={() => deletePostHandler(item._id)}
          ></i>
        </span>
      </div>
    </div>
  );
};
