// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Nav, NavLink } from 'react-bootstrap';
// import QuizApp from './CSS/QuizApp';

// export default function Module() {
//   const [activeModule, setActiveModule] = useState('module1');

//   const handleNavLinkClick = (module) => {
//     setActiveModule(module);
//   };

//   useEffect(() => {
//     // This effect will run when the component mounts
//     // and set the active module to 'module1' by default
//     setActiveModule('module1');
//   }, []);

//   return (
//     <Container fluid>
//       <Row style={{ display: "flex" }}>
//         <Col md={3} id="sidebar">
//           <Nav className="flex-column">
//             <NavLink href="#module1" onClick={() => handleNavLinkClick("module1")}>
//               Module1
//             </NavLink>
//             <NavLink href="#module2" onClick={() => handleNavLinkClick("module2")}>
//               Module2
//             </NavLink>
//             <NavLink href="#module3" onClick={() => handleNavLinkClick("module3")}>
//               Module3
//             </NavLink>
//             <NavLink href="#module4" onClick={() => handleNavLinkClick("module4")}>
//               Module4
//             </NavLink>
//           </Nav>
//         </Col>

//         <Col md={9} id="content">
//           <h4>HTML CONTENT</h4>
//           <div>
//             {activeModule === "module1" && (
//               <div style={{ width: '100%', height: '800px' }}>
//                 <iframe
//                   title="PDF Viewer"
//                   src="https://ww2.cs.fsu.edu/~faizian/cgs3066/resources/Lecture3-Intro%20to%20HTML.pdf"
//                   width="100%"
//                   height="100%"
//                 >
//                   This browser does not support PDFs. Please download the PDF to view it.
//                 </iframe>
//               </div>
//             )}
//             {activeModule === "module2" && <p><QuizApp/></p>}
//             {activeModule === "module3" && <p>Content for Module3</p>}
//             {activeModule === "module4" && <p>Content for Module4</p>}
//           </div>
//           <hr />
//         </Col>
//       </Row>
//     </Container>
//   );
// }


// import React, { useState } from 'react';
// import { Container, Row, Col, Nav, NavLink } from 'react-bootstrap';

// export default function Module() {
//   const [activeModule, setActiveModule] = useState(null);

//   const handleNavLinkClick = (module) => {
//     setActiveModule(module);
//   };

//   return (
//     <Container fluid>
//       <Row style={{ display: "flex" }}>
//         <Col md={3} id="sidebar">
//           <Nav className="flex-column">
//             <NavLink href="#module1" onClick={() => handleNavLinkClick("module1")}>
//               Module1
//             </NavLink>
//             <NavLink href="#module2" onClick={() => handleNavLinkClick("module2")}>
//               Module2
//             </NavLink>
//             <NavLink href="#module3" onClick={() => handleNavLinkClick("module3")}>
//               Module3
//             </NavLink>
//             <NavLink href="#module4" onClick={() => handleNavLinkClick("module4")}>
//               Module4
//             </NavLink>
//           </Nav>
//         </Col>

//         <Col md={9} id="content">
//           <h4>HTML CONTENT</h4>
//           <div>
//             {activeModule === "module1" && (
//               <div style={{ width: '100%', height: '800px' }}>
//                 <iframe
//                   title="Video Player"
//                   src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Example video link
//                   width="100%"
//                   height="43%"
//                 >
//                   This browser does not support embedded videos. Please click the link to view it.
//                 </iframe>
//               </div>
//             )}
//             {activeModule === "module2" && <p>Content for Module2</p>}
//             {activeModule === "module3" && <p>Content for Module3</p>}
//             {activeModule === "module4" && <p>Content for Module4</p>}
//           </div>
//           <hr />
//         </Col>
//       </Row>
//     </Container>
//   );
// }


// import React, { useState } from 'react';
// import { Container, Row, Col, Nav, NavLink } from 'react-bootstrap';

// export default function Module() {
//   const [activeModule, setActiveModule] = useState(null);

//   const handleNavLinkClick = (module) => {
//     setActiveModule(module);
//   };

//   return (
//     <Container fluid>
//       <Row style={{ display: "flex" }}>
//         <Col md={3} id="sidebar">
//           <Nav className="flex-column">

//             <NavLink href="#module1" onClick={() => handleNavLinkClick("module1")}>
//               Module1
//             </NavLink>
//             <NavLink href="#module2" onClick={() => handleNavLinkClick("module2")}>
//               Module2
//             </NavLink>
//             <NavLink href="#module3" onClick={() => handleNavLinkClick("module3")}>
//               Module3
//             </NavLink>
//             <NavLink href="#module4" onClick={() => handleNavLinkClick("module4")}>
//               Module4
//             </NavLink>
//           </Nav>
//         </Col>

//         <Col md={9} id="content">
//           <h4>HTML CONTENT</h4>
//           <div>
//             {activeModule === "module1" && (
//               <div style={{ width: '100%', height: '800px' }}>
//                 <iframe
//                   title="PDF Viewer"
//                   src="https://ww2.cs.fsu.edu/~faizian/cgs3066/resources/Lecture3-Intro%20to%20HTML.pdf"
//                   width="100%"
//                   height="43%"
//                 >
//                   This browser does not support PDFs. Please download the PDF to view it.
//                 </iframe>
//               </div>
//             )}
//             {activeModule === "module2" && <p>Content for Module2</p>}
//             {activeModule === "module3" && <p>Content for Module3</p>}
//             {activeModule === "module4" && <p>Content for Module4</p>}
//           </div>
//           <hr />
//         </Col>
//       </Row>
//     </Container>
//   );
// }



import { Container, Row, Col, Nav,NavLink,Navbar, Button, Collapse,Table } from 'react-bootstrap';
import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Profile from '../Profile';

export default function Module() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  

   const handleToggle = () => {
   setExpanded(!expanded);
   };


   return (
    <>
    <Profile/>
    <Container fluid>
           <Row style={{display:"flex"}}>
          <Col   md={3} id="sidebar">
       <Navbar style={{backgroundColor:"#ddeef0",borderRadius:"20px"}} expand="lg" expanded={expanded} className="flex-column align-items-start">
    <Navbar.Toggle  aria-controls="basic-navbar-nav" onClick={handleToggle} />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="flex-column">

<center>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  }} className="sidebar-header">
      <svg style={{marginLeft:"10px"}} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-book-half" viewBox="0 0 16 16">
  <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
</svg> 
<h5 style={{ margin: '0', marginLeft: '20px' }}>Course content for you</h5>
</div>

    <ul  className="list-unstyled components" >
        <li>
           <NavLink href="#module1" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
          Module1
          </NavLink>
          <ul className="collapse list-unstyled" id="module1">
            <li>
              <a style= {{contentcolor:"black"}}href="#">Home 1</a>
            </li>
            <li>
            <NavLink href="/Language"> Module1</NavLink>
             </li>
          </ul>
          </li>
          </ul>
          <ul className="list-unstyled components">
        <li>
        <NavLink href="#module2" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
          Module2
          </NavLink>
          <ul className="collapse list-unstyled" id="module2">
            <li>
            <Nav.Link href="#">Chapter1</Nav.Link>
       </li>
            <li>
            <Nav.Link href="#">Chapter2</Nav.Link>
       </li>
          </ul>
          </li>
          </ul>
          <ul className="list-unstyled components">
        <li>
        <NavLink href="#module3" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
            Module3
            </NavLink>
          <ul className="collapse list-unstyled" id="module3">
            <li>
            <Nav.Link href="#services">Services</Nav.Link>
        </li>
            <li>
            <Nav.Link href="#services">Services</Nav.Link>
       </li>
          </ul>
          </li>
          </ul>
          <ul className="list-unstyled components">
        <li>
        <NavLink href="#chapter4" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
          Module4
          
          </NavLink>
          <ul className="collapse list-unstyled" id="chapter4">
            <li>
            <Nav.Link href="#services">Services</Nav.Link>
        </li>
            <li>
            <Nav.Link href="#services">Services</Nav.Link>
       </li>
          </ul>
          </li>
          </ul>
         <Nav.Link href="/">About</Nav.Link>
        <Nav.Link href="#services">Services</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
        </center>

      </Nav>
           </Navbar.Collapse>
   </Navbar>
          {/* <Nav className="flex-column">
         
            <Nav.Link href="https://bootstrapious.com/tutorial/files/sidebar.zip" className="download">
              Download source
            </Nav.Link>
            <Nav.Link href="https://bootstrapious.com/p/bootstrap-sidebar" className="article">
              Back to article
            </Nav.Link>
          </Nav> */}
        </Col>

        
        <Col md={9} id="content">


<h4>HTML CONTENT</h4>
          <Container>
      <Row>
        <Col>
        <div>
    {/* Render the DocViewer component within curly braces */}
    <div style={{ width: '100%', height: '800px' }}>
      <iframe
        title="PDF Viewer"
        src="https://ww2.cs.fsu.edu/~faizian/cgs3066/resources/Lecture3-Intro%20to%20HTML.pdf"
        width="100%"
        height="43%"
      >
        This browser does not support PDFs. Please download the PDF to view it.
      </iframe>
    </div>
  
  </div>

        </Col>
      </Row>
    </Container>
    
          <hr />
     </Col>
</Row>
</Container>


</>

  );
}
