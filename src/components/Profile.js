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
        <p className="profile_coverName"> {name}</p>
        <p className="profile_coverInfo">San Francisco, CA, Unated States</p>
      </div>
      <div className="profile_info">
        <div className="profile_infoCard">
          <img
            className="profile_infoCardImg"
            src="https://source.unsplash.com/random/500%C3%97500/?portrait"
            alt=""
          />
          <p>hi</p>
        </div>
      </div>
      {/* <div className="profile_info">
        <div className="profile_infoCard">
          <img
            className="profile_infoCardImg"
            src="https://source.unsplash.com/random/500%C3%97500/?portrait"
            alt=""
          />
        </div>
      </div> */}
    </div>
  );
};

export default Profile;
