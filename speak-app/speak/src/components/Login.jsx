import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthProvider } from "../authProvider";
import { Navbar } from "./Navbar";
export const Login = () => {
  const { state: authState } = useAuthProvider();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginHandler = async () => {
    const response = await axios.post("/api/auth/login", {
      username: username,
      password: password,
    });
    if (response.status === 200) {
      localStorage.setItem("encodedToken", response.data.encodedToken);
      navigate("/");
    }
  };
  useEffect(() => {
    const getUsers = async () => {
      const token = localStorage.getItem("encodedToken");
      const response = await axios.get("/api/users", {
        headers: {
          authorization: token,
        },
      });
    };
    getUsers();
  }, []);
  return (
    <div>
      <Navbar />
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
            type="text"
            className="login-email"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="login-password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login-btn" onClick={loginHandler}>
            Login
          </button>

          <p>
            New user?
            <Link to="/signup">Create account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
