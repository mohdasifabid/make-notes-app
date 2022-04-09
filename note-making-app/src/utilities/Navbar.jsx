import { ListBar } from "./ListBar";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div class="duck-navbar-container">
      <ListBar />
      <div class="duck-navbar-left-items">
        <Link to="/" class="duck-navbar-brand duck-navbar-item">
          <a href="">Make-Notes</a>
        </Link>
      </div>
    </div>
  );
};
