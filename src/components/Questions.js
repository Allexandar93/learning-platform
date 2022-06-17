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
      <p className="questions_questionNumber">
        {" "}
        Question {currentQuestion + 1} / 10
      </p>

      <div className="questions_singleQuestion">
        <h2
          dangerouslySetInnerHTML={{
            __html: questions[currentQuestion].question,
          }}
        ></h2>

        {error && <ErrorMessage>{error}</ErrorMessage>}
        <div className="questions_singleQuestionOptions">
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
      </div>

      <div className="questions_buttons">
        <button className="quitBtn hover" onClick={handleQuit}>
          Quit
        </button>
        <button className="nextBtn hover" onClick={handleNext}>
          Next Question
        </button>
      </div>
    </div>
  );
};

export default Questions;
