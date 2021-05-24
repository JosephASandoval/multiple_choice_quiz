import React from "react";

const Complete = (props) => {
  const { score, quizLength } = props;
  return (
    <>
      <h1>You have completed the quiz!</h1>
      <p>
        Your score is: {score} of {quizLength}
      </p>
      <p>Thank you!</p>
    </>
  );
};

export default Complete;
