import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div
      class="duck-navbar-container"
      style={{
        borderTop: "none",
        borderBottom: ".125rem solid black",
        padding: ".5rem 0",
      }}
    >
      {/* <div class="duck-navbar-left-items"> */}
      <Link class="duck-navbar-left-items" to="/">
        <a href="" class="duck-navbar-brand duck-navbar-item">
          MyBrand
        </a>
      </Link>
      {/* </div> */}
      <div class="duck-navbar-right-items">
        {/* <a href="" class="duck-navbar-home duck-navbar-item">
          History
        </a>
          <a href="" class="duck-navbar-install duck-navbar-item">
            Trending
          </a> */}
        {/* <a href="" class="duck-navbar-install duck-navbar-item">
          Contact
        </a> */}
      </div>
      <Link to="/login">
        <button
          style={{
            width: "8rem",
            height: ".75rem",
            margin: ".4rem 1rem ",
            border: "none",
          }}
          class="duck-primary-btn-s duck-primary-btn"
        >
          Login
        </button>
      </Link>
    </div>
  );
};
