import "./LandingPage.css";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
import { LandscapeResponsiveVisual } from "./LandscapeResponsiveVisual";
import { useVideo } from "../useVideo";

export const LandingPage = () => {
  const { state } = useVideo();

  return (
    <div>
      <Navbar />
      <div className="category-container">
        {state.categories.map((cat) => {
          return (
            <Link to="/category" className="category-link">
              <p className="category-box">{cat.categoryName}</p>
            </Link>
          );
        })}
      </div>

      <div className="landing-page-body-container">
        <ol class="duck-list-content-type">
          <Link to="/" className="landing-page-body-links">
            <a class="duck-list-content-type-items" href="">
              <div class="duck-link-avatar-polygon-type">
                <a href="">
                  <i class="fa-solid fa-house-chimney"></i>
                </a>
              </div>
              Home
            </a>
          </Link>
          <Link to="/trending" className="landing-page-body-links">
            <a class="duck-list-content-type-items" href="">
              <div class="duck-link-avatar-polygon-type">
                <a href="">
                  <i class="fa-brands fa-gripfire"></i>
                </a>
              </div>
              Trending
            </a>
          </Link>
          <Link to="/playlist" className="landing-page-body-links">
            <a class="duck-list-content-type-items" href="">
              <div class="duck-link-avatar-polygon-type">
                <a href="">
                  <i class="fa-solid fa-list"></i>
                </a>
              </div>
              Playlist
            </a>
          </Link>
          <Link to="/watch-later" className="landing-page-body-links">
            <a class="duck-list-content-type-items" href="">
              <div class="duck-link-avatar-polygon-type">
                <a href="">
                  <i class="fa-regular fa-clock"></i>
                </a>
              </div>
              Later
            </a>
          </Link>
          <Link to="/history" className="landing-page-body-links">
            <a class="duck-list-content-type-items" href="">
              <div class="duck-link-avatar-polygon-type">
                <a href="">
                  <i class="fa-solid fa-rotate-left"></i>
                </a>
              </div>
              History
            </a>
          </Link>
        </ol>
        <div className="landing-page-media-container">
          <LandscapeResponsiveVisual />
        </div>
      </div>
    </div>
  );
};
