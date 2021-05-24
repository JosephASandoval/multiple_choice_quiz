import React, { Component } from "react";
import Question from "./question";
import Answer from "./answer";
import { quizzes } from "../data/quizzes";
import { messages } from "../data/messages";

class Quiz extends Component {
  state = {
    currentQuestion: 0,
    quizOver: false,
    score: 0,
    correctAnswer: "",
    clickedAnswer: "",
  };

  // method that handles click answers
  // updates the score
  // updates the next question
  handleSubmit = (answerOption, currentQuestion) => {
    const { score } = this.state;
    if (quizzes[0].questions[currentQuestion].correctAnswer === answerOption) {
      this.setState({
        score: score + 1,
        correctAnswer: answerOption,
        clickedAnswer: answerOption,
      });
    } else {
      this.setState({
        score: score,
        correctAnswer: "",
        clickedAnswer: answerOption,
      });
    }
  };

  // method that creates an array of answers
  answersArray = (currentQuestion) => {
    return quizzes[0].questions[currentQuestion].incorrectAnswers.concat([
      quizzes[0].questions[currentQuestion].correctAnswer,
    ]);
  };

  // method to move to the next question
  // ends game if no more questions
  handleNext = (currentQuestion) => {
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < quizzes[0].questions.length) {
      this.setState({
        currentQuestion: nextQuestion,
        correctAnswer: "",
        clickedAnswer: "",
      });
    } else {
      this.setState({ quizOver: true });
    }
  };

  render() {
    const { currentQuestion, quizOver, score, correctAnswer, clickedAnswer } =
      this.state;

    return (
      <div className="Content">
        {quizOver ? (
          <div className="finalPage">
            <h1>You have completed the quiz!</h1>
            <p>
              Your score is: {score} of {quizzes[0].questions.length}
            </p>
            <p>Thank you!</p>
          </div>
        ) : (
          <>
            <span>Question {currentQuestion + 1}</span>/
            {quizzes[0].questions.length}
            <Question question={quizzes[0].questions[currentQuestion].text} />
            <Answer
              answerOptions={this.answersArray(currentQuestion)}
              currentQuestion={currentQuestion}
              onSubmit={this.handleSubmit}
              correctAnswer={correctAnswer}
              clickedAnswer={clickedAnswer}
            />
            <button
              className="NextStep"
              disabled={
                clickedAnswer && quizzes[0].questions.length >= currentQuestion
                  ? false
                  : true
              }
              onClick={() => this.handleNext(currentQuestion)}
            >
              Next
            </button>
          </>
        )}
      </div>
    );
  }
}

export default Quiz;
