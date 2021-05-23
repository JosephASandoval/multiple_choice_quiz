import React from "react";
import ReactDOM from "react-dom";
import Quiz from "./components/quiz";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <Quiz />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
