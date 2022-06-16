import React, { useState } from "react";
import quizImg from "../img/quiz.svg";
import Categories from "../data/Categories";
import { useNavigate } from "react-router-dom";
import "../styles/quizHome.scss";

const QuizHome = ({ fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const history = useNavigate();

  const handleSubmit = () => {
    fetchQuestions(category);
    history("/student/quiz/test");
  };

  return (
    <div className="quizHome">
      <img src={quizImg} alt="" />
      <p>Choose category</p>

      <div className="dropdown">
        <select
          className="dropdown-select"
          onChange={(e) => setCategory(e.target.value)}
        >
          {Categories.map((option) => (
            <option key={option.category} value={option.value}>
              {option.category}
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleSubmit} className="quizHome_btn">
        Start Quiz
      </button>
    </div>
  );
};

export default QuizHome;
