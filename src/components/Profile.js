import React, { useState, useEffect } from "react";
import "../styles/profile.scss";

const Profile = () => {
  const [name, setName] = useState();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("name"));
    if (items) {
      setName(items);
    }
  }, []);
  return (
    <div className="profile">
      <div className="profile_cover">
        <img
          className="profile_coverImg"
          src="https://source.unsplash.com/random/500%C3%97500/?portrait"
          alt=""
        />
        <div className="profile_coverInfo">
          <p className="profile_coverName"> {name}</p>
          <p className="profile_coverInfo">San Francisco, CA, United States</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
