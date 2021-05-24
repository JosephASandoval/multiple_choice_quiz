import React from "react";

const Title = (props) => {
  const { title, count, quizLength } = props;

  return (
    <>
      <span>Question {count + 1}</span>/{quizLength}
      <h1>{title}</h1>
    </>
  );
};

export default Title;
