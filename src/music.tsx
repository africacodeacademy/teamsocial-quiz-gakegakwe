import React, { useState } from "react";

export default function Music() {
  const alreadyDone: any[] = [];

  const randomValue = (questions: any) => {
    if (alreadyDone.length === 0) {
      for (var i = 0; i < questions.length; i++) alreadyDone.push(i);
    }

    var randomValueIndex = Math.floor(Math.random() * alreadyDone.length);

    var indexOfItemInMyArray = alreadyDone[randomValueIndex];

    alreadyDone.splice(randomValueIndex, 1);

    // Get the value
    return questions[indexOfItemInMyArray];
  };

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
      ],
    },
    {
      questionText: "Which of these is the oldest form of African music?",
      answerOptions: [
        { answerText: "Chants ", isCorrect: true },
        { answerText: "Afrobeat", isCorrect: false },
      ],
    },
    {
      questionText:
        "Two ceremonies that often use traditional African music are _______ and _________.",
      answerOptions: [
        { answerText: "Weddings and harvest celebrations", isCorrect: true },
        { answerText: "Weddings and birthday celebrations", isCorrect: false },
      ],
    },
    {
      questionText: "African music is often heard along with _____.?",
      answerOptions: [
        { answerText: "Dancing", isCorrect: true },
        { answerText: "Eating", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  randomValue(questions);
  return (
    <div>
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
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
