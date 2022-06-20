import React from "react";
import { Link } from "react-router-dom";
import "../styles/quizResults.scss";

const QuizResults = ({ name, score }) => {
  const capitalizeFirstLowercaseRest = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  return (
    <div className="quizResults">
      <p>
        {capitalizeFirstLowercaseRest(name)}, your score is {score} / 10
      </p>
      <Link className="homeBtn" to={"/student"}>
        Go Home
      </Link>
    </div>
  );
};

export default QuizResults;
