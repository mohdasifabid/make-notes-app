import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const LoginPage = () => {
  return (
    <div>
      <Navbar />
      <div className="login-page-body">
        <div className="login-page-inputs-btn-container">
          <label htmlFor="">
            <strong>Email</strong>
            <br />
            <input type="text" />
          </label>
          <label htmlFor="">
            <strong>Password</strong>
            <br />
            <input type="text" />
          </label>
          <button>Login</button>
          <p>
            Not a user? <a href="">Create account</a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
