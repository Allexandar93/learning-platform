import React from "react";
import "../styles/welcome.scss";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome_text">
        <p>Welcome</p>
        <p>to the new learning platform</p>
      </div>

      <div className="welcome_login">
        Log in as a{" "}
        <Link className="welcome_loginbtn" to={"/login"}>
          student{" "}
        </Link>{" "}
        or a{" "}
        <Link className="welcome_loginbtn" to={"/login"}>
          {" "}
          teacher{" "}
        </Link>
      </div>

      <div className="welcome_lightbulb"></div>
    </div>
  );
};

export default Welcome;
