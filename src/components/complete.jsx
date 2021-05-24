import React from "react";
import { getMessage } from "../data/messages";

const Complete = ({ numTimes, score, quizLength, onRetake }) => {
  return (
    <>
      <h1>
        You have completed this quiz the following number of times:{" "}
        <span>{numTimes}</span>
      </h1>
      <p>
        Your score is: {score} of {quizLength}
      </p>
      <p>{getMessage()}</p>
      <button onClick={onRetake} className="next">
        Retake
      </button>
    </>
  );
};

export default Complete;
