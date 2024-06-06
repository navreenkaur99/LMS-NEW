import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css'; // Import styles
import axios from 'axios'; // Import Axios for making HTTP requests

const Assignment = ({ markAsRead }) => {
  const questions = [
    "How do you reverse a string ?",
    "How do you reverse an array?",
    "How do you add buttons ?",
   " How would you swap two numbers without using a third variable?"
 
     ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setAnswers(prevAnswers => {
      const newAnswers = [...prevAnswers];
      newAnswers[currentQuestionIndex] = value;
      return newAnswers;
    });
  };

  const handleNextQuestion = () => {
    if (answers[currentQuestionIndex].trim() === '') {
      setError('Please answer the current question before proceeding.');
      return;
    }

    setError('');
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (answers[currentQuestionIndex].trim() === '') {
      setError('Please answer the current question before submitting.');
      return;
    }

    try {
      await axios.post('http://localhost:4000/submit-assignment', { answers });
      if (currentQuestionIndex === questions.length - 1) {
        setSubmitted(true);
        markAsRead();
      } else {
        handleNextQuestion();
      }
    } catch (error) {
      console.error('Error submitting assignment:', error);
      setError('An error occurred while submitting the assignment.');
    }
  };

  return (
    <div>
      <h2>Assignment</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <p>{questions[currentQuestionIndex]}</p>
          <textarea
            value={answers[currentQuestionIndex]}
            onChange={handleChange}
            style={{ width: '100%', height: '100px' }}
          />
          <div>
            <button
              type="button"
              onClick={handlePreviousQuestion}
              style={{ marginRight: "10px", backgroundColor: "#294573", color: "white" }}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </button>
            <button
              type="button"
              onClick={handleNextQuestion}
              style={{ marginRight: "10px", backgroundColor: "#294573", color: "white" }}
              disabled={currentQuestionIndex === questions.length - 1}
            >
              Next
            </button>
            <button
              type="submit"
              style={{ backgroundColor: "#294573", color: "white" }}
            >
              {currentQuestionIndex === questions.length - 1 ? 'Submit' : ' Submit'}
            </button>
          </div>
        </form>
      ) : (
        <div>
          <h3>You submitted successfully!</h3>
        </div>
      )}
    </div>
  );
};

export default Assignment;

// import React, { useState } from 'react';
// import 'react-quill/dist/quill.snow.css'; // Import styles

// const Assignment = ({ markAsRead }) => {
//   const questions = [
//     "How do we insert a comment in HTML?",
//     "How do you create nested web pages in HTML?",
//     "How do you add buttons in HTML?",
//     "What are the different types of headings in HTML?",
//     "How do you insert an image in the HTML webpage?"
//   ];

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [answers, setAnswers] = useState(Array(questions.length).fill(''));
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     const value = e.target.value;
//     setAnswers(prevAnswers => {
//       const newAnswers = [...prevAnswers];
//       newAnswers[currentQuestionIndex] = value;
//       return newAnswers;
//     });
//   };

//   const handleNextQuestion = () => {
//     if (answers[currentQuestionIndex].trim() === '') {
//       setError('Please answer the current question before proceeding.');
//       return;
//     }

//     setError('');
//     setCurrentQuestionIndex(currentQuestionIndex + 1);
//   };

//   const handlePreviousQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (answers[currentQuestionIndex].trim() === '') {
//       setError('Please answer the current question before submitting.');
//       return;
//     }

//     if (currentQuestionIndex === questions.length - 1) {
//       setSubmitted(true);
//       markAsRead();
//     } else {
//       handleNextQuestion();
//     }
//   };

//   return (
//     <div>
//       <h2>Assignment</h2>
//       {!submitted ? (
//         <form onSubmit={handleSubmit}>
//           {error && <p style={{ color: 'red' }}>{error}</p>}
//           <p>{questions[currentQuestionIndex]}</p>
//           <textarea
//             value={answers[currentQuestionIndex]}
//             onChange={handleChange}
//             style={{ width: '100%', height: '100px' }}
//           />
//           <div>
//             <button
//               type="button"
//               onClick={handlePreviousQuestion}
//               style={{ marginRight: "10px", backgroundColor: "#294573", color: "white" }}
//               disabled={currentQuestionIndex === 0}
//             >
//               Previous
//             </button>
//             <button
//               type="button"
//               onClick={handleNextQuestion}
//               style={{ marginRight: "10px", backgroundColor: "#294573", color: "white" }}
//               disabled={currentQuestionIndex === questions.length - 1}
//             >
//               Next
//             </button>
//             <button
//               type="submit"
//               style={{ backgroundColor: "#294573", color: "white" }}
//             >
//               {currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Skip & Submit'}
//             </button>
//           </div>
//         </form>
//       ) : (
//         <div>
//           <h3>You submitted successfully!</h3>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Assignment;



// import React, { useState } from 'react';
// import 'react-quill/dist/quill.snow.css'; // Import styles

// const Assignment = ({ markAsRead }) => {
//   const questions = [
//     "How do we insert a comment in HTML?",
//     "How do you create nested web pages in HTML?",
//     "How do you add buttons in HTML?",
//     "What are the different types of headings in HTML?",
//     "How do you insert an image in the HTML webpage?"
//   ];

//   const [answers, setAnswers] = useState(Array(questions.length).fill(''));
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState('');

//   const handleChange = (index, value) => {
//     const newAnswers = [...answers];
//     newAnswers[index] = value;
//     setAnswers(newAnswers);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (answers.some(answer => answer.trim() === '')) {
//       setError('Please answer all questions before submitting.');
//       return;
//     }
    
//     setSubmitted(true);
//     markAsRead();
//   };

//   return (
//     <div>
//       <h2>Assignment</h2>
//       {!submitted ? (
//         <form onSubmit={handleSubmit}>
//           {error && <p style={{ color: 'red' }}>{error}</p>}
//           {questions.map((question, index) => (
//             <div key={index}>
//               <p>{question}</p>
//               <textarea
//                 value={answers[index]}
//                 onChange={(e) => handleChange(index, e.target.value)}
//                 style={{ width: '100%', height: '100px' }}
//               />
//             </div>
//           ))}
//           <button type="submit">Submit</button>
//         </form>
//       ) : (
//         <div>
//           <h3>You submitted successfully!</h3>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Assignment;




// import React, { useState } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css'; // Import styles

// const Assignment = ({ markAsRead }) => {
//   const questions = [
//     "How do we insert a comment in HTML?",
//     "How do you create nested web pages in HTML?",
//     "How do you add buttons in HTML?",
//     "What are the different types of headings in HTML?",
//     "How do you insert an image in the HTML webpage?"
//   ];

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [answers, setAnswers] = useState(Array(questions.length).fill(''));
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState('');
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (answers.some(answer => answer.trim() === '')) {
//       setError('Please answer all questions before submitting.');
//       return;
//     }
    
//     setSubmitted(true);
  
//     // Call the markAsRead function passed as a prop
//     markAsRead();
//   };
  

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   if (selectedOptions.some(option => option.trim() === '')) {
//   //     setErrorMessage('Please select an option for all questions before submitting.');
//   //     return;
//   //   }
    
//   //   setSubmitted(true);

//   //   // Call the markAsRead function passed as a prop
//   //   markAsRead();
//   // };

//   const handleNextQuestion = () => {
//     // Check if the answer for the current question is empty
//     if (answers[currentQuestionIndex].trim() === '') {
//       setError('Please answer the current question before proceeding.');
//       return; // Don't proceed if the answer is empty
//     }

//     // Clear error message if the answer is not empty
//     setError('');

//     // Proceed to the next question
//     setCurrentQuestionIndex(currentQuestionIndex + 1);
//   };

//   const handlePreviousQuestion = () => {
//     setCurrentQuestionIndex(currentQuestionIndex - 1);
//   };

//   return (
//     <div>
//       <h2>Assignment</h2>
//       {!submitted ? (
//         <form onSubmit={handleSubmit}>
//           {error && <p style={{ color: 'red' }}>{error}</p>}
//           <p>{questions[currentQuestionIndex]}</p>
//           <ReactQuill
//             theme="snow"
//             value={answers[currentQuestionIndex]}
//             onChange={(value) => {
//               const newAnswers = [...answers];
//               newAnswers[currentQuestionIndex] = value;
//               setAnswers(newAnswers);
//             }}
//             disabled={submitted}
//           />
//           <div>
//             {currentQuestionIndex !== 0 && (
//               <button
//                 type="button"
//                 onClick={handlePreviousQuestion}
//                 style={{ backgroundColor: "#294573", color: "white" }}
//                 disabled={submitted}
//               >
//                 Previous
//               </button>
//             )}
//             <button
//               type="button"
//               onClick={handleNextQuestion}
//               style={{ marginTop: "20px", marginLeft: "50px", backgroundColor: "#294573", color: "white" }}
//               disabled={currentQuestionIndex === questions.length - 1 || submitted}
//             >
//               Next
//             </button>
//           </div>
//           {currentQuestionIndex === questions.length - 1 && (
//             <button
//               type="submit"
//               style={{ marginTop: "20px", marginLeft: "50px", backgroundColor: "#294573", color: "white" }}
//               disabled={submitted}
//             >
//               Submit 
//             </button>
//           )}
//         </form>
//       ) : (
//         <div>
//           <h3>You submitted successfully!</h3>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Assignment;
