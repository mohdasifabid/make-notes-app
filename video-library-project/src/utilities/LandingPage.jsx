import { Link } from "react-router-dom";
import { LandscapeResponsiveVisual } from "./LandscapeResponsiveVisual";
import { Navbar } from "./Navbar";
import "./LandingPage.css";

export const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="landing-page-body-container">
        <div className="landing-page-useraction-elemetns"></div>
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
          <Link to="/" className="landing-page-body-links">
            <a class="duck-list-content-type-items" href="">
              <div class="duck-link-avatar-polygon-type">
                <a href="">
                  <i class="fa-regular fa-thumbs-up"></i>
                </a>
              </div>
              Liked
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
