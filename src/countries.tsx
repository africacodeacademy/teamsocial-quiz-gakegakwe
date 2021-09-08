import React, { useState } from 'react';

export default function Countries() {
   
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
			
			],
		},
		{
			questionText: 'Where is Maseru?',
			answerOptions: [
				{ answerText: 'Botswana', isCorrect: false },
				{ answerText: 'Lesotho', isCorrect: true },
				
			],
		},
		{
			questionText: 'Where is Liverpool?',
			answerOptions: [
				{ answerText: 'England', isCorrect: true },
				{ answerText: 'Italy', isCorrect: false },
			
			],
		},
		{
			questionText: 'Francistown is the capital city of Botswana?',
			answerOptions: [
				{ answerText: 'True', isCorrect: true  },
				{ answerText: 'False', isCorrect:false  },
			],
		},
        {
			questionText: 'In what country is the death penalty for crime forbidden?',
			answerOptions: [
				{ answerText: 'Botswana', isCorrect:false  },
                { answerText: 'Australia', isCorrect: true  },
				
			],
		},
        {
			questionText: 'In what country are the world’s ten coldest cities located?',
			answerOptions: [
				{ answerText: 'America', isCorrect:false  },
                { answerText: 'Russia', isCorrect: true  },
				
			],
		},
        {
			questionText: 'What kind of government is that of Oman?',
			answerOptions: [
				{ answerText: 'Sultanate', isCorrect: true  },
				{ answerText: 'Democracy', isCorrect:false  },
			],
		},
        {
			questionText: 'What country does not use the dollar?',
			answerOptions: [
				{ answerText: 'India', isCorrect: true  },
				{ answerText: 'Zimbabwe', isCorrect:false  },
			],
		},
        {
			questionText: 'What is the world’s second largest country?',
			answerOptions: [
				{ answerText: 'Canada', isCorrect: true  },
				{ answerText: 'China', isCorrect:false  },
			],
		},
        {
			questionText: 'In what country does Arsenal play?',
			answerOptions: [
				{ answerText: 'England', isCorrect: true  },
				{ answerText: 'Scotland', isCorrect:false  },
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
	return (
        <div>
       
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
