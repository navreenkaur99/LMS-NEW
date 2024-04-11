import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa'; // Import the FaCheck icon from Font Awesome

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
          src="https://ww2.cs.fsu.edu/~faizian/cgs3066/resources/Lecture3-Intro%20to%20HTML.pdf"
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


// import React, { useState } from 'react';
// import { Container, Button, Spinner, Alert } from 'react-bootstrap'; // Import Spinner and Alert for loading and error handling
// import { Document, Page, pdfjs } from 'react-pdf'; // Import pdfjs to set workerSrc

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


// const Pdf = () => {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);
//   const [loading, setLoading] = useState(true); // State for loading indicator
//   const [error, setError] = useState(null); // State for error handling

//   const onDocumentLoadSuccess = ({ numPages }) => {
//     setNumPages(numPages);
//     setLoading(false); // Set loading to false when the document is loaded
//   };

//   const onError = (error) => {
//     setError(error); // Set error state if there's an error loading the document
//     setLoading(false); // Set loading to false in case of error
//   };

//   return (
//     <Container>
//       <div>
//         <Document
//           file="https://ww2.cs.fsu.edu/~faizian/cgs3066/resources/Lecture3-Intro%20to%20HTML.pdf"
//           onLoadSuccess={onDocumentLoadSuccess}
//           onLoadError={onError} // Call onError in case of error loading the document
//         >
//           <Page pageNumber={pageNumber} />
//         </Document>
//         {loading && <Spinner animation="border" />} {/* Show loading spinner when loading */}
//         {error && <Alert variant="danger">{error.message}</Alert>} {/* Show error message if there's an error */}
//         {!loading && !error && (
//           <div>
//             <p>
//               Page {pageNumber} of {numPages}
//             </p>
//             <Button
//               variant="primary"
//               onClick={() => setPageNumber(pageNumber - 1)}
//               disabled={pageNumber <= 1}
//             >
//               Previous
//             </Button>
//             <Button
//               variant="primary"
//               onClick={() => setPageNumber(pageNumber + 1)}
//               disabled={pageNumber >= numPages}
//             >
//               Next
//             </Button>
//           </div>
//         )}
//       </div>
//     </Container>
//   );
// };

// export default Pdf;


// import React, { useState } from "react";
// import Card from "react-bootstrap/Card";
// import { Row, Col, Container, Form } from "react-bootstrap";
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import StarRatingApp from "./StarRatingApp";

// export default function Ui() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [favorites, setFavorites] = useState([]);

//   const courses = [
//     { 
//         id: 1,
//         name: "HTML Course",
//         image: "https://example.com/html-course-image.jpg",
//         link: "/Module"
//     },
//     { 
//         id: 2,
//         name: "CSS Course",
//         image: "https://example.com/css-course-image.jpg",
//         link: "/Module"
//     },
//     { 
//         id: 3,
//         name: "JavaScript Course",
//         image: "https://example.com/js-course-image.jpg",
//         link: "/Module"
//     }
//   ];

//   const toggleFavorite = (courseId) => {
//     if (favorites.includes(courseId)) {
//       setFavorites(favorites.filter(id => id !== courseId));
//     } else {
//       setFavorites([...favorites, courseId]);
//     }
//   };

//   const isFavorite = (courseId) => {
//     return favorites.includes(courseId);
//   };

//   const filterCourses = (courseName) => {
//     return courseName.toLowerCase().includes(searchQuery.toLowerCase());
//   };

//   return (
//     <>
//       <div style={{backgroundColor:"#edfafa"}}>
//         <div data-aos="fade-right">   
//           <h4>Dashboard</h4>
//           <Container>
//             <Row className="justify-content-md-center">
//               <Col xs={12} md={6}>
//                 <Form.Control
//                   type="text"
//                   placeholder="Search courses..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   style={{ marginBottom: "10px" }}
//                 />
//               </Col>
//             </Row>
//           </Container>
//           <Row> 
//             {courses.map((course) => {
//               if (filterCourses(course.name)) {
//                 return (
//                   <Col key={course.id} style={{ marginBottom: "20px" }}>
//                     <Card style={{ width: '18rem' }}>
//                       <Link to={course.link}>
//                         <Card.Img style={{ height: '12rem' }} variant="top" src={course.image} />
//                       </Link>
//                       <div onClick={() => toggleFavorite(course.id)} style={{ cursor: "pointer", position: "absolute", top: "10px", right: "10px" }}>
//                         <FontAwesomeIcon icon={faHeart} size="2x" color={isFavorite(course.id) ? "red" : "gray"} />
//                       </div>
//                       <Card.Body>
//                         <h6>{course.name}</h6>
//                         <StarRatingApp />
//                       </Card.Body>
//                     </Card>
//                   </Col>
//                 );
//               }
//               return null;
//             })}
//           </Row>
//         </div>
//       </div>
//     </>
//   );
// }


// import React from 'react';
// import { Table, DropdownButton, Dropdown } from 'react-bootstrap';

// function Pdf() {
//   return (
//     <Table striped bordered hover>
//       <thead>
//         <tr>
//           <th>#</th>
//            </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>1</td>
//           <td>John Doe</td>
//           <td>
//             <DropdownButton id="dropdown-basic-button" title="Menu">
//               <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
//               <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
//               <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
//             </DropdownButton>
//           </td>
//         </tr>
//         <tr>
//           <td>2</td>
//           <td>Jane Smith</td>
//           <td>
//             <DropdownButton id="dropdown-basic-button" title="Menu">
//               <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
//               <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
//               <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
//             </DropdownButton>
//           </td>
//         </tr>
//         {/* Add more rows as needed */}
//       </tbody>
//     </Table>
//   );
// }

// export default Pdf;

// import React from 'react';
// import { Dropdown, DropdownButton } from 'react-bootstrap';

// function Pdf() {
//   return (
//     <DropdownButton id="dropdown-basic-button" title="Menu">
//       <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
//       <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
//       <Dropdown.Item href="#/action-3">Action 3</Dropdown.Item>
//     </DropdownButton>
//   );
// }

// export default Pdf;


// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';

// const Pdf = () => {
//   return (
//     <div>
//       <Navbar bg="light" expand="lg">
//         <Navbar.Brand href="#home">My Restaurant</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mr-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link1">Menu Item 1</Nav.Link>
//             <Nav.Link href="#link2">Menu Item 2</Nav.Link>
//             <Nav.Link href="#link3">Menu Item 3</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//       <div className="container">
//         {/* Your main content here */}
//         <h1>Welcome to My Restaurant</h1>
//         <p>This is where you can add your main content.</p>
//       </div>
//     </div>
//   );
// };

// ReactDOM.render(<Pdf/>, document.getElementById('root'));

// import React, { useState } from "react";
// import { Row, Col, Card, NavLink, CardBody } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import Profile from "./Profile";
// import StarRatingApp from "./StarRatingApp";
// import style from "./CSS/Ui.module.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function Ui() {
//   const [searchQuery, setSearchQuery] = useState("");

//   const courses = [
//     { name: "HTML Course", image: "html-image-url" },
//     { name: "CSS Course", image: "css-image-url" },
//     { name: "JavaScript Course", image: "javascript-image-url" },
//     // Add more courses as needed
//   ];

//   // Filter function to match search query with course names
//   const filterCourses = (courseName) => {
//     return courseName.toLowerCase().includes(searchQuery.toLowerCase());
//   };

//   return (
//     <>
//       <div style={{ marginLeft: "20px", backgroundColor: "#edfafa" }}>
//         <Profile />
//         <h4 className={style.heading}>Dashboard</h4>
//         {/* Search input field */}
//         <input
//           type="text"
//           placeholder="Search courses..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           style={{ marginBottom: "10px" }}
//         />
//         <Row className={style.space}>
//           {/* Map through your courses and display only those that match the search query */}
//           {courses.map((course, index) => {
//             if (filterCourses(course.name)) {
//               return (
//                 <Col key={index}>
//                   <Card style={{ width: "18rem" }}>
//                     <Row>
//                       <Col xs={6}>
//                         <Card.Img
//                           style={{ height: "7rem" }}
//                           variant="top"
//                           src={course.image}
//                         />
//                       </Col>
//                       <Col xs={6}>
//                         <Card.Body>
//                           <h6>{course.name}</h6>
//                         </Card.Body>
//                       </Col>
//                     </Row>
//                   </Card>
//                 </Col>
//               );
//             }
//             return null;
//           })}
//         </Row>
//       </div>
//     </>
//   );
// }






// import React, { useState } from 'react';
// import { Container, Form, FormControl, Button, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// const cards = [
//   { 
//     id: 1, 
//     name: 'HTML', 
//     body: 'this is the body of HTML card', 
//     link: '/html',
//     imageUrl: 'https://example.com/html.jpg' // Example image URL for HTML
//   },
//   { 
//     id: 2, 
//     name: 'CSS', 
//     body: 'this is the body of CSS card', 
//     link: '/css',
//     imageUrl: 'https://example.com/css.jpg' // Example image URL for CSS
//   },
//   { 
//     id: 3, 
//     name: 'JavaScript', 
//     body: 'this is the body of JavaScript card', 
//     link: '/javascript',
//     imageUrl: 'https://example.com/javascript.jpg' // Example image URL for JavaScript
//   },
//   // Add more cards here
// ];

// const Pdf = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResult, setSearchResult] = useState(null);

//   const handleSearch = () => {
//     const result = cards.find(card => card.name.toLowerCase() === searchTerm.toLowerCase());
//     setSearchResult(result);
//   };

//   const handleReset = () => {
//     setSearchTerm('');
//     setSearchResult(null);
//   };

//   return (
//     <Container>
//       <Form inline>
//         <FormControl 
//           type="text" 
//           placeholder="Search" 
//           className="mr-sm-2" 
//           value={searchTerm}
//           onChange={e => setSearchTerm(e.target.value)} 
//         />
//         <Button variant="outline-success" onClick={handleSearch}>Search</Button>
//         <Button variant="outline-secondary" onClick={handleReset}>Reset</Button>
//       </Form>
//       {searchResult && (
//         <Container className="mt-4">      
//           <Link to={searchResult.link}>
//             <Card>
//               <Card.Img variant="top" src={searchResult.imageUrl} /> {/* Display image */}
//               <Card.Body>
//                 <Card.Title>{searchResult.name}</Card.Title>
//                 <Card.Text>{searchResult.body}</Card.Text>
//               </Card.Body>
//             </Card>
//           </Link>
//         </Container>
//       )}
//       {!searchResult && searchTerm && (
//         <Container className="mt-4">
//           <p>Card not found.</p>
//         </Container>
//       )}
//     </Container>
//   );
// };

// export default Pdf;
