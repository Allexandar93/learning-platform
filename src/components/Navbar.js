import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import icon from "../img/on.png";
import "../styles/navbar.scss";

const Navbar = () => {
  const [name, setName] = useState();
  const [menu, setMenu] = useState(false);
  const ref = useRef();

  const openMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("name"));
    if (items) {
      setName(items);
    }
  }, []);

  useEffect(() => {
    const closeDropdown = (e) => {
      if (e.path[0].tagName !== "BUTTON") {
        setMenu(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);

    return () => {
      document.body.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="navbar_container">
        <div className="navbar_left">
          <Link to={"/student"}>
            <img src={icon} />
          </Link>

          <p className="navbar_leftWelcome">Hello {name}</p>
        </div>
        <div className="navbar_right">
          <Link className="links" to={"/student"}>
            Home
          </Link>
          <Link className="links" to={"/student/quiz"}>
            Quiz
          </Link>
          <Link className="links" to={"/student/profile"}>
            Profile
          </Link>
        </div>
        <div className="navbar_btn">
          <button className="menuBtn" ref={ref} onClick={openMenu}>
            {!menu ? "Menu" : "X"}
          </button>
        </div>
      </div>
      <div className={menu ? "menu active" : "menu"}>
        <Link className="links" to={"/student"}>
          Home
        </Link>
        <Link className="links" to={"/student/quiz"}>
          Quiz
        </Link>
        <Link className="links" to={"/student/profile"}>
          Profile
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
