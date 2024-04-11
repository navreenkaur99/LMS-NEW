import React, { useState } from 'react';

const Assignmentt = () => {
  const questions = [
    " How do we insert a.... comment in HTML?",
    "How do you create nested web pages in HTML??",
    ". How do you add buttons in HTML?",
    "What are the different types of headings in HTML?",
    "How do you insert an image in the HTML webpage?"
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div>
      <h2>Assignment</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <p>{questions[currentQuestionIndex]}</p>
          <input
            type="text"
            value={answers[currentQuestionIndex]}
            onChange={(e) => {
              const newAnswers = [...answers];
              newAnswers[currentQuestionIndex] = e.target.value;
              setAnswers(newAnswers);
            }}
            disabled={submitted}
          />
          {currentQuestionIndex < questions.length - 1 ? (
            <button type="button" onClick={handleNextQuestion} disabled={submitted}>Next</button>
          ) : (
            <button type="submit" disabled={submitted}>Submit</button>
          )}
        </form>
      ) : (
        <div>
          <h3>You submitted successfully!</h3>
        </div>
      )}
    </div>
  );
};

export default Assignmentt;
