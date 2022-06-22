import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/quizResults.scss";

const QuizResults = ({ name, score }) => {
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  let history = useNavigate();

  const highScore = {
    name: { name },
    highscore: { score },
  };

  const capitalizeFirstLowercaseRest = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const saveHighScore = () => {
    highScores.unshift(highScore);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    highScores.splice(9);
    history("/student");
  };
  return (
    <div className="quizResults">
      <p className="finished">Quiz Finished</p>
      <p>
        {capitalizeFirstLowercaseRest(name)}, your score is {score} / 10
      </p>

      <div className="quizResults_btns">
        <button className="homeBtn" onClick={saveHighScore}>
          Submit Score
        </button>

        <Link className="homeBtn" to={"/student/quiz"}>
          Retake Quiz
        </Link>

        <Link className="homeBtn" to={"/student"}>
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default QuizResults;
