import React from "react";
import "../../styles/loginTeacher.scss";
import useUsername from "../useUsername";

const LoginTeacher = () => {
  const { username, setUsername, onTeacherSubmit, isActive } = useUsername();

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };
  return (
    <div className="loginTeacher">
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
      <button className="login_leftBtn" onClick={onTeacherSubmit}>
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
  );
};

export default LoginTeacher;
