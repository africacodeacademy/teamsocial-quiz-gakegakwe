import React, { useState } from "react";
import { Link } from "react-router-dom";
import { questions } from "./countryQs";

export default function Countries() {
  const [question, setQuestion] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [randomQs, setRandomQs] = useState(questions);

  function shuffle(array: any[]) {
    var num = array.length,
      temp,
      index;
    while (num > 0) {
      index = Math.floor(Math.random() * num);
      num--;

      temp = array[num];
      array[num] = array[index];
      array[index] = temp;
    }
    return array;
  }

  function handleChange(event: any) {
    const { value } = event.target;

    setQuestion(value);
    if (value == 5) {

      shuffle(questions);

      questions.splice(5, 5);
      let temp = questions;
      setRandomQs(temp);
      console.log(randomQs);
    }
     else {
      shuffle(questions);
      questions.splice(7, 3);
      let temp = questions;
      setRandomQs(temp);
      console.log(randomQs);
    }
  }

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < question) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
console.log("A");
  return (
    <div>
      <div className="radio">
        <input
          id="5Qs"
          value={5}
          name="platform"
          type="radio"
          onChange={handleChange}
        />
        5 Questions
        <input
          id="7Qs"
          value={7}
          name="platform"
          type="radio"
          onChange={handleChange}
        />
        7 Questions
      </div>

      {showScore ? (
        <div>
          <div className="score-section">
            You scored {score} out of {question}
          </div>
          <button>
            <Link to="/questions">Restart</Link>
          </button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{question}
            </div>
            <div className="question-text">
              {randomQs[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {randomQs[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
