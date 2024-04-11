import React, { useState } from 'react';

const Assignment = () => {
  const questions = [
    "What is the capital of France?",
    "Who wrote 'Romeo and Juliet'?",
    "What is the chemical symbol for water?",
    "What is the tallest mountain in the world?",
    "What year did the Titanic sink?"
  ];

  const answers = [
    "Paris", 
    "William Shakespeare",
    "H2O",
    "Mount Everest",
    "1912"
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(''));
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setSubmitted(true);
    }
  };

  const calculateScore = () => {
    let correctCount = 0;
    for (let i = 0; i < questions.length; i++) {
      if (userAnswers[i].toLowerCase() === answers[i].toLowerCase()) {
        correctCount++;
      }
    }
    return ((correctCount / questions.length) * 100).toFixed(2);
  };

  return (
    <div>
      <h2>Assignment</h2>
      <form onSubmit={handleSubmit}>
        {submitted ? (
          <div>
            <h3>Answers:</h3>
            <ul>
              {questions.map((question, index) => (
                <li key={index}>
                  <p>{question}</p>
                  <p>Correct Answer: {answers[index]}</p>
                  <p>Your Answer: {userAnswers[index]}</p>
                </li>
              ))}
            </ul>
            <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', backgroundColor: '#f0f0f0', marginTop: '20px' }}>
              <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '5px' }}>Score</p>
              <div style={{ backgroundColor: '#fff', padding: '10px', borderRadius: '5px' }}>{calculateScore()}%</div>
            </div>
          </div>
        ) : (
          <>
            <p>{questions[currentQuestionIndex]}</p>
            <input
              type="text"
              value={userAnswers[currentQuestionIndex]}
              onChange={(e) => {
                const newAnswers = [...userAnswers];
                newAnswers[currentQuestionIndex] = e.target.value;
                setUserAnswers(newAnswers);
              }}
              disabled={submitted}
            />
            {currentQuestionIndex < questions.length - 1 || submitted ? (
              <button type="button" onClick={handleNextQuestion} disabled={submitted}>Next</button>
            ) : (
              <button type="submit" disabled={submitted}>Submit</button>
            )}
          </>
        )}
      </form>
    </div>
  );
};

export default Assignment;


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
//           <h3>Answer:</h3>
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
//               <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
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