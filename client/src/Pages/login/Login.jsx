import "./login.css";
import CircularProgress from "@mui/material/CircularProgress";
import { loginCall } from "../../apiCalls";
import { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  console.log(user);
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
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              className="loginInput"
              required
              ref={password}
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="inherit" size="25px" />
              ) : (
                "Log In"
              )}
            </button>
            {/* <span className="loginForgot">Forgot Password?</span> */}
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="inherit" size="25px" />
              ) : (
                <Link to="/register" style={{ textDecoration: "none" , color : "white"}}>
                  Create a New Account
                </Link>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
