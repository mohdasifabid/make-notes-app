import { ListBar } from "./ListBar";
import { Link } from "react-router-dom";
import { useNote } from "../useNote";

export const Navbar = () => {
  const { state, dispatch } = useNote();

  return (
    <div class="duck-navbar-container">
      <ListBar />

      <Link to="/" class="duck-navbar-brand duck-navbar-item">
        <a href="">Make-Notes</a>
      </Link>

      <div class="duck-navbar-right-items">
        <input
          id="navbarSearchInput"
          className="navbar-search-input"
          placeholder="search note"
          onChange={(e) =>
            dispatch({ type: "SEARCH_NOTE", payload: e.target.value })
          }
        />
      </div>
    </div>
  );
};
