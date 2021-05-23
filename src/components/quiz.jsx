import React, { Component } from "react";
import { quizzes } from "../data/quizzes";
import { messages } from "../data/messages";

class Quiz extends Component {
  state = {
    currentQuestion: 0,
    quizOver: false,
    score: 0,
  };

  // method that handles click answers
  // updates the score
  // updates the next question
  handleSubmit = (chosenAnswer, currentQuestion) => {
    const { score } = this.state;
    if (quizzes[0].questions[currentQuestion].correctAnswer === chosenAnswer) {
      this.setState({ score: score + 1 });
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizzes[0].questions.length) {
      this.setState({ currentQuestion: nextQuestion });
    } else {
      this.setState({ quizOver: true });
    }
  };

  // method that creates an array of answers
  answersArray = (currentQuestion) => {
    return quizzes[0].questions[currentQuestion].incorrectAnswers.concat([
      quizzes[0].questions[currentQuestion].correctAnswer,
    ]);
  };

  render() {
    const { currentQuestion, quizOver, score } = this.state;

    return (
      <div className="app">
        {quizOver ? (
          <div className="score-section">
            You scored {score} out of {quizzes[0].questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/
                {quizzes[0].questions.length}
              </div>
              <div className="question-text">
                {quizzes[0].questions[currentQuestion].text}
              </div>
            </div>
            <div className="answer-section">
              {this.answersArray(currentQuestion).map((chosenAnswer) => (
                <button
                  onClick={() =>
                    this.handleSubmit(chosenAnswer, currentQuestion)
                  }
                >
                  {chosenAnswer}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Quiz;
