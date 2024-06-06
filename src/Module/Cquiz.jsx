import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';

const questions = [
  {
    question: 'What is the output of the following C++ code snippet?\n\n#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 5;\n    cout << "Value of x is: " << x << endl;\n    return 0;\n}',
    options: ['Value of x is: 5', 'Value of x is: 6', 'Value of x is: 0', 'Compilation Error'],
    correctAnswer: 'Value of x is: 5'
  },
  {
    question: 'Which of the following is the correct syntax to declare a pointer in C++?',
    options: ['int* ptr;', 'int *ptr;', 'int ptr;', 'int ptr*;'],
    correctAnswer: 'int* ptr;'
  },
  {
    question: 'What is the output of the following code?\n\n#include <iostream>\nusing namespace std;\n\nint main() {\n    int x = 5, y = 2;\n    cout << x / y << endl;\n    return 0;\n}',
    options: ['2', '2.5', '2.0', 'Compilation Error'],
    correctAnswer: '2'
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
      if (selectedOptions[i].toLowerCase() === questions[i].correctAnswer.toLowerCase()) {
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
            <Button 
            style={{backgroundColor:"#294573",color:"white"}}
            onClick={handleNextQuestion}>Next</Button>
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
