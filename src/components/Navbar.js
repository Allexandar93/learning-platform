import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import icon from "../img/on.png";
import "../styles/navbar.scss";

const Navbar = () => {
  const [name, setName] = useState();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("name"));
    if (items) {
      setName(items);
    }
  }, []);

  return (
    <div className="navbar">
      <div className="navbar_left">
        <Link to={"/student"}>
          <img src={icon} />
        </Link>

        <p className="navbar_leftWelcome">Hello {name}</p>
      </div>
      <div className="navbar_right">
        <Link to={"/student/quiz"}>Quiz</Link>
        <Link to={"/student/profile"}>Profile</Link>
      </div>
    </div>
  );
};

export default Navbar;
