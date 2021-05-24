import React from "react";
import { getMessage } from "../data/messages";

const Complete = ({ score, quizLength, onReset }) => {
  return (
    <>
      <h1>You have completed the quiz!</h1>
      <p>
        Your score is: {score} of {quizLength}
      </p>
      <p>{getMessage()}</p>
      <button onClick={onReset} className="next">
        Reset
      </button>
    </>
  );
};

export default Complete;
