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
        <img src={icon} />
        <p className="navbar_leftWelcome">Hello {name}</p>
      </div>
      <div className="navbar_right">
        <p>Tests</p>
        <Link to={"/student/profile"}>Profile</Link>
      </div>
    </div>
  );
};

export default Navbar;
