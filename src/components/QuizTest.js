import React, { useState, useEffect } from "react";
import "../styles/quizTest.scss";
import Questions from "./Questions";

const QuizTest = ({ name, score, questions, setQuestions, setScore }) => {
  const [options, setOptions] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currentQuestion]?.correct_answer,
          ...questions[currentQuestion]?.incorrect_answers,
        ])
    );
  }, [currentQuestion, questions]);

  console.log(questions);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quizTest">
      <span>Welcome {name} </span>
      {questions ? (
        <>
          <div className="quizInfo">
            <span>{questions[currentQuestion].category}</span>
            <span>Score : {score}</span>
          </div>
          <Questions
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            questions={questions}
            setQuestions={setQuestions}
            options={options}
            correct={questions[currentQuestion]?.correct_answer}
            score={score}
            setScore={setScore}
          />
        </>
      ) : (
        <>
          {" "}
          <p>Loading</p>{" "}
        </>
      )}
    </div>
  );
};

export default QuizTest;
