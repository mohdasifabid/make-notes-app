import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const saveNewUserInfo = async () => {
    const response = await axios.post("/api/auth/signup", {
      name: name,
      email: email,
      password: password,
    });
    console.log(response);
  };
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
        <input
          type="text"
          className="login-name"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
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
        <input
          type="password"
          className="login-password"
          placeholder="confirm password"
          onChange={(e) => setConfirmedPassword(e.target.value)}
        />
        <button className="login-btn" onClick={saveNewUserInfo}>
          Signup
        </button>
        <p>
          Already a user?
          <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};
