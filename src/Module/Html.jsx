import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 

const Assignment = ({ markAsRead }) => {
  const questions = [
    " How do we insert a comment in HTML?",
    "How do you create nested web pages in HTML??",
    ". How do you add buttons in HTML?",
    "What are the different types of headings in HTML?",
    "How do you insert an image in the HTML webpage?"
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (answers.some(answer => answer.trim() === '')) {
      setError('Please answer all questions before submitting.');
      return;
    }
    
    setSubmitted(true);
  
    // Call the markAsRead function passed as a prop
    markAsRead();
  };
  const handleNextQuestion = () => {
    // Check if the answer for the current question is empty
    if (answers[currentQuestionIndex].trim() === '') {
      setError('Please answer the current question before proceeding.');
      return; // Don't proceed if the answer is empty
    }

    // Clear error message if the answer is not empty
    setError('');

    // Proceed to the next question
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  return (
    <div>
      <h2>Assignment</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <p>{questions[currentQuestionIndex]}</p>
          <ReactQuill
            theme="snow"
            value={answers[currentQuestionIndex]}
            onChange={(value) => {
              const newAnswers = [...answers];
              newAnswers[currentQuestionIndex] = value;
              setAnswers(newAnswers);
            }}
            disabled={submitted}
          />
          <div>
            {currentQuestionIndex !== 0 && (
              <button
                type="button"
                onClick={handlePreviousQuestion}
                style={{ backgroundColor: "#294573", color: "white" }}
                disabled={submitted}
              >
                Previous
              </button>
            )}
            <button
              type="button"
              onClick={handleNextQuestion}
              style={{ marginTop: "20px", marginLeft: "50px", backgroundColor: "#294573", color: "white" }}
              disabled={currentQuestionIndex === questions.length - 1 || submitted}
            >
              Next
            </button>
          </div>
          {currentQuestionIndex === questions.length - 1 && (
            <button
              type="submit"
              style={{ marginTop: "20px", marginLeft: "50px", backgroundColor: "#294573", color: "white" }}
              disabled={submitted}
            >
              Submit
            </button>
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

export default Assignment;


 // in this two assignment render without going another
//import React, { useState } from 'react';

// const Assignment = () => {
//   const assignments = [
//     {
//       questions: [
//         "How do we insert a comment in HTML?",
//         "How do you create nested web pages in HTML?",
//         "How do you add buttons in HTML?",
//         "What are the different types of headings in HTML?",
//         "How do you insert an image in the HTML webpage?"
//       ],
//       answers: Array(5).fill(''),
//       submitted: false
//     },
//     {
//       questions: [
//         "What is the purpose of CSS?",
//         "What is a CSS selector?",
//         "What is the difference between padding and margin?",
//         "What are pseudo-classes in CSS?",
//         "What is the box model in CSS?"
//       ],
//       answers: Array(5).fill(''),
//       submitted: false
//     }
//   ];

//   const [currentAssignmentIndex, setCurrentAssignmentIndex] = useState(0);

//   const handleAssignmentSubmit = (e) => {
//     e.preventDefault();
//     const updatedAssignments = [...assignments];
//     updatedAssignments[currentAssignmentIndex].submitted = true;
//     setCurrentAssignmentIndex(currentAssignmentIndex + 1);
//   };

//   const handleNextAssignment = () => {
//     setCurrentAssignmentIndex(currentAssignmentIndex + 1);
//   };

//   const handleAnswerChange = (index, e) => {
//     const updatedAssignments = [...assignments];
//     updatedAssignments[currentAssignmentIndex].answers[index] = e.target.value;
//   };

//   return (
//     <div>
//       <h2>Assignment</h2>
//       {currentAssignmentIndex < assignments.length ? (
//         <div>
//           {!assignments[currentAssignmentIndex].submitted ? (
//             <form onSubmit={handleAssignmentSubmit}>
//               {assignments[currentAssignmentIndex].questions.map((question, index) => (
//                 <div key={index}>
//                   <p>{question}</p>
//                   <input
//                     type="text"
//                     value={assignments[currentAssignmentIndex].answers[index]}
//                     onChange={(e) => handleAnswerChange(index, e)}
//                   />
//                 </div>
//               ))}
//               <button type="submit">Submit</button>
//             </form>
//           ) : (
//             <div>
//               <h3>You submitted successfully!</h3>
//               {currentAssignmentIndex < assignments.length - 1 ? (
//                 <button onClick={handleNextAssignment}>Next Assignment</button>
//               ) : (
//                 <p>All assignments completed!</p>
//               )}
//             </div>
//           )}
//         </div>
//       ) : (
//         <p>No more assignments!</p>
//       )}
//     </div>
//   );
// };

// export default Assignment;




// in this code also answer discribed


// import React, { useState } from 'react';
// const Assignment = () => {
//   const questions = [
//     "What is the capital of France?",
//     "Who wrote 'Romeo and Juliet'?",
//     "What is the chemical symbol for water?",
//     "What is the tallest mountain in the world?",
//     "What year did the Titanic sink?"
//   ];

//   const answers = [
//     "Paris", 
//     "William Shakespeare",
//     "H2O",
//     "Mount Everest",
//     "1912"
//   ];

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(''));
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//   };

//   const handleNextQuestion = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       setSubmitted(true);
//     }
//   };

//   const calculateScore = () => {
//     let correctCount = 0;
//     for (let i = 0; i < questions.length; i++) {
//       if (userAnswers[i].toLowerCase() === answers[i].toLowerCase()) {
//         correctCount++;
//       }
//     }
//     return ((correctCount / questions.length) * 100).toFixed(2);
//   };

//   return (
//     <div>
//       <h2>Assignment</h2>
//       <form onSubmit={handleSubmit}>
//         {submitted ? (
//           <div>
//             <h3>Answers:</h3>
//             <ul>
//               {questions.map((question, index) => (
//                 <li key={index}>
//                   <p>{question}</p>
//                   <p>Correct Answer: {answers[index]}</p>
//                   <p>Your Answer: {userAnswers[index]}</p>
//                 </li>
//               ))}
//             </ul>
//             <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', backgroundColor: '#f0f0f0', marginTop: '20px' }}>
//               <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>Score</p>
//               <div style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '5px' }}>{calculateScore()}%</div>
//             </div>
//           </div>
//         ) : (
//           <>
//             <p>{questions[currentQuestionIndex]}</p>
//             <input
//               type="text"
//               value={userAnswers[currentQuestionIndex]}
//               onChange={(e) => {
//                 const newAnswers = [...userAnswers];
//                 newAnswers[currentQuestionIndex] = e.target.value;
//                 setUserAnswers(newAnswers);
//               }}
//               disabled={submitted}
//             />
//             {currentQuestionIndex < questions.length - 1 || submitted ? (
//               <button type="button" onClick={handleNextQuestion} disabled={submitted}>Next</button>
//             ) : (
//               <button type="submit" disabled={submitted}>Submit</button>
//             )}
//           </>
//         )}
//       </form>
//     </div>
//   );
// };

// export default Assignment;


// import React, { useState } from 'react';

// const Assignment = () => {
//   const questions = [
//     "What is the capital of France?",
//     "Who wrote 'Romeo and Juliet'?",
//     "What is the chemical symbol for water?",
//     "What is the tallest mountain in the world?",
//     "What year did the Titanic sink?"
//   ];

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [answers, setAnswers] = useState(Array(questions.length).fill(''));
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can validate the answer or process it as needed
//     setSubmitted(true);
//   };

//   const handleNextQuestion = () => {
//     setCurrentQuestionIndex(currentQuestionIndex + 1);
//     setSubmitted(false); // Reset submission status for the next question
//   };

//   return (
//     <div>
//       <h2>Assignment</h2>
//       <form onSubmit={handleSubmit}>
//         <p>{questions[currentQuestionIndex]}</p>
//         <input
//           type="text"
//           value={answers[currentQuestionIndex]}
//           onChange={(e) => {
//             const newAnswers = [...answers];
//             newAnswers[currentQuestionIndex] = e.target.value;
//             setAnswers(newAnswers);
//           }}
//           disabled={submitted}
//         />
//         {currentQuestionIndex < questions.length - 1 ? (
//           <button type="button" onClick={handleNextQuestion} disabled={submitted}>Next</button>
//         ) : (
//           <button type="submit" disabled={submitted}>Submit</button>
//         )}
//       </form>
//       {submitted && (
//         <div>
//           <h3>uou compled all question</h3>
//           <p>{questions[currentQuestionIndex]}: {answers[currentQuestionIndex]}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Assignment;



// import React from 'react'
// import {
//   CDBSidebar,
//   CDBSidebarContent,
//   CDBSidebarFooter,
//   CDBSidebarHeader,
//   CDBSidebarMenu,
//   CDBSidebarMenuItem,
// } from 'cdbreact';
// import { NavLink } from 'react-router-dom';
// export default function Html() {

//   return (
//     <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
//       <CDBSidebar textColor="#fff" backgroundColor="#333">
//         <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
//           <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
//             Sidebar
//           </a>
//         </CDBSidebarHeader>

//         <CDBSidebarContent className="sidebar-content">
//           <CDBSidebarMenu>
//             <NavLink exact to="/" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/tables" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/profile" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="user">Profile page</CDBSidebarMenuItem>
//             </NavLink>
//             <NavLink exact to="/analytics" activeClassName="activeClicked">
//               <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
//             </NavLink>

//             <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
//               <CDBSidebarMenuItem > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-1-square" viewBox="0 0 16 16">
//   <path d="M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z"/>
//   <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
// </svg>404 page</CDBSidebarMenuItem>
//             </NavLink>
//           </CDBSidebarMenu>
//         </CDBSidebarContent>

//         <CDBSidebarFooter style={{ textAlign: 'center' }}>
//           <div
//             style={{
//               padding: '20px 5px',
//             }}
//           >
//             Sidebar Footer
//           </div>
//         </CDBSidebarFooter>
//       </CDBSidebar>
//     </div>
//   );
// };