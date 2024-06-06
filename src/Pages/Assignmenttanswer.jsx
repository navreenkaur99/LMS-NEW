import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar'

const Assignment = ({ markAsRead }) => {
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [scores, setScores] = useState({});
  const [user, setUser] = useState({ name: '', email: '', Number: '' });

  useEffect(() => {
    const fetchAnswers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/answerst');
        setAnswers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching answers:', error);
        setError('An error occurred while fetching the answers.');
        setLoading(false);
      }
    };

    fetchAnswers();

    // Fetch logged-in user details and store them in the state
    const fetchLoggedInUser = async () => {
      try {
        const response = await axios.get("http://localhost:4000/loggedin");
        const { success, name, email, Number } = response.data;
        if (success) {
          setUser({ name, email, Number });
        } else {
          setUser({ name: '', email: '', Number: '' }); // Clear user state if not logged in
        }
      } catch (error) {
        console.error("Error fetching logged-in user:", error);
      }
    };

    fetchLoggedInUser();
  }, []);

  const handleChange = (e, answerIndex) => {
    const { value } = e.target;
    setScores(prevState => ({
      ...prevState,
      [answerIndex]: value
    }));
  };
  const handleSubmit = (e, answerIndex) => {
    e.preventDefault();
    const score = scores[answerIndex]; // Use score instead of scores
    axios.post("http://localhost:4000/api/assignmentscores", {
      scores: score // Use score instead of scores
    })
      .then((res) => {
        console.log(res.data);
        // Clear the input after submission
        setScores(prevState => ({
          ...prevState,
          [answerIndex]: ''
        }));
      })
      .catch(err => {
        console.log(err, "err");
        // Handle error
      });
  };
  

  return (
    <div>
      <AdminNavbar/>
      <h2>Assignment 1 </h2>
      {/* {user.email && (<p>Email: {user.email}</p>)} */}
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p style={{ color: 'red' }}>{error}</p>
      ) : (
        <div>
           <h3>Questions</h3>
          <p> "How do we insert a comment ?",<br></br>
          "How do you create nested web pages ?",<br></br>
          "How do you add buttons ?",<br></br>
          "What are the different types of headings ?",<br></br>
          "How do you insert an image in the  webpage?"<br></br>
      
          </p>
          <h3>Answers:</h3>
          {answers.map((answerObj, index) => (
            <div key={index}>
              {/* <h4>Answer {index + 1}:</h4> */}
              <ul>
                {Object.keys(answerObj.answers).map((key) => (
                  <li key={key}>{answerObj.answers[key]}</li>
                ))}
              </ul>
              <form onSubmit={(e) => handleSubmit(e, index)}>
                <label htmlFor={`dataInput${index}`}>Enter </label>
                <input
                  value={scores[index] || ''}
                  onChange={(e) => handleChange(e, index)}
                  type="text"
                  className="form-control"
                  id={`dataInput${index}`}
                  name={`dataInput${index}`}
                  placeholder="Enter scores with a"
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                 Send
                </button>
              </form>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Assignment;
