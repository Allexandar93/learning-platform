import React from "react";
import "../styles/profileCard.scss";

const ProfileCards = ({ img, content, date }) => {
  return (
    <div className="profileCard">
      <div className="profileCard_img">
        <img src={img} alt="" />
      </div>
      <div className="profileCard_content">
        <p>{content}</p>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default ProfileCards;
