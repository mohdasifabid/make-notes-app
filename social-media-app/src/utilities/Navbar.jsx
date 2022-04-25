import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className="logo-container">
        <Link to="/">
          <h3 className="home">Home</h3>
        </Link>
        <span>
          <i class="fa-regular fa-star star"></i>
        </span>
      </div>
    </div>
  );
};
