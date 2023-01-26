import "../../src/App.css";
import { useContext } from "react";
import { Quiz } from "./context";
import { ProgressBar } from "./progressBar/progbar";

const Card = () => {
  const {
    heart,
    setLost,
    currentQuestion,
    optionClicked,
    full,
    questions,
    empty,
    shuffle,
    precentage,
    someQuestions
  } = useContext(Quiz);
  return (
    <div className="question-card">
      {/* ----------------lives ramaining ------------------*/}
      <label>lives ramaining: </label>
      <text>
        {heart == 3 ? (
          <text>
            {full}
            {full}
            {full}
          </text>
        ) : heart == 2 ? (
          <text>
            {full}
            {full}
            {empty}
          </text>
        ) : heart == 1 ? (
          <text>
            {full}
            {empty}
            {empty}
          </text>
        ) : heart == 0 ? (
          setLost(true)
        ) : null}
      </text>
      <p>let see what you got...</p>
      {/* Current Question  */}
      <p>
        Question: {currentQuestion + 1} out of {someQuestions.length}
      </p>
      <p className="question-text">{someQuestions[currentQuestion].text}</p>

      {/* List of possible answers  */}
      <ul>
        {shuffle(someQuestions[currentQuestion].options).map((option) => {
          return (
            <li className="Q" key={option.id} onClick={() => optionClicked(option.isCorrect)}>
              {option.text}
            </li>
          );
        })}
      </ul>
      {/* the progress bar at the buttom */}
      <ProgressBar width={300} percent={precentage}></ProgressBar>
    </div>
  );
};

export default Card;
