import { Navbar } from "./Navbar";

export const Signup = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          margin: "4rem",
        }}
      >
        <h2>Create a new account</h2>
        <input type="text" className="login-email" placeholder="name" />
        <input type="email" className="login-email" placeholder="email" />
        <input
          type="password"
          className="login-password"
          placeholder="password"
        />
        <input
          type="password"
          className="login-password"
          placeholder="confirm password"
        />
        <button className="login-btn">Login</button>
      </div>
    </div>
  );
};
