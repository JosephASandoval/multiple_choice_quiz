import React from "react";

const Next = ({
  count,
  currentQuiz,
  currentQuestion,
  clickedAnswer,
  onNext,
  currentQuizLength,
  numQuizzes,
}) => {
  return (
    <>
      <button
        className="next"
        disabled={
          clickedAnswer && currentQuizLength >= currentQuestion ? false : true
        }
        onClick={() =>
          onNext(
            count,
            currentQuiz,
            currentQuestion,
            currentQuizLength,
            numQuizzes
          )
        }
      >
        Next
      </button>
    </>
  );
};

export default Next;
