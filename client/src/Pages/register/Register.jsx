import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("CLICKED");
    if (passwordAgain.current.value !== password.current.value) {
      password.current.setCustomValidity("Passwords don't match!");
      console.log("Passwords Dont match ");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">𝒱𝒶𝓁𝒶𝓃𝓉𝓎</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Valanty.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton">
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                Sign In
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
