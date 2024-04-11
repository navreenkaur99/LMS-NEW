import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Nav, NavLink, Navbar,Carousel } from 'react-bootstrap';
import QuizApp from './QuizApp';
import Profile from './Profile';
import "bootstrap/dist/css/bootstrap.min.css";
import Html from './Html';
import Quiz from './Quiz';
import { Card } from 'react-bootstrap';

import Assignmentt from './Assignmentt';
import { FaCheck } from 'react-icons/fa'; 

export default function Module() {
  const [expanded, setExpanded] = useState(false);
  const [activeModule, setActiveModule] = useState('chapter1');
  const [completedModules, setCompletedModules] = useState(0);
  const [moduleCollapse, setModuleCollapse] = useState({
    module1: false,
    module2: false,
    module3: false,
    module4: false
  });
  
  const [isRead, setIsRead] = useState({
    chapter1: false,
    tags: false,
    quiz: false,
    assignment: false,
    chapter2: false,
    Assignmentt: false
  });
  
  const handleMarkAsRead = (module) => {
    setIsRead(prevState => ({
      ...prevState,
      [module]: true
    }));
  };

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavLinkClick = (module) => {
    setActiveModule(module);
  }

  const handleNavLinkClick1 = (module) => {
    setModuleCollapse(prevState => ({
      ...Object.keys(prevState).reduce((acc, key) => {
        acc[key] = key === module ? !prevState[key] : false;
        return acc;
      }, {})
    }));
  };

  useEffect(() => {
    const completionWorthyModules = ['chapter1', 'tags', 'quiz', 'assignment', 'chapter2', 'Assignmentt'];
    const completedModulesCount = completionWorthyModules.filter(module => isRead[module]).length;
    const totalModules = completionWorthyModules.length;
    const completionPercentage = ((completedModulesCount / totalModules) * 100).toFixed(2);
    setCompletedModules(completionPercentage);
  }, [isRead]);

  return (
    <>
      <Profile />
      <h4 style={{marginTop:"20px",marginBottom:"20px",display:'flex'}}> JAVASCRIPT 
       <Card style={{width:"190px",height:"40px",marginLeft:"20px"}}>
      <Card.Text style={{marginLeft:"25px",marginTop:"7px"}}>
        Basic level
      </Card.Text>
    </Card></h4>
      <Container fluid>
        <Row style={{ display: "flex" }}>
          <Col md={3} id="sidebar">
            <Navbar style={{ backgroundColor: "#ddeef0", borderRadius: "20px" }} expand="lg" expanded={expanded} className="flex-column align-items-start">
              <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="flex-column">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} className="sidebar-header">
                    <svg style={{ marginLeft: "10px" }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-book-half" viewBox="0 0 16 16">
                      <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                    </svg>
                    <h4 style={{ margin: '0', marginLeft: '65px' }}>   Course  content  for  you</h4>
                  </div>
                   <hr></hr> 
                  
                  <ul className="list-unstyled components">
                    <li>
                      <NavLink href="#module1" className="dropdown-toggle"   onClick={() => handleNavLinkClick1("module1")}>
                        Module1
                      </NavLink>
                      <ul className={`list-unstyled ${moduleCollapse.module1 ? '' : 'collapse'}`} id="module1">
                        <li>
                          <Nav.Link href="#chapter1" onClick={() => handleNavLinkClick("chapter1")}>Html Introduction
                         
                         
                          {activeModule === "chapter1" && isRead.chapter1 && (
                             <FaCheck style={{  marginLeft: '200px',display:"flex-end"  }} /> // Render the checkmark icon if module is a PDF module and marked as read
                            )}
                            </Nav.Link>
                        </li>
                    </ul>
                    </li>
                  </ul>
                  <hr></hr>
                  <ul className="list-unstyled components">
                    <li>
                      <NavLink href="#module2" className="dropdown-toggle" onClick={() => handleNavLinkClick1("module2")}>
                        Module2
                      </NavLink>
                      <ul className={`list-unstyled ${moduleCollapse.module2 ? '' : 'collapse'}`} id="module2">
                        <li>
                          <Nav.Link onClick={() => handleNavLinkClick("tags")}>HTML tags                        
                           {activeModule === "tags" && isRead.tags && (
                             <FaCheck style={{ marginLeft: '200px',display:"flex-end" }} /> // Render the checkmark icon if module is a PDF module and marked as read
                            )}
                          </Nav.Link>
 
                          {/* {activeModule === "tags" && !isRead.tags && (
                            <button onClick={() => handleMarkAsRead("tags")}>Mark as Read</button>
                          )} */}
                        </li> 
                        <li>
                          <Nav.Link  onClick={() => handleNavLinkClick("quiz")}>Quiz</Nav.Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <hr></hr>
                  <ul className="list-unstyled components">
                    <li>
                      <NavLink href="#module3" className="dropdown-toggle" onClick={() => handleNavLinkClick1("module3")}>
                        Module3
                      </NavLink>
                      <ul className={`list-unstyled ${moduleCollapse.module3 ? '' : 'collapse'}`} id="module3">
                        <li>
                          <Nav.Link  onClick={() => handleNavLinkClick("assignment")}>Assignment</Nav.Link>
                        </li>
                        <li>
                          <Nav.Link  onClick={() => handleNavLinkClick("chapter2")}>Quiz2</Nav.Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <hr></hr>
                  <ul className="list-unstyled components">
                    <li>
                      <NavLink  className="dropdown-toggle" onClick={() => handleNavLinkClick1("module4")}>
                        Module4
                      </NavLink>
                      <ul className={`list-unstyled ${moduleCollapse.module4 ? '' : 'collapse'}`} id="module4">
                        <li>
                          <Nav.Link  onClick={() => handleNavLinkClick("Assignmentt")}>Assignment</Nav.Link>
                        </li>
                        </ul>
                    </li>
                  </ul>
                  
                 
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
          <Col md={9} id="content">
            <h4>Javascript CONTENT</h4>
            <div>
              {activeModule === "chapter1" && (
                <div style={{ width: '100%',height:"400px" }}>
                    {/* <ReactIframe
                url=""
                width="100%"
                height="600px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
            /> */}
                  <iframe
                    title="PDF Viewer"
                    src="https://www.tutorialspoint.com/javascript/javascript_tutorial.pdf"
                    width="100%"
                    height="100%"
                  >
                    This browser does not support PDFs. Please download the PDF to view it.
                  </iframe>
                  {activeModule === "chapter1" && !isRead.chapter1 && (
                    <button onClick={() => handleMarkAsRead("chapter1")}>Mark as Read</button>
                  )}
                
                </div>
              )}
            
              {activeModule === "tags" && (<div style={{ width: '100%', height: '400px' }}>
                <iframe
                  title="PDF Viewer"
                  src="https://web.stanford.edu/group/csp/cs21/htmlcheatsheet.pdf"
                  width="100%"
                  height="100%"
                >
                  This browser does not support PDFs. Please download the PDF to view it.
                 </iframe>
                 {activeModule === "tags" && !isRead.tags && (
                    <button onClick={() => handleMarkAsRead("tags")}>Mark as Read</button>
                  )}
                
              </div>)}
              {activeModule === "quiz" && <p>
                <QuizApp /></p>}
              {activeModule === "assignment" && <p><Html/></p>}
              {activeModule === "chapter2" && <p><Quiz/>  </p>}

              {activeModule === "Assignmentt" && <p><Assignmentt/></p>}
            </div>
            <hr />
            <p>Completion Percentage: {completedModules}%</p>
          </Col>
        </Row>
      </Container>
    </>
  );
}




// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Nav, NavLink, Navbar } from 'react-bootstrap';
// import { FaCheck } from 'react-icons/fa'; // Import the checkmark icon
// import QuizApp from './QuizApp';
// import Profile from './Profile';
// import "bootstrap/dist/css/bootstrap.min.css";
// import Html from './Html';
// import Quiz from './Quiz';
// import Assignmentt from './Assignmentt';

// export default function Module() {
//   const [expanded, setExpanded] = useState(false);
//   const [activeModule, setActiveModule] = useState('chapter1');
//   const [completedModules, setCompletedModules] = useState(0);
//   const [moduleCollapse, setModuleCollapse] = useState({
//     module1: false,
//     module2: false,
//     module3: false,
//     module4: false
//   });
//   const [readModules, setReadModules] = useState([]);

//   // Define the array of PDF modules
//   const pdfModules = ['chapter1'];
//   const pdfModules1 = ['tags'];

//   const handleToggle = () => {
//     setExpanded(!expanded);
//   };

//   const markModuleAsRead = (module) => {
//     if (!readModules.includes(module)) {
//       setReadModules(prevReadModules => [...prevReadModules, module]);
//     }
//   };

//   const handleNavLinkClick = (module) => {
//     setActiveModule(module);
//     markModuleAsRead(module);

//     // Check if the clicked module corresponds to a PDF module
//     if (pdfModules.includes(module)) {
//       // Mark the module as completed
//       setCompletedModules(prevCompletedModules => prevCompletedModules + 1);
//     }
//   };

//   const handleNavLinkClick1 = (module) => {
//     // Close other modules and toggle the clicked module
//     setModuleCollapse(prevState => ({
//       ...Object.keys(prevState).reduce((acc, key) => {
//         acc[key] = key === module ? !prevState[key] : false;
//         return acc;
//       }, {})
//     }));
//   };

//   useEffect(() => {
//     const initialActiveModule = 'chapter1';
//     setActiveModule(initialActiveModule);
//     const initialCompletedModulesCount = pdfModules.includes(initialActiveModule) ? 1 : 0;
//     setCompletedModules(initialCompletedModulesCount);
//   }, []);

//   useEffect(() => {
//     const completionWorthyModules = ['chapter1', 'tags', 'quiz', 'assignment', 'chapter2', 'Assignmentt'];
//     const completedModulesCount = completionWorthyModules.filter(module => readModules.includes(module)).length;
//     setCompletedModules(completedModulesCount);
//   }, [readModules]);

//   const completionPercentage = ((completedModules / 6) * 100).toFixed(2);

//   return (
//     <>
//       <Profile />
//       <Container fluid>
//         <Row style={{ display: "flex" }}>
//           <Col md={3} id="sidebar">
//             <Navbar style={{ backgroundColor: "#ddeef0", borderRadius: "20px" }} expand="lg" expanded={expanded} className="flex-column align-items-start">
//               <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
//               <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="flex-column">
//                   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} className="sidebar-header">
//                     <svg style={{ marginLeft: "10px" }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-book-half" viewBox="0 0 16 16">
//                       <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
//                     </svg>
//                     <h4 style={{ margin: '0', marginLeft: '65px' }}>Course content for you</h4>
//                   </div>
//                   <hr></hr>
//                   <center>
//                   <ul className="list-unstyled components">
//                   {pdfModules.map(module => (
//                   <li>
                          
//                       <NavLink href="#module2" className="dropdown-toggle" onClick={() => handleNavLinkClick1("module2")}>
//                         Modulek
//                       </NavLink>
                    
//                       <ul className={`list-unstyled ${moduleCollapse.module2 ? '' : 'collapse'}`} id='module2'>
//                       <li>
//                           <Nav.Link onClick={() => handleNavLinkClick("tags")}>HTML tags</Nav.Link>
                        
//                         </li>
//                         {pdfModules.includes(module) && readModules.includes(module) && (
//                               <FaCheck style={{ marginLeft: '5px' }} /> // Render the checkmark icon if module is a PDF module and marked as read
//                             )}
                    
//                         <li>
//                           <Nav.Link  onClick={() => handleNavLinkClick("quiz")}>Quiz</Nav.Link>
//                         </li>

//                             {/* {pdfModules.includes(module) && !readModules.includes(module) && (
//                               <li>
//                                 <button onClick={() => markModuleAsRead(module)}>
//                                   Mark as Read
//                                 </button>
//                               </li>
//                             )} */}
//                           </ul>
//                         </li>
//                       ))}
//                     </ul>
                    
//                   </center>
//                 </Nav>
//               </Navbar.Collapse>
//             </Navbar>
//           </Col>
//           <Col md={9} id="content">
//             <h4>HTML CONTENT</h4>
//             <div>
//               {activeModule === "chapter1" && (
//                 <div style={{ width: '100%', height: "400px" }}>
//                   <iframe
//                     title="PDF Viewer"
//                     src="https://ww2.cs.fsu.edu/~faizian/cgs3066/resources/Lecture3-Intro%20to%20HTML.pdf"
//                     width="100%"
//                     height="100%"
//                   >
//                     This browser does not support PDFs. Please download the PDF to view it.
//                   </iframe>
//                   {pdfModules.includes("chapter1") && !readModules.includes("chapter1") && (
//                     <button onClick={() => markModuleAsRead("chapter1")}>Mark as a Read</button>
//                   )}
//                 </div>
//               )}

//               {activeModule === "tags" && (
//                 <div style={{ width: '100%', height: '400px' }}>
//                   <iframe
//                     title="PDF Viewer"
//                     src="https://web.stanford.edu/group/csp/cs21/htmlcheatsheet.pdf"
//                     width="100%"
//                     height="100%"
//                   >
//                     This browser does not support PDFs. Please download the PDF to view it.
//                   </iframe>
//                   {pdfModules1.includes("tags") && !readModules.includes("tags") && (
//                     <button onClick={() => markModuleAsRead("tags")}>Mark as Read</button>
//                   )}
//                 </div>
//               )}

//               {activeModule === "quiz" && <p><QuizApp /></p>}
//               {activeModule === "assignment" && <p><Html /></p>}
//               {activeModule === "chapter2" && <p><Quiz />  </p>}

//               {activeModule === "Assignmentt" && <p><Assignmentt /></p>}
//             </div>
//             <hr />
//             <p>Completion Percentage: {completionPercentage}%</p>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }
// // 