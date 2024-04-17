import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa'; // Import the FaCheck icon from Font Awesome
import pdf from '../assets/html.pdf'
const Pdf = () => {
  const [isRead, setIsRead] = useState(false);

  const handleMarkAsRead = () => {
    setIsRead(true);
    // Perform any additional logic, such as updating a database or state
  };
 
  return (
    <div>
      <div style={{ width: '100%', height: '800px' }}>
        <iframe
          title="PDF Viewer"
          //src="https://ww2.cs.fsu.edu/~faizian/cgs3066/resources/Lecture3-Intro%20to%20HTML.pdf"
          src={pdf}
          width="100%"
          height="100%"
        >
          This browser does not support PDFs. Please download the PDF to view it.
        </iframe>
      </div>
      {!isRead ? (
        <button
          onClick={handleMarkAsRead}
          style={{
            display: 'flex',
            alignItems: 'center',
            color: 'blue', // Set button text color to blue
            fontWeight: 'bold', // Make button text bold
            border: '2px solid blue', // Add blue border
            borderRadius: '5px', // Add border radius
            padding: '5px 10px', // Add padding
            cursor: 'pointer', // Add pointer cursor
          }}
        >
          <FaCheck style={{ marginRight: '5px' }} /> {/* Render the FaCheck icon */}
          Mark as Read
        </button>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', color: 'blue', fontWeight: 'bold' }}>
          <FaCheck style={{ marginRight: '5px' }} />
          <FaCheck /> {/* Render the FaCheck icon twice */}
          <span style={{ marginLeft: '5px' }}>Read</span>
        </div>
      )}
    </div>
  );
};

export default Pdf;

