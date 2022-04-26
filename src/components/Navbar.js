import React, { useState, useEffect } from "react";
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
        <p>Hello {name}</p>
      </div>
    </div>
  );
};

export default Navbar;
