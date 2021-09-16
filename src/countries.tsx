import { Link } from "react-router-dom";
import { useState } from "react";
import { questions } from "./countryQs";
import MemeGen from "./meme";

export default function Countries() {
  const [noQuestion, setNoQuestion] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showQs, setShowQs] = useState(false);
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [randomQs, setRandomQs] = useState(questions);
  const [results, setReults] = useState("");
  const [meme, setMeme] = useState("");
  const pass = 6;

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

    setNoQuestion(value);
    if (value === 5) {
      shuffle(questions);

      let temp = questions;
      setRandomQs(temp);
      setShowQs(true);
    } else {
      shuffle(questions);

      let temp = questions;
      setRandomQs(temp);
      setShowQs(true);
    }
  }

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + randomQs[currentQuestion].points);
      setMeme("https://c.tenor.com/ZF1HMGkdTkIAAAAC/correctanswer.gif");
    } else {
      setMeme("https://c.tenor.com/Ha6D75HkFywAAAAC/simpsons-wrong-answer.gif");
    }

    setTotalScore(totalScore + randomQs[currentQuestion].points);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < noQuestion) {
      setCurrentQuestion(nextQuestion);
    } else {
      if (score > pass) {
        setReults("Passed");
      } else if (score === pass) {
        setReults("Passed");
      } else {
        setReults("Failed");
      }
      setShowScore(true);
    }
  };
  MemeGen();
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
            You {results}, Score: {score}/{totalScore}
          </div>
          <button>
            <Link to="/questions">Restart</Link>
          </button>
        </div>
      ) : showQs ? (
        <div>
          <>
            <div className="question-section">
              Score: {score}
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{noQuestion}
              </div>
              <div className="question-text">
                {randomQs[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {randomQs[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              ))}
              <img src={meme} alt=""></img>
            </div>
          </>
        </div>
      ) : null}
    </div>
  );
}
