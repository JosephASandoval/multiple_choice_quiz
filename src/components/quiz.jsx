import React, { Component } from "react";
import Title from "./title";
import Question from "./question";
import Answer from "./answer";
import Next from "./next";
import Complete from "./complete";
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

  handleNext = (currentQuestion, quizLength) => {
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < quizLength) {
      this.setState({
        currentQuestion: nextQuestion,
        correctAnswer: "",
        clickedAnswer: "",
      });
    } else {
      this.setState({ quizOver: true });
    }
  };

  createAnswerOptions = (currentQuestion) => {
    let answers = quizzes[0].questions[currentQuestion].incorrectAnswers.concat(
      [quizzes[0].questions[currentQuestion].correctAnswer]
    );
    return this.shuffle(answers);
  };

  // Fisher-Yates shuffle
  shuffle = (array) => {
    let oldElement;
    for (let i = array.length - 1; i > 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1));
      oldElement = array[i];
      array[i] = array[rand];
      array[rand] = oldElement;
    }
    return array;
  };

  render() {
    const { currentQuestion, quizOver, score, correctAnswer, clickedAnswer } =
      this.state;
    const answerOptions = this.createAnswerOptions(currentQuestion);
    let quizLength = quizzes[0].questions.length;

    return (
      <>
        {!quizOver ? (
          <div>
            <Title
              title={quizzes[0].title}
              currentQuestion={currentQuestion}
              quizLength={quizLength}
            />
            <Question question={quizzes[0].questions[currentQuestion].text} />
            <Answer
              answerOptions={answerOptions}
              currentQuestion={currentQuestion}
              onSubmit={this.handleSubmit}
              correctAnswer={correctAnswer}
              clickedAnswer={clickedAnswer}
            />
            <Next
              currentQuestion={currentQuestion}
              clickedAnswer={clickedAnswer}
              onNext={this.handleNext}
              quizLength={quizLength}
            />
          </div>
        ) : (
          <div className="finalPage">
            <Complete score={score} quizLength={quizLength} />
          </div>
        )}
      </>
    );
  }
}

export default Quiz;
