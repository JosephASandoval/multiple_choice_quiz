// Two Unit Tests
import React from "react";
import Quiz from "./components/quiz";
import { quizzes } from "./data/quizzes";
import renderer from "react-test-renderer";

test("when the user chooses the correct answer", () => {
  let component = renderer.create(<Quiz />).getInstance();
  let currentQuiz = 0;
  let currentQuizLength = quizzes[currentQuiz].questions.length;
  let currentQuestion = Math.floor(Math.random() * currentQuizLength);
  let answerOption =
    quizzes[currentQuiz].questions[currentQuestion].correctAnswer;

  component.handleSubmit(answerOption, currentQuestion);

  expect(component.state.correctAnswer).toBe(answerOption);
});

test("when the user chooses the incorrect answer", () => {
  let component = renderer.create(<Quiz />).getInstance();
  let currentQuiz = 0;
  let currentQuestion = 0;
  let incorrectAnswersLength =
    quizzes[currentQuiz].questions[currentQuestion].incorrectAnswers.length;
  let answerOption =
    quizzes[currentQuiz].questions[currentQuestion].incorrectAnswers[
      Math.floor(Math.random() * incorrectAnswersLength)
    ];

  component.handleSubmit(answerOption, currentQuestion);

  expect(component.state.correctAnswer).toBe("");
});
