import React from "react";

const Answer = (props) => {
  const {
    answerOptions,
    currentQuestion,
    onSubmit,
    correctAnswer,
    clickedAnswer,
  } = props;

  let answers = answerOptions.map((answerOption) => (
    <li
      className={
        correctAnswer === answerOption
          ? "correct"
          : clickedAnswer === answerOption
          ? "incorrect"
          : ""
      }
      onClick={() => onSubmit(answerOption, currentQuestion)}
      key={answerOption}
    >
      {answerOption}
    </li>
  ));

  return (
    <>
      <ul disabled={clickedAnswer ? true : false} className="Answers">
        {answers}
      </ul>
      <div>
        {correctAnswer
          ? "Correct Answer!"
          : clickedAnswer
          ? "Incorrect Answer!"
          : ""}
      </div>
    </>
  );
};

export default Answer;
