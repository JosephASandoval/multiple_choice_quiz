// Two Unit Tests: one for when user
import React from "react";
import Quiz from "./components/quiz";
import { quizzes } from "./data/quizzes";
import renderer from "react-test-renderer";

test("when the user chooses the correct answer", () => {
  let component = renderer.create(<Quiz />).getInstance();
  let currentQuiz = 0;
  let currentQuestion = 0;
  let answerOption =
    quizzes[currentQuiz].questions[currentQuestion].correctAnswer;

  component.handleSubmit(answerOption, currentQuestion);

  expect(component.state.correctAnswer).toBe(answerOption);
});

test("when the user chooses the incorrect answer", () => {
  let component = renderer.create(<Quiz />).getInstance();
  let answerOption = "h0";
  let currentQuestion = 0;

  component.handleSubmit(answerOption, currentQuestion);

  expect(component.state.correctAnswer).toBe("");
});
