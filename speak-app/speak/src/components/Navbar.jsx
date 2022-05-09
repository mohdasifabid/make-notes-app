import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div class="duck-navbar-container">
      <Link to="/login">
        <a href="" class="duck-navbar-brand duck-navbar-item">
          speak
        </a>
      </Link>
      <a href="" class="duck-navbar-home duck-navbar-item">
        Home
      </a>
    </div>
  );
};
