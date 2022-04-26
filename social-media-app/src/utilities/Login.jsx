import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { Navbar } from "./Navbar"
export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const saveEmailPassword = async () => {
    const response = await axios.post("/api/auth/login", {
      email: email,
      password: password,
    });
    console.log(response);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          margin: "4rem",
        }}
      >
        <h2>Login to Twitter</h2>
        <input
          type="email"
          className="login-email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="login-password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-btn" onClick={saveEmailPassword}>
          Login
        </button>
        <p>
          New user?
          <Link to="/signup">Create account</Link>
        </p>
      </div>
    </div>
  );
};
