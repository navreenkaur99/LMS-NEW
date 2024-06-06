import React, { useEffect, useState } from 'react';
import Profile from '../Profile';

export default function AssignmentScores() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/assignmentscores");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to ensure the effect runs only once

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Profile/>
      <center>
      <h2 style={{color:"#294573"}}>Assignment Scores</h2>
      {data.map((item, index) => (
        <p key={index}>{item.scores}</p>
      ))}
      </center>
    </div>
  );
}
