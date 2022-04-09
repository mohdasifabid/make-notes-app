import "./ListBar.css";
import { Link } from "react-router-dom";
export const ListBar = () => {
  return (
    <div>
      <div className="icons-container">
        <i class="list-bar-list-icon fa-solid fa-list"></i>

        <div className="appear-on-hover">
          <span className="appear-on-hover-content">
            <i class="list-bar-icons fa-solid fa-star"></i>
            Important
          </span>
          <span className="appear-on-hover-content">
            <i class="list-bar-icons fa-solid fa-bell"></i>
            Reminder
          </span>
          <Link to="/archive">
            <span className="appear-on-hover-content">
              <i class="list-bar-icons fa-solid fa-box-archive"></i>
              Archive
            </span>
          </Link>
          <span className="appear-on-hover-content">
            <i class="list-bar-icons fa-solid fa-trash-can"></i>
            Trash
          </span>
        </div>
      </div>
    </div>
  );
};
