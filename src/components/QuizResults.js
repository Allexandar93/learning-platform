import React, { useEffect } from "react";

const QuizResults = ({ name, score }) => {
  useEffect(() => {
    if (!name) {
    }
  }, []);

  return (
    <div>
      {name}
      {score}
    </div>
  );
};

export default QuizResults;
