import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./../style/quiz.css";

let Quiz = (props) => {
	const questions = props.questions;

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
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

	const reset = () => {
		setCurrentQuestion(0);
		setShowScore(false);
		setScore(0)
	}
	return (
		<div className='quiz'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
					<br/>
					 <Link to={props.exitUrl}><button className="exit">Exit</button></Link>
					 <button className="retry" onClick={reset}>Redo</button>
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
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.text}</button>
						))}
					</div>
				</>

			)}
		</div>
	);
}

export default Quiz;
