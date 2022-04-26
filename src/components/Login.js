import React from "react";
import "../styles/login.scss";
import useUsername from "./useUsername";

const Login = () => {
  const { username, setUsername, onSubmit, isActive } = useUsername();

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  return (
    <div className="login">
      <div className="login_left">
        <p>Login to your account</p>
        <p>Login using social media</p>
        <div className="login_icons">
          <a href="#">
            <img
              className="login_icons_img"
              src="https://i.ibb.co/JjkHBtC/circle-facebook.png"
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="login_icons_img"
              src="https://i.ibb.co/zJzDQqM/circle-instagram.png"
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="login_icons_img"
              src="https://i.ibb.co/FBZwx9h/circle-twitter.png"
              alt=""
            />
          </a>
        </div>

        <p className="or">OR</p>

        <form className="login_leftForm">
          <input
            id="username"
            name="username"
            className="login_leftFormInput"
            type="text"
            placeholder="Username"
            value={username}
            onChange={updateUsername}
          />
          <input
            className="login_leftFormInput"
            type="password"
            placeholder="Password"
          />
        </form>
        <button className="login_leftBtn" onClick={onSubmit}>
          LOGIN
        </button>
        <div
          className={
            isActive ? "login_leftNoEnter" : "login_leftNoEnter noDisplay"
          }
        >
          <p>Please enter a username</p>
        </div>
      </div>

      <div className="login_right">
        <p>NEW HERE?</p>
        <p>Sign up to test your knowledge and find new ways of learning</p>
        <button className="login_rightBtn">SIGN UP</button>
      </div>
    </div>
  );
};

export default Login;
