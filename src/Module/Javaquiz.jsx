import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const questions = [
  {
    question: 'What does OOP stand for in Java?',
    options: ['Object Oriented Programming', 'Object Oriented Protocol', 'Object Oriented Process', 'Object Oriented Project'],
    correctAnswer: 'Object Oriented Programming'
  },
  {
    question: 'Which keyword is used to define a class in Java?',
    options: ['class', 'Class', 'klass', 'cls'],
    correctAnswer: 'class'
  },
  {
    question: 'What is the default value of byte datatype in Java?',
    options: ['0', '0.0', 'null', 'undefined'],
    correctAnswer: '0'
  }
];

const QuizApp = ({ markAsRead }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(new Array(questions.length).fill(''));
  const [showScore, setShowScore] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleOptionChange = (event) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestion] = event.target.value;
    setSelectedOptions(newSelectedOptions);
  };

  const handleNextQuestion = () => {
    if (selectedOptions[currentQuestion].trim() === '') {
      setErrorMessage('Please select an option before proceeding.');
      return;
    }
    setErrorMessage('');
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const calculateScore = () => {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      if (selectedOptions[i] === questions[i].correctAnswer) {
        score++;
      }
    }
    return score;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOptions.some(option => option.trim() === '')) {
      setErrorMessage('Please select an option for all questions before submitting.');
      return;
    }
    setShowScore(true);
    setSubmitted(true);
    markAsRead();
  };

  return (
    <Container>
      {!showScore ? (
        <div>
          <h4>Question {currentQuestion + 1} of {questions.length}</h4>
          <h5>{questions[currentQuestion].question}</h5>
          {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
          <Form>
            {questions[currentQuestion].options.map((option, index) => (
              <Form.Check
                key={index}
                type="radio"
                id={`option${index}`}
                label={option}
                value={option}
                checked={selectedOptions[currentQuestion] === option}
                onChange={handleOptionChange}
              />
            ))}
          </Form>
          {currentQuestion < questions.length - 1 && (
            <Button onClick={handleNextQuestion}>Next</Button>
          )}
          {currentQuestion === questions.length - 1 && (
            <Button onClick={handleSubmit}>Submit</Button>
          )}
        </div>
      ) : (
        <div>
          <h3>Your Score: {calculateScore()} / {questions.length}</h3>
        </div>
      )}
    </Container>
  );
};

export default QuizApp;
