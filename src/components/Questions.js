import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import { useNavigate } from "react-router-dom";
import "../styles/questions.scss";

const Questions = ({
  currentQuestion,
  setCurrentQuestion,
  questions,
  options,
  score,
  setScore,
  correct,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const history = useNavigate();

  const handleSelect = (i) => {
    if (selected === i && selected === correct) {
      return "select";
    } else if (selected === i && selected !== correct) {
      return "wrong";
    } else if (i === correct) {
      return "select";
    }
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const handleQuit = () => {
    history("/student/quiz");
  };

  const handleNext = () => {
    if (currentQuestion > 8) {
      history("/student/quiz/result");
    } else if (selected) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected();
    } else {
      setError("Please select an option");
    }
  };

  return (
    <div className="questions">
      <h1> Question {currentQuestion + 1}</h1>

      <div className="questions_singleQuestion">
        <h2>{questions[currentQuestion].question}</h2>

        <div className="questions_singleQuestionOptions">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                onClick={() => {
                  handleCheck(i);
                }}
                className={`singleOption ${selected && handleSelect(i)}`}
                key={i}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>

        <div className="questions_buttons">
          <button onClick={handleQuit}>Quit</button>
          <button onClick={handleNext}>Next Question</button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
