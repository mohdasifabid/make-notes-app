import { Link } from "react-router-dom";
import { useAuthProvider } from "./authProvider";
export const Navbar = () => {
  const { state, dispatch } = useAuthProvider();
  return (
    <div
      class="duck-navbar-container"
      style={{
        borderTop: "none",
        borderBottom: ".125rem solid black",
        padding: ".5rem 0",
      }}
    >
      <Link class="duck-navbar-left-items" to="/">
        <a href="" class="duck-navbar-brand duck-navbar-item">
          MyBrand
        </a>
      </Link>
      <div class="duck-navbar-right-items"></div>
      {state.isLogin ? (
        <button
          style={{
            width: "8rem",
            height: ".75rem",
            margin: ".4rem 1rem ",
            border: "none",
          }}
          class="duck-primary-btn-s duck-primary-btn"
          onClick={() => {
            dispatch({ type: "LOGIN_STATUS", payload: false });
            localStorage.removeItem("encodedToken");
          }}
        >
          Logout
        </button>
      ) : (
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
      )}
    </div>
  );
};
