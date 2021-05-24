import React from "react";
// import { quizzes } from "../data/quizzes";

const Next = (props) => {
  const { currentQuestion, clickedAnswer, onNext, quizLength } = props;

  return (
    <>
      <button
        className="NextStep"
        disabled={clickedAnswer && quizLength >= currentQuestion ? false : true}
        onClick={() => onNext(currentQuestion, quizLength)}
      >
        Next
      </button>
    </>
  );
};

export default Next;
