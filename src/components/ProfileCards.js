import React from "react";
import "../styles/profileCard.scss";

const ProfileCards = ({ img, content, date, name }) => {
  return (
    <div className="profileCard">
      <div className="profileCard_img">
        <img src={img} alt="" />
        <p>{name}</p>
      </div>
      <div className="profileCard_content">
        <p>{content}</p>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default ProfileCards;
