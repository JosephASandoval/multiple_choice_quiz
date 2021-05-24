import React from "react";

const Next = (props) => {
  const {
    count,
    currentQuiz,
    currentQuestion,
    clickedAnswer,
    onNext,
    currentQuizLength,
    numQuizzes,
  } = props;

  return (
    <>
      <button
        className="NextStep"
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
