import { usePostProvider } from "../postProvider";
import "./PostCard.css";

export const Postcard = ({ item }) => {
  const { state, dispatch } = usePostProvider();
  return (
    <div className="postcard-container">
      <div className="avatar-content-container">
        <div class="duck-avatar-badge duck-avatar-badge-m">
          <img
            src="https://picsum.photos/536/354"
            alt=""
            class="duck-avatar-badge-img"
          />
        </div>

        <div className="post-content">
          <p>
            <strong>User Name</strong> @userid :
            {new Date(item.createdAt).getHours()} hours
          </p>
          <p>{item.post}</p>
        </div>
      </div>
      <div className="user-action-icons-container">
        <span>{/* <i class="fa-regular fa-comment"></i> */}</span>
        <span>{/* <i class="fa-solid fa-retweet"></i> */}</span>
        <span>
          <i
            class="fa-regular fa-heart"
            onClick={() =>
              dispatch({
                type: "LIKES",
                payload: 1,
              })
            }
          ></i>
          {state.likes}
        </span>
        <span>{/* <i class="fa-solid fa-arrow-up-from-bracket"></i> */}</span>
      </div>
    </div>
  );
};
