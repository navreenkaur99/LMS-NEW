import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

const questions = [
  {
    question: "Which of the following tags is used for creating an unordered list?",
    options: ["<ul>", "<li>", "<ol>", "<list>"],
    correctAnswer: "<ul>"
  },
  {
    question: "What does the <br> tag do?",
    options: [
      "Creates a break in the text",
      "Defines a single line break",
      "Creates a horizontal line",
      "Defines a paragraph"
    ],
    correctAnswer: "Defines a single line break"
  },
  {
    question: "What is the correct HTML element for inserting a line break?",
    options: ["<break>", "<lb>", "<br>", "<linebreak>"],
    correctAnswer: "<br>"
  },
  {
    question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    options: ["alt", "title", "src", "href"],
    correctAnswer: "alt"
  },
  {
    question: "What is the correct HTML for creating a hyperlink?",
    options: [
      "<a>http://www.example.com</a>",
      "<a href='http://www.example.com'>Click here</a>",
      "<hyperlink>http://www.example.com</hyperlink>",
      "<link>http://www.example.com</link>"
    ],
    correctAnswer: "<a href='http://www.example.com'>Click here</a>"
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    options: ["<style>", "<css>", "<stylesheet>", "<script>"],
    correctAnswer: "<style>"
  },
  {
    question: "Which of the following is a correct HTML comment?",
    options: [
      "<-- This is a comment -->",
      "<!- This is a comment -->",
      "<!-- This is a comment -->",
      "<! This is a comment -->"
    ],
    correctAnswer: "<!-- This is a comment -->"
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    options: ["<ul>", "<li>", "<list>", "<ol>"],
    correctAnswer: "<ul>"
  },
  {
    question: "Which of the following attributes is used to add a link to an email address in HTML?",
    options: ["mailto", "email", "href", "link"],
    correctAnswer: "mailto"
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(''));
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedOptions.some(option => option.trim() === '')) {
      setErrorMessage('Please select an option for all questions before submitting.');
      return;
    }
    // Submit quiz results to backend
    try {
      const score = calculateScore();
      await axios.post('http://localhost:4000/submit', { answers: selectedOptions, score });
      setShowScore(true);
      setSubmitted(true);
      console.log(score)
     
    } catch (error) {
      if (error.response) {
        console.error('Server responded with status code:', error.response.status);
        console.error('Response data:', error.response.data);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Request error:', error.message);
      }
      setErrorMessage('Failed to submit quiz results. Please try again later.');
    }
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
            <Button onClick={handleNextQuestion} style={{backgroundColor:"#294573",color:"white"}}>Next</Button>
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

export default Quiz;


