import "./leftbar.css";
import { Link } from "react-router-dom";

export const Leftbar = () => {
  return (
    <div className="leftbar-container">
      <div className="leftbar">
        <span>
          <i class="fa-brands fa-twitter logo"></i>
        </span>
        <span>
          <i class="fa-solid fa-house icons"></i>
        </span>
        <span>
          <i class="fa-solid fa-magnifying-glass icons"></i>
        </span>
        <Link to="/login">
          <span>
            <i class="fa-solid fa-user icons"></i>
          </span>
        </Link>
        <span>
          <i class="fa-solid fa-feather-pointed create-post"></i>
        </span>
      </div>
    </div>
  );
};
