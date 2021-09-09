import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Countries() {
  let questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
      ],
    },
    {
      questionText: "Where is Maseru?",
      answerOptions: [
        { answerText: "Botswana", isCorrect: false },
        { answerText: "Lesotho", isCorrect: true },
      ],
    },
    {
      questionText: "Where is Liverpool?",
      answerOptions: [
        { answerText: "England", isCorrect: true },
        { answerText: "Italy", isCorrect: false },
      ],
    },
    {
      questionText: "Francistown is the capital city of Botswana?",
      answerOptions: [
        { answerText: "True", isCorrect: true },
        { answerText: "False", isCorrect: false },
      ],
    },
    {
      questionText: "In what country is the death penalty for crime forbidden?",
      answerOptions: [
        { answerText: "Botswana", isCorrect: false },
        { answerText: "Australia", isCorrect: true },
      ],
    },
    {
      questionText:
        "In what country are the world’s ten coldest cities located?",
      answerOptions: [
        { answerText: "Alska", isCorrect: false },
        { answerText: "America", isCorrect: false },
        { answerText: "Russia", isCorrect: true },
      ],
    },
    {
      questionText: "What kind of government is that of Oman?",
      answerOptions: [
        { answerText: "Sultanate", isCorrect: true },
        { answerText: "Democracy", isCorrect: false },
      ],
    },
    {
      questionText: "What country does not use the dollar?",
      answerOptions: [
        { answerText: "America", isCorrect: false },
        { answerText: "Panama", isCorrect: false },
        { answerText: "India", isCorrect: true },
        { answerText: "Zimbabwe", isCorrect: false },
      ],
    },
    {
      questionText: "What is the world’s second largest country?",
      answerOptions: [
        { answerText: "America", isCorrect: false },
        { answerText: "India", isCorrect: false },
        { answerText: "Canada", isCorrect: true },
        { answerText: "China", isCorrect: false },
      ],
    },
    {
      questionText: "In what country does Arsenal play?",
      answerOptions: [
        { answerText: "Spain", isCorrect: false },
        { answerText: "Scotland", isCorrect: false },
        { answerText: "England", isCorrect: true },
        { answerText: "Scotland", isCorrect: false },
      ],
    },
  ];
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
    } else {
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
