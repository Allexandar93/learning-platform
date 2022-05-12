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

      <div className="profile_info">
        <h3 className="profile_infoAbout">ABOUT</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro eos
          nisi molestias. Quos aliquam modi aliquid magni tempora temporibus
          explicabo sint nostrum excepturi nam ea, veritatis delectus enim minus
          debitis facilis illo asperiores. Optio sequi deleniti, hic sapiente,
          qui maxime nulla, nam quisquam provident aliquid molestiae tempora
          velit excepturi labore.
        </p>
      </div>
    </div>
  );
};

export default Profile;
