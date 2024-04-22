import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import pdf from '/src/assets/HTML.pdf'   
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export default function Pdf() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const goToPreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const goToNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <>
      
      <div >
        <div style={{ marginTop: '10px', marginBottom: '10px' }}>
          <Document

            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
        <div>
          <button onClick={goToPreviousPage}><FaArrowLeft /></button>
          <span style={{ marginLeft: "10px", marginRight: "10px" }}>
            Page {pageNumber} of {numPages}
          </span>
          <button onClick={goToNextPage}><FaArrowRight /></button>
        </div>
      </div>
    </>
  );
}



// import React, { useState } from 'react';
// import { FaCheck } from 'react-icons/fa'; // Import the FaCheck icon from Font Awesome
// import pdf from '../assets/html.pdf'
// const Pdf = () => {
//   const [isRead, setIsRead] = useState(false);

//   const handleMarkAsRead = () => {
//     setIsRead(true);
//     // Perform any additional logic, such as updating a database or state
//   };
 
//   return (
//     <div>
//       <div style={{ width: '100%', height: '800px' }}>
//         <iframe
//           title="PDF Viewer"
//           //src="https://ww2.cs.fsu.edu/~faizian/cgs3066/resources/Lecture3-Intro%20to%20HTML.pdf"
//           src={pdf}
//           width="100%"
//           height="100%"
//         >
//           This browser does not support PDFs. Please download the PDF to view it.
//         </iframe>
//       </div>
//       {!isRead ? (
//         <button
//           onClick={handleMarkAsRead}
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             color: 'blue', // Set button text color to blue
//             fontWeight: 'bold', // Make button text bold
//             border: '2px solid blue', // Add blue border
//             borderRadius: '5px', // Add border radius
//             padding: '5px 10px', // Add padding
//             cursor: 'pointer', // Add pointer cursor
//           }}
//         >
//           <FaCheck style={{ marginRight: '5px' }} /> {/* Render the FaCheck icon */}
//           Mark as Read
//         </button>
//       ) : (
//         <div style={{ display: 'flex', alignItems: 'center', color: 'blue', fontWeight: 'bold' }}>
//           <FaCheck style={{ marginRight: '5px' }} />
//           <FaCheck /> {/* Render the FaCheck icon twice */}
//           <span style={{ marginLeft: '5px' }}>Read</span>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Pdf;

