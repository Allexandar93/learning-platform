import React from "react";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_line"></div>
      <div className="footer_contact">
        <div className="footer_contactLeft">
          <p>&copy; Copyright 2022 Learning Platform</p>
        </div>
        <div className="footer_contactRight">
          <i class="fa-brands fa-facebook-square"></i>
          <i class="fa-brands fa-instagram-square"></i>
          <i class="fa-brands fa-twitter-square"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
