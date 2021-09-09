import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Music() {
  const questions = [
    {
      questionText:
        "What singer has had a Billboard No. 1 hit in each of the last four decades?",
      answerOptions: [
        { answerText: "Michael Jackson", isCorrect: false },
        { answerText: "Mariah Carey", isCorrect: true },
      ],
    },
    {
      questionText: "What was Freddie Mercury‘s real name?",
      answerOptions: [
        { answerText: "Fredrick Bulsara", isCorrect: false },
        { answerText: "Farrokh Bulsara", isCorrect: true },
      ],
    },
    {
      questionText:
        "What pop star wrote songs for Ariana Grande, Miley Cyrus, Britney Spears and Alice Cooper?",
      answerOptions: [
        { answerText: "Kesha", isCorrect: true },
        { answerText: "Katt Perry", isCorrect: false },
      ],
    },
    {
      questionText: " Eminem‘s 8 Mile is named after a road in Detroit?",
      answerOptions: [
        { answerText: "True", isCorrect: true },
        { answerText: "False", isCorrect: false },
      ],
    },
    {
      questionText:
        "Prince introduced his iconic symbol on the cover of which single?",
      answerOptions: [
        { answerText: "1999", isCorrect: true },
        { answerText: "2000", isCorrect: false },
      ],
    },
    {
      questionText: "Where was Tupac Shakur born?",
      answerOptions: [
        { answerText: "New York", isCorrect: true },
        { answerText: "Detroit", isCorrect: false },
      ],
    },
    {
      questionText: "Black Coffee the S.A artist began his career at?",
      answerOptions: [
        { answerText: "1994", isCorrect: true },
        { answerText: "1998", isCorrect: false },
        { answerText: "1995", isCorrect: false },
        { answerText: "1999", isCorrect: false },
      ],
    },
    {
      questionText: "Which of these is the oldest form of African music?",
      answerOptions: [
        { answerText: "Chants ", isCorrect: true },
        { answerText: "Afrobeat", isCorrect: false },
        { answerText: "Jazz ", isCorrect: false },
      ],
    },
    {
      questionText:
        "Two ceremonies that often use traditional African music are _______ and _________.",
      answerOptions: [
        { answerText: "Weddings and harvest celebrations", isCorrect: true },
        { answerText: "Weddings and birthday celebrations", isCorrect: false },
        { answerText: "None of the above", isCorrect: false },
      ],
    },
    {
      questionText: "African music is often heard along with _____.?",
      answerOptions: [
        { answerText: "Rain", isCorrect: false },
        { answerText: "Dancing", isCorrect: true },
        { answerText: "Eating", isCorrect: false },
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
