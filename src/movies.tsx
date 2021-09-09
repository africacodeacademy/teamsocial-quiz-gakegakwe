import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Movies() {
  const questions = [
    {
      questionText: "When was Avengers-End Game released?",
      answerOptions: [
        { answerText: "2021", isCorrect: false },
        { answerText: "2018", isCorrect: false },
        { answerText: "2020", isCorrect: false },
        { answerText: "2019", isCorrect: true },
      ],
    },
    {
      questionText:
        "What are the dying words of Charles Foster Kane in Citizen Kane?",
      answerOptions: [
        { answerText: "“Rose lad”", isCorrect: false },
        { answerText: "“Rosebud”", isCorrect: true },
      ],
    },
    {
      questionText: "What’s the name of the skyscraper in Die Hard?",
      answerOptions: [
        { answerText: "Nakatomi Plaza", isCorrect: true },
        { answerText: "Nakatomo Plaza", isCorrect: false },
      ],
    },
    {
      questionText: "In The Matrix, does Neo take the red pill?",
      answerOptions: [
        { answerText: "True", isCorrect: true },
        { answerText: "False", isCorrect: false },
      ],
    },
    {
      questionText:
        "What pop vocal group performs at the wedding in Bridesmaids?",
      answerOptions: [
        { answerText: "Phillip", isCorrect: false },
        { answerText: "Wilson Phillips", isCorrect: true },
        { answerText: "The Phillips", isCorrect: false },
      ],
    },
    {
      questionText: "What is the highest-grossing R-rated movie of all time?",
      answerOptions: [
        { answerText: "Joker", isCorrect: true },
        { answerText: "Django", isCorrect: false },
      ],
    },
    {
      questionText:
        'In "The Lion King," Mufasa dies from being trampled by a pack of:?',
      answerOptions: [
        { answerText: "Wildebeasts", isCorrect: true },
        { answerText: "Buffalos", isCorrect: false },
      ],
    },
    {
      questionText:
        'Finish this line from "Jaws": "You re gonna need a bigger ________."',
      answerOptions: [
        { answerText: "Boat", isCorrect: true },
        { answerText: "Gun", isCorrect: false },
      ],
    },
    {
      questionText:
        "What 1970 movie marked the feature debut of Arnold Schwarzenegger?",
      answerOptions: [
        { answerText: "Hercules in New York ", isCorrect: true },
        { answerText: "Hercules 1970", isCorrect: false },
      ],
    },
    {
      questionText: "Who wrote the screenplay for Rocky?",
      answerOptions: [
        { answerText: "Steven Seagull", isCorrect: false },
        { answerText: "John Wick", isCorrect: false },
        { answerText: "Sylvester Stallone", isCorrect: true },
        { answerText: "Rambo", isCorrect: false },
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
  shuffle(questions);

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
