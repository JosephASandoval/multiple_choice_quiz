import React from "react";
import ReactDOM from "react-dom";
import Quiz from "./components/quiz";
import "./styles.css";

const App = () => {
  return (
    <div className="app">
      <Quiz />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
