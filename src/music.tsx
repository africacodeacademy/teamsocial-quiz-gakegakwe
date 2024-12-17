import React, { useState } from "react";
import { Link } from "react-router-dom";
import { questions } from "./musicQs";

export default function Countries() {
  const [noQuestion, setNoQuestion] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showQs, setShowQs] = useState(false);
  const [showOptions, setShowOptions] = useState(true);
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [randomQs, setRandomQs] = useState(questions);
  const [results, setReults] = useState("");
  const [meme, setMeme] = useState("");
  const pass = 0.5;
  const username = window.localStorage.getItem("username");

  window.onbeforeunload = (event) => {
    const e = event || window.event;

    e.preventDefault();
    if (e) {
      e.returnValue = "";
    }
    return "";
  };

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

    setShowOptions(false);

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
      setMeme("https://c.tenor.com/jSIE9SltWYUAAAAM/thats-right-seth.gif");
    } else {
      setMeme("	https://c.tenor.com/gMUNdvAGvo8AAAAj/wrong-anthony-field.gif");
    }

    setTotalScore(totalScore + randomQs[currentQuestion].points);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < noQuestion) {
      setCurrentQuestion(nextQuestion);
    } else {
      let perc=score/totalScore;
      if (perc >= pass) {
        setReults("Passed");
        setMeme(
          "https://c.tenor.com/fnXQrBSCagcAAAAj/congrats-congratulations.gif"
        );
      } else {
        setReults("Failed");
        setMeme("https://c.tenor.com/GxgspcAiWKIAAAAS/loser-looser.gif");
      }

      setShowScore(true);
    }
  };

  return (
    <div className="App">
       <header className="App-header">
        <h1> Team Social Quiz App</h1>
      </header>
      <p>Player: {username}</p>
      {showOptions?(
        <div>
      <p>Please select number of Questions to start playing.</p>
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
       </div>
       ):null}

      {showScore ? (
        <div>
          <div className="score-section">
            You {results}, Score: {score}/{totalScore}
          </div>
          <img src={meme} alt=""></img>
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
