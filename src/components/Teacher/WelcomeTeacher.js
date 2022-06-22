import React, { useState, useEffect } from "react";
import Footer from "./../Footer";
import "../../styles/welcomeTeacher.scss";

const WelcomeTeacher = () => {
  const [name, setName] = useState();
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("name"));
    if (items) {
      setName(items);
    }

    const highScores = JSON.parse(localStorage.getItem("highScores"));
    if (highScores) {
      setScores(highScores);
    }
  }, []);

  const capitalizeFirstLowercaseRest = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  return (
    <div className="welcomeTeacher">
      <div className="welcome_container">
        <div className="welcome_message">
          Hello {name}, here are quiz results:
        </div>

        <div class="container">
          <ul class="responsive-table">
            <li class="table-header">
              <div class="col col-1">No.</div>
              <div class="col col-2">Student Name</div>

              <div class="col col-4">Quiz Score</div>
            </li>
            {scores.map((item, i) => (
              <li key={i} class="table-row">
                <div class="col col-1" data-label="No.">
                  {i + 1}
                </div>
                <div class="col col-2" data-label="Student Name">
                  {capitalizeFirstLowercaseRest(item.name.name)}
                </div>
                <div class="col col-3" data-label="Quiz Score">
                  {item.highscore.score}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Footer />

      {/* <div className="">
        {scores.map((item, i) => (
          <p key={i}>
            {item.name.name}:{item.highscore.score}
          </p>
        ))}
      </div> */}
    </div>
  );
};

export default WelcomeTeacher;
