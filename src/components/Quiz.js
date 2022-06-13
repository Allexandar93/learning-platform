import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router";
import QuizHome from "./QuizHome";
import QuizTest from "./QuizTest";
import "../styles/quiz.scss";

const Quiz = () => {
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  const [name, setName] = useState();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("name"));
    if (items) {
      setName(items);
    }
  }, []);

  const fetchQuestions = async (category = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }`
    );

    setQuestions(data.results);
  };
  return (
    <div className="quiz">
      <Routes>
        <Route
          path="/"
          element={<QuizHome fetchQuestions={fetchQuestions} />}
        />
        <Route
          path="/test"
          element={
            <QuizTest
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Quiz;
