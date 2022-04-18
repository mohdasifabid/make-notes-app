import { Link } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
import { Navbar } from "./Navbar";
import axios from "axios";
import { useAuthProvider } from "./authProvider";

export const Signup = () => {
  const { state, dispatch } = useAuthProvider();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const saveNewUserInfo = async () => {
    const response = await axios.post("/api/auth/signup", {
      name: name,
      email: email,
      password: password,
      confirmedPassword: confirmedPassword,
    });
    if (response.status === 200) {
      dispatch({ type: "SIGN_UP_STATUS", payload: true });
    } else {
      dispatch({ type: "SIGN_UP_STATUS", payload: true });
    }
  };

  return (
    <div>
      <Navbar />
      <h3
        style={{
          textAlign: "center",
          marginBottom: "0rem",
        }}
      >
        Create new account
      </h3>

      <div className="login-page-body-content">
        <div className="login-inputs-btn-link-container">
          <label for="duck-email-input-label input-and-labels">
            <div>Name</div>
            <input
              type="text"
              class="duck-email-input duck-inputs"
              placeholder="enter your name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label for="duck-email-input-label input-and-labels">
            <div>Email</div>
            <input
              type="email"
              class="duck-email-input duck-inputs"
              placeholder="enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label for="duck-password-input-label input-and-labels">
            <div>Password</div>
            <input
              type="password"
              class="duck-password-input duck-inputs"
              placeholder="enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label for="duck-password-input-label input-and-labels">
            <div>Confirm Password</div>
            <input
              type="password"
              class="duck-password-input duck-inputs"
              placeholder="enter your password again"
              onChange={(e) => setConfirmedPassword(e.target.value)}
            />
          </label>
          {state.isSignup ? (
            <Link to="/login">
              <button
                class="duck-primary-btn-s duck-primary-btn"
                onClick={saveNewUserInfo}
              >
                Signup
              </button>
            </Link>
          ) : (
            <button
              class="duck-primary-btn-s duck-primary-btn"
              onClick={saveNewUserInfo}
            >
              Signup
            </button>
          )}
          <p>
            Already a user?
            <Link to="/login">
              <a href="">
                <strong>Login here</strong>
              </a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
