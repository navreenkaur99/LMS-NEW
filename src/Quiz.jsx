import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

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
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption('');
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption('');
    setScore(0);
    setShowScore(false);
  };

  return (
    <Container>
      <h2>HTML Quiz</h2>
      {showScore ? (
        <div>
          <h3>Your Score: {score} / {questions.length}</h3>
          <Button onClick={handleRestartQuiz}>Restart Quiz</Button>
        </div>
      ) : (
        <div>
          <h4>Question {currentQuestion + 1} of {questions.length}</h4>
          <h5>{questions[currentQuestion].question}</h5>
          <Form>
            {questions[currentQuestion].options.map((option, index) => (
              <Form.Check
                key={index}
                type="radio"
                id={`option${index}`}
                label={option}
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
            ))}
          </Form>
          <Button onClick={handleNextQuestion}>Next</Button>
        </div>
      )}
    </Container>
  );
};


export default Quiz;
