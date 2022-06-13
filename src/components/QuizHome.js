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
      <select onChange={(e) => setCategory(e.target.value)}>
        {Categories.map((option) => (
          <option key={option.category} value={option.value}>
            {option.category}
          </option>
        ))}
      </select>

      <button onClick={handleSubmit}>Start Quiz</button>
    </div>
  );
};

export default QuizHome;
