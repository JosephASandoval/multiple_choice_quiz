import React from "react";
import { getMessage } from "../data/messages";

const Complete = (props) => {
  const { score, quizLength } = props;
  return (
    <>
      <h1>You have completed the quiz!</h1>
      <p>
        Your score is: {score} of {quizLength}
      </p>
      <p>{getMessage()}</p>
    </>
  );
};

export default Complete;
