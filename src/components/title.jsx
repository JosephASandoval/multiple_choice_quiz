import React from "react";

const Title = (props) => {
  const { title, currentQuestion, quizLength } = props;

  return (
    <>
      <span>Question {currentQuestion + 1}</span>/{quizLength}
      <h1>{title}</h1>
    </>
  );
};

export default Title;
