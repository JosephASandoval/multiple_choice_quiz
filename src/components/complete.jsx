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
        You correctly answered <span>{score}</span> out of{" "}
        <span>{quizLength}</span> questions, which is a score of{" "}
        <span>{Math.floor((score / quizLength) * 100)}%</span>
      </p>
      <h2>{getMessage()}</h2>
      <button onClick={onRetake} className="next">
        Retake
      </button>
    </>
  );
};

export default Complete;
