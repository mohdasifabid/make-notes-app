import "./Login.css";
import { Navbar } from "./Navbar";

export const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="login-page-body-content">
        <label for="duck-email-input-label input-and-labels">
          <div>Email</div>
          <input
            type="email"
            class="duck-email-input duck-inputs"
            placeholder="enter your email"
          />
        </label>
        <label for="duck-password-input-label input-and-labels">
          <div>Password</div>
          <input
            type="password"
            class="duck-password-input duck-inputs"
            placeholder="enter your password"
          />
        </label>
        <button class="duck-primary-btn-s duck-primary-btn">Login</button>
        <p>
          Not a user?{" "}
          <a href="">
            <strong>create account</strong>
          </a>
        </p>
      </div>
    </div>
  );
};
