import "./leftbar.css";

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
        <span>
          <i class="fa-solid fa-user icons"></i>
        </span>
        <span>
          <i class="fa-solid fa-feather-pointed create-post"></i>
        </span>
      </div>
    </div>
  );
};
