import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Nav, NavLink, Navbar,Card } from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import QuizApp from './QuizApp';
import Profile from '../Profile';
import "bootstrap/dist/css/bootstrap.min.css";
import Html from './Html';
import Quiz from './Quiz';
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
      <h5 style={{marginTop:"20px",marginBottom:"20px",display:'flex'}}> HTML
       {/* <Card style={{width:"190px",height:"40px",marginLeft:"20px"}}>
      <Card.Text style={{marginLeft:"25px",marginTop:"7px"}}>
        Basic level
      </Card.Text>
    </Card></h5> */}
    </h5>
      <Container fluid>
        <Row style={{ display: "flex" }}>
          <Col md={3} id="sidebar">
            <Navbar style={{ borderRadius: "20px" }} expand="lg" expanded={expanded} className="flex-column align-items-start">
              <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="flex-column">
                  <Card>                  
                    <Card.Body style={{backgroundColor:"#294573"}}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} className="sidebar-header">
                    <svg style={{ marginLeft: "10px" }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-book-half" viewBox="0 0 16 16">
                      <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                    </svg>
                    <p style={{ margin: '0', marginLeft: '30px', color:"whitesmoke" }}>   Course  content  for  you</p>                  </div>
                  </Card.Body>
                  </Card>
<Card>
<Card.Body>
                  
                  <ul className="list-unstyled components">
                    <li>
                      <NavLink  className="dropdown-toggle"   onClick={() => handleNavLinkClick1("module1")}>
                        Module1
                      </NavLink>
                      <ul className={`list-unstyled ${moduleCollapse.module1 ? '' : 'collapse'}`} id="module1">
                        <li>
                          <Nav.Link href="#chapter1" onClick={() => handleNavLinkClick("chapter1")}>Html Introduction
                         
                          {activeModule === "chapter1" && isRead.chapter1 && (
  <div style={{ marginLeft: '200px', display: "flex", justifyContent: "flex-end" }}>
    <FaCheck />
  </div>
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
                  </Card.Body>
                  </Card>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
          <Col md={9} id="content">
            <Row>       
              <Col>   
              <h4 style={{marginTop:"40px", color:"#294573"}}>HTML CONTENT</h4></Col>
         <Col>
            <div style={{ width: '100px', height: '100px',display:"flex", marginLeft:"320px" }}>
              <CircularProgressbar
             
                value={completedModules}
                text={`${completedModules}%`}
                styles={buildStyles({
                  textColor: "#000",
                  pathColor: "#294573",
                  trailColor: "#d6d6d6",
                  
                })}
              />
            </div>
            </Col>
            </Row>

            <div>
              {activeModule === "chapter1" && (
                <div style={{ width: '100%',height:"400px" }}>
                  <iframe
                    title="PDF Viewer"
                    src="https://ww2.cs.fsu.edu/~faizian/cgs3066/resources/Lecture3-Intro%20to%20HTML.pdf"
                    width="100%"
                    height="100%"
                  >
                    This browser does not support PDFs. Please download the PDF to view it.
                  </iframe>
                  {activeModule === "chapter1" && !isRead.chapter1 && (
                    <button
                    style={{backgroundColor:"#294573",color:"whitesmoke" , justifyContent: "flex-end"}}
                    onClick={() => handleMarkAsRead("chapter1")}>Mark as Read</button>
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
                    <button 
                    style={{backgroundColor:"#294573",color:"whitesmoke" , justifyContent: "flex-end"}}
                    onClick={() => handleMarkAsRead("tags")}>Mark as Read</button>
                  )}
                
              </div>)}
              {activeModule === "quiz" && <p>
                <QuizApp markAsRead={() => handleMarkAsRead("quiz")} /></p>}
              {activeModule === "assignment" && <p><Html markAsRead={() => handleMarkAsRead("assignment")}/></p>}
              {activeModule === "chapter2" && <p><Quiz markAsRead={() => handleMarkAsRead("chapter2")}/>  </p>}

              {activeModule === "Assignmentt" && (
                <Assignmentt markAsRead={() => handleMarkAsRead("Assignmentt")} />
              )}
            </div>
            <hr />
                     </Col>
        </Row>
      </Container>
    </>
  );
}



// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Nav, NavLink, Navbar } from 'react-bootstrap';
// import QuizApp from './QuizApp';
// import Profile from './Profile';
// import "bootstrap/dist/css/bootstrap.min.css";
// import Html from './Html';
// import Quiz from './Quiz';
// import { Card } from 'react-bootstrap';
// import Assignmentt from './Assignmentt';
// import { FaCheck } from 'react-icons/fa'; 

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
  
//   const [isRead, setIsRead] = useState({
//     chapter1: false,
//     tags: false,
//     quiz: false,
//     assignment: false,
//     chapter2: false,
//     Assignmentt: false
//   });
  
//   const handleMarkAsRead = (module) => {
//     setIsRead(prevState => ({
//       ...prevState,
//       [module]: true
//     }));
//   };

//   const handleToggle = () => {
//     setExpanded(!expanded);
//   };

//   const handleNavLinkClick = (module) => {
//     setActiveModule(module);
//   }

//   const handleNavLinkClick1 = (module) => {
//     setModuleCollapse(prevState => ({
//       ...Object.keys(prevState).reduce((acc, key) => {
//         acc[key] = key === module ? !prevState[key] : false;
//         return acc;
//       }, {})
//     }));
//   };

//   useEffect(() => {
//     const completionWorthyModules = ['chapter1', 'tags', 'quiz', 'assignment', 'chapter2', 'Assignmentt'];
//     const completedModulesCount = completionWorthyModules.filter(module => isRead[module]).length;
//     const totalModules = completionWorthyModules.length;
//     const completionPercentage = ((completedModulesCount / totalModules) * 100).toFixed(2);
//     setCompletedModules(completionPercentage);
//   }, [isRead]);

//   return (
//     <>
//       <Profile />
//       <h5 style={{marginTop:"20px",marginBottom:"20px",display:'flex'}}> HTML
//        <Card style={{width:"190px",height:"40px",marginLeft:"20px"}}>
//       <Card.Text style={{marginLeft:"25px",marginTop:"7px"}}>
//         Basic level
//       </Card.Text>
//     </Card></h5>
//       <Container fluid>
//         <Row style={{ display: "flex" }}>
//           <Col md={3} id="sidebar">
//             <Navbar style={{ borderRadius: "20px" }} expand="lg" expanded={expanded} className="flex-column align-items-start">
//               <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
//               <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="flex-column">
//                   <Card>                  
//                     <Card.Body style={{backgroundColor:"#294573"}}>
//                   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} className="sidebar-header">
//                     <svg style={{ marginLeft: "10px" }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-book-half" viewBox="0 0 16 16">
//                       <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
//                     </svg>
//                     <p style={{ margin: '0', marginLeft: '30px', color:"whitesmoke" }}>   Course  content  for  you</p>                  </div>
//                   </Card.Body>
//                   </Card>
// <Card>
// <Card.Body>
                  
//                   <ul className="list-unstyled components">
//                     <li>
//                       <NavLink  className="dropdown-toggle"   onClick={() => handleNavLinkClick1("module1")}>
//                         Module1
//                       </NavLink>
//                       <ul className={`list-unstyled ${moduleCollapse.module1 ? '' : 'collapse'}`} id="module1">
//                         <li>
//                           <Nav.Link href="#chapter1" onClick={() => handleNavLinkClick("chapter1")}>Html Introduction
                         
                         
//                           {activeModule === "chapter1" && isRead.chapter1 && (
//                              <FaCheck style={{  marginLeft: '200px',display:"flex-end"  }} /> // Render the checkmark icon if module is a PDF module and marked as read
//                             )}
//                             </Nav.Link>
//                         </li>
//                     </ul>
//                     </li>
//                   </ul>
//                   <hr></hr>
//                   <ul className="list-unstyled components">
//                     <li>
//                       <NavLink href="#module2" className="dropdown-toggle" onClick={() => handleNavLinkClick1("module2")}>
//                         Module2
//                       </NavLink>
//                       <ul className={`list-unstyled ${moduleCollapse.module2 ? '' : 'collapse'}`} id="module2">
//                         <li>
//                           <Nav.Link onClick={() => handleNavLinkClick("tags")}>HTML tags                        
//                            {activeModule === "tags" && isRead.tags && (
//                              <FaCheck style={{ marginLeft: '200px',display:"flex-end" }} /> // Render the checkmark icon if module is a PDF module and marked as read
//                             )}
//                           </Nav.Link>
 
//                           {/* {activeModule === "tags" && !isRead.tags && (
//                             <button onClick={() => handleMarkAsRead("tags")}>Mark as Read</button>
//                           )} */}
//                         </li> 
//                         <li>
//                           <Nav.Link  onClick={() => handleNavLinkClick("quiz")}>Quiz</Nav.Link>
//                         </li>
//                       </ul>
//                     </li>
//                   </ul>
//                   <hr></hr>
//                   <ul className="list-unstyled components">
//                     <li>
//                       <NavLink href="#module3" className="dropdown-toggle" onClick={() => handleNavLinkClick1("module3")}>
//                         Module3
//                       </NavLink>
//                       <ul className={`list-unstyled ${moduleCollapse.module3 ? '' : 'collapse'}`} id="module3">
//                         <li>
//                           <Nav.Link  onClick={() => handleNavLinkClick("assignment")}>Assignment</Nav.Link>
//                         </li>
//                         <li>
//                           <Nav.Link  onClick={() => handleNavLinkClick("chapter2")}>Quiz2</Nav.Link>
//                         </li>
//                       </ul>
//                     </li>
//                   </ul>
//                   <hr></hr>
//                   <ul className="list-unstyled components">
//                     <li>
//                       <NavLink  className="dropdown-toggle" onClick={() => handleNavLinkClick1("module4")}>
//                         Module4
//                       </NavLink>
//                       <ul className={`list-unstyled ${moduleCollapse.module4 ? '' : 'collapse'}`} id="module4">
//                         <li>
//                           <Nav.Link  onClick={() => handleNavLinkClick("Assignmentt")}>Assignment</Nav.Link>
//                         </li>
//                         </ul>
//                     </li>
//                   </ul>
//                   </Card.Body>
//                   </Card>
//                 </Nav>
//               </Navbar.Collapse>
//             </Navbar>
//           </Col>
//           <Col md={9} id="content">
//             <h4>HTML CONTENT</h4>
//             <div>
//               {activeModule === "chapter1" && (
//                 <div style={{ width: '100%',height:"400px" }}>
//                   <iframe
//                     title="PDF Viewer"
//                     src="https://ww2.cs.fsu.edu/~faizian/cgs3066/resources/Lecture3-Intro%20to%20HTML.pdf"
//                     width="100%"
//                     height="100%"
//                   >
//                     This browser does not support PDFs. Please download the PDF to view it.
//                   </iframe>
//                   {activeModule === "chapter1" && !isRead.chapter1 && (
//                     <button onClick={() => handleMarkAsRead("chapter1")}>Mark as Read</button>
//                   )}
                
//                 </div> 
//               )}
            
//               {activeModule === "tags" && (<div style={{ width: '100%', height: '400px' }}>
//                 <iframe
//                   title="PDF Viewer"
//                   src="https://web.stanford.edu/group/csp/cs21/htmlcheatsheet.pdf"
//                   width="100%"
//                   height="100%"
//                 >
//                   This browser does not support PDFs. Please download the PDF to view it.
//                  </iframe>
//                  {activeModule === "tags" && !isRead.tags && (
//                     <button onClick={() => handleMarkAsRead("tags")}>Mark as Read</button>
//                   )}
                
//               </div>)}
//               {activeModule === "quiz" && <p>
//                 <QuizApp /></p>}
//               {activeModule === "assignment" && <p><Html/></p>}
//               {activeModule === "chapter2" && <p><Quiz markAsRead={() => handleMarkAsRead("chapter2")}/>  </p>}

//               {activeModule === "Assignmentt" && (
//                 <Assignmentt markAsRead={() => handleMarkAsRead("Assignmentt")} />
//               )}
//             </div>
//             <hr />
//             <p>Completion Percentage: {completedModules}%</p>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }



// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Nav, NavLink, Navbar, Button,Card } from 'react-bootstrap';
// import Quiz from './Quiz';

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
//   const [isRead, setIsRead] = useState({
//     chapter1: false,
//     tags: false,
//     quiz: false,
//     assignment: false,
//     chapter2: false,
//     Assignmentt: false
//   });

//   const handleMarkAsRead = (module) => {
//     setIsRead(prevState => ({
//       ...prevState,
//       [module]: true
//     }));
//   };

//   const handleToggle = () => {
//     setExpanded(!expanded);
//   };

//   const handleNavLinkClick = (module) => {
//     setActiveModule(module);
//   }

//   const handleNavLinkClick1 = (module) => {
//     setModuleCollapse(prevState => ({
//       ...Object.keys(prevState).reduce((acc, key) => {
//         acc[key] = key === module ? !prevState[key] : false;
//         return acc;
//       }, {})
//     }));
//   };

//   useEffect(() => {
//     const completionWorthyModules = ['chapter1', 'tags', 'quiz', 'assignment', 'chapter2', 'Assignmentt'];
//     const completedModulesCount = completionWorthyModules.filter(module => isRead[module]).length;
//     const totalModules = completionWorthyModules.length;
//     const completionPercentage = ((completedModulesCount / totalModules) * 100).toFixed(2);
//     setCompletedModules(completionPercentage);
//   }, [isRead]);

//   return (
//     <>
//       <h5 style={{marginTop:"20px",marginBottom:"20px",display:'flex'}}> HTML
//         <Card style={{width:"190px",height:"40px",marginLeft:"20px"}}>
//           <Card.Text style={{marginLeft:"25px",marginTop:"7px"}}>
//             Basic level
//           </Card.Text>
//         </Card>
//       </h5>
//       <Container fluid>
//         <Row style={{ display: "flex" }}>
//           <Col md={3} id="sidebar">
//             <Navbar style={{ borderRadius: "20px" }} expand="lg" expanded={expanded} className="flex-column align-items-start">
//               <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
//               <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="flex-column">
//                   <Card>                  
//                     <Card.Body style={{backgroundColor:"#294573"}}>
//                       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} className="sidebar-header">
//                         <svg style={{ marginLeft: "10px" }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-book-half" viewBox="0 0 16 16">
//                           <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
//                         </svg>
//                         <p style={{ margin: '0', marginLeft: '30px', color:"whitesmoke" }}>Course content for you</p>
//                       </div>
//                     </Card.Body>
//                   </Card>
//                   <Card>
//                     <Card.Body>
//                       <ul className="list-unstyled components">
//                         <li>
//                           <NavLink  className="dropdown-toggle"   onClick={() => handleNavLinkClick1("module1")}>
//                             Module1
//                           </NavLink>
//                           <ul className={`list-unstyled ${moduleCollapse.module1 ? '' : 'collapse'}`} id="module1">
//                             <li>
//                               <Nav.Link href="#chapter1" onClick={() => handleNavLinkClick("chapter1")}>Html Introduction
//                                 {activeModule === "chapter1" && isRead.chapter1 && (
//                                   <FaCheck style={{  marginLeft: '200px',display:"flex-end"  }} /> 
//                                 )}
//                               </Nav.Link>
//                             </li>
//                           </ul>
//                         </li>
//                       </ul>
//                       <hr></hr>
//                       <ul className="list-unstyled components">
//                         <li>
//                           <NavLink href="#module2" className="dropdown-toggle" onClick={() => handleNavLinkClick1("module2")}>
//                             Module2
//                           </NavLink>
//                           <ul className={`list-unstyled ${moduleCollapse.module2 ? '' : 'collapse'}`} id="module2">
//                             <li>
//                               <Nav.Link onClick={() => handleNavLinkClick("tags")}>HTML tags                        
//                                 {activeModule === "tags" && isRead.tags && (
//                                   <FaCheck style={{ marginLeft: '200px',display:"flex-end" }} /> 
//                                 )}
//                               </Nav.Link>
//                             </li> 
//                             <li>
//                               <Nav.Link  onClick={() => handleNavLinkClick("quiz")}>Quiz</Nav.Link>
//                             </li>
//                           </ul>
//                         </li>
//                       </ul>
//                       <hr></hr>
//                       <ul className="list-unstyled components">
//                         <li>
//                           <NavLink href="#module3" className="dropdown-toggle" onClick={() => handleNavLinkClick1("module3")}>
//                             Module3
//                           </NavLink>
//                           <ul className={`list-unstyled ${moduleCollapse.module3 ? '' : 'collapse'}`} id="module3">
//                             <li>
//                               <Nav.Link  onClick={() => handleNavLinkClick("assignment")}>Assignment</Nav.Link>
//                             </li>
//                             <li>
//                               <Nav.Link  onClick={() => handleNavLinkClick("chapter2")}>Quiz2</Nav.Link>
//                             </li>
//                           </ul>
//                         </li>
//                       </ul>
//                       <hr></hr>
//                       <ul className="list-unstyled components">
//                         <li>
//                           <NavLink  className="dropdown-toggle" onClick={() => handleNavLinkClick1("module4")}>
//                             Module4
//                           </NavLink>
//                           <ul className={`list-unstyled ${moduleCollapse.module4 ? '' : 'collapse'}`} id="module4">
//                             <li>
//                               <Nav.Link  onClick={() => handleNavLinkClick("Assignmentt")}>Assignment</Nav.Link>
//                             </li>
//                           </ul>
//                         </li>
//                       </ul>
//                     </Card.Body>
//                   </Card>
//                 </Nav>
//               </Navbar.Collapse>
//             </Navbar>
//           </Col>
//           <Col md={9} id="content">
//             <h4>HTML CONTENT</h4>
//             <div>
//               {activeModule === "chapter1" && (
//                 <div style={{ width: '100%',height:"400px" }}>
//                   <iframe
//                     title="PDF Viewer"
//                     src="https://ww2.cs.fsu.edu/~faizian/cgs3066/resources/Lecture3-Intro%20to%20HTML.pdf"
//                     width="100%"
//                     height="100%"
//                   >
//                     This browser does not support PDFs. Please download the PDF to view it.
//                   </iframe>
//                   {activeModule === "chapter1" && !isRead.chapter1 && (
//                     <button onClick={() => handleMarkAsRead("chapter1")}>Mark as Read</button>
//                   )}
//                 </div> 
//               )}
//               {activeModule === "tags" && (<div style={{ width: '100%', height: '400px' }}>
//                 <iframe
//                   title="PDF Viewer"
//                   src="https://web.stanford.edu/group/csp/cs21/htmlcheatsheet.pdf"
//                   width="100%"
//                   height="100%"
//                 >
//                   This browser does not support PDFs. Please download the PDF to view it.
//                  </iframe>
//                  {activeModule === "tags" && !isRead.tags && (
//                     <button onClick={() => handleMarkAsRead("tags")}>Mark as Read</button>
//                   )}
//               </div>)}
//               {activeModule === "quiz" && <p>
//                 <Quiz markAsRead={() => handleMarkAsRead("quiz")} /></p>}
//               {activeModule === "assignment" && <p><Html/></p>}
//               {activeModule === "chapter2" && <p><Quiz/>  </p>}
//               {activeModule === "Assignmentt" && <p><Assignmentt/></p>}
//             </div>
//             <hr />
//             <p>Completion Percentage: {completedModules}%</p>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }




// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Nav, NavLink, Navbar } from 'react-bootstrap';
// import QuizApp from './QuizApp';
// import Profile from './Profile';
// import "bootstrap/dist/css/bootstrap.min.css";
// import Html from './Html';
// import Quiz from './Quiz';
// import { Card } from 'react-bootstrap';
// import Assignmentt from './Assignmentt';
// import { FaCheck } from 'react-icons/fa'; 

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
  
//   const [isRead, setIsRead] = useState({
//     chapter1: false,
//     tags: false,
//     quiz: false,
//     assignment: false,
//     chapter2: false,
//     Assignmentt: false
//   });
  
//   const handleMarkAsRead = (module) => {
//     setIsRead(prevState => ({
//       ...prevState,
//       [module]: true
//     }));
//   };

//   const handleToggle = () => {
//     setExpanded(!expanded);
//   };

//   const handleNavLinkClick = (module) => {
//     setActiveModule(module);
//   }

//   const handleNavLinkClick1 = (module) => {
//     setModuleCollapse(prevState => ({
//       ...Object.keys(prevState).reduce((acc, key) => {
//         acc[key] = key === module ? !prevState[key] : false;
//         return acc;
//       }, {})
//     }));
//   };

//   useEffect(() => {
//     const completionWorthyModules = ['chapter1', 'tags', 'quiz', 'assignment', 'chapter2', 'Assignmentt'];
//     const completedModulesCount = completionWorthyModules.filter(module => isRead[module]).length;
//     const totalModules = completionWorthyModules.length;
//     const completionPercentage = ((completedModulesCount / totalModules) * 100).toFixed(2);
//     setCompletedModules(completionPercentage);
//   }, [isRead]);

//   return (
//     <>
//       <Profile />
//       <h5 style={{marginTop:"20px",marginBottom:"20px",display:'flex'}}> HTML
//        <Card style={{width:"190px",height:"40px",marginLeft:"20px"}}>
//       <Card.Text style={{marginLeft:"25px",marginTop:"7px"}}>
//         Basic level
//       </Card.Text>
//     </Card></h5>
//       <Container fluid>
//         <Row style={{ display: "flex" }}>
//           <Col md={3} id="sidebar">
//             <Navbar style={{ borderRadius: "20px" }} expand="lg" expanded={expanded} className="flex-column align-items-start">
//               <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />
//               <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="flex-column">
//                   <Card>                  
//                     <Card.Body style={{backgroundColor:"#294573"}}>
//                   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }} className="sidebar-header">
//                     <svg style={{ marginLeft: "10px" }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-book-half" viewBox="0 0 16 16">
//                       <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
//                     </svg>
//                     <p style={{ margin: '0', marginLeft: '30px', color:"whitesmoke" }}>   Course  content  for  you</p>                  </div>
//                   </Card.Body>
//                   </Card>
// <Card>
// <Card.Body>
                  
//                   <ul className="list-unstyled components">
//                     <li>
//                       <NavLink  className="dropdown-toggle"   onClick={() => handleNavLinkClick1("module1")}>
//                         Module1
//                       </NavLink>
//                       <ul className={`list-unstyled ${moduleCollapse.module1 ? '' : 'collapse'}`} id="module1">
//                         <li>
//                           <Nav.Link href="#chapter1" onClick={() => handleNavLinkClick("chapter1")}>Html Introduction
                         
                         
//                           {activeModule === "chapter1" && isRead.chapter1 && (
//                              <FaCheck style={{  marginLeft: '200px',display:"flex-end"  }} /> // Render the checkmark icon if module is a PDF module and marked as read
//                             )}
//                             </Nav.Link>
//                         </li>
//                     </ul>
//                     </li>
//                   </ul>
//                   <hr></hr>
//                   <ul className="list-unstyled components">
//                     <li>
//                       <NavLink href="#module2" className="dropdown-toggle" onClick={() => handleNavLinkClick1("module2")}>
//                         Module2
//                       </NavLink>
//                       <ul className={`list-unstyled ${moduleCollapse.module2 ? '' : 'collapse'}`} id="module2">
//                         <li>
//                           <Nav.Link onClick={() => handleNavLinkClick("tags")}>HTML tags                        
//                            {activeModule === "tags" && isRead.tags && (
//                              <FaCheck style={{ marginLeft: '200px',display:"flex-end" }} /> // Render the checkmark icon if module is a PDF module and marked as read
//                             )}
//                           </Nav.Link>
 
//                           {/* {activeModule === "tags" && !isRead.tags && (
//                             <button onClick={() => handleMarkAsRead("tags")}>Mark as Read</button>
//                           )} */}
//                         </li> 
//                         <li>
//                           <Nav.Link  onClick={() => handleNavLinkClick("quiz")}>Quiz</Nav.Link>
//                         </li>
//                       </ul>
//                     </li>
//                   </ul>
//                   <hr></hr>
//                   <ul className="list-unstyled components">
//                     <li>
//                       <NavLink href="#module3" className="dropdown-toggle" onClick={() => handleNavLinkClick1("module3")}>
//                         Module3
//                       </NavLink>
//                       <ul className={`list-unstyled ${moduleCollapse.module3 ? '' : 'collapse'}`} id="module3">
//                         <li>
//                           <Nav.Link  onClick={() => handleNavLinkClick("assignment")}>Assignment</Nav.Link>
//                         </li>
//                         <li>
//                           <Nav.Link  onClick={() => handleNavLinkClick("chapter2")}>Quiz2</Nav.Link>
//                         </li>
//                       </ul>
//                     </li>
//                   </ul>
//                   <hr></hr>
//                   <ul className="list-unstyled components">
//                     <li>
//                       <NavLink  className="dropdown-toggle" onClick={() => handleNavLinkClick1("module4")}>
//                         Module4
//                       </NavLink>
//                       <ul className={`list-unstyled ${moduleCollapse.module4 ? '' : 'collapse'}`} id="module4">
//                         <li>
//                           <Nav.Link  onClick={() => handleNavLinkClick("Assignmentt")}>Assignment</Nav.Link>
//                         </li>
//                         </ul>
//                     </li>
//                   </ul>
//                   </Card.Body>
//                   </Card>
//                 </Nav>
//               </Navbar.Collapse>
//             </Navbar>
//           </Col>
//           <Col md={9} id="content">
//             <h4>HTML CONTENT</h4>
//             <div>
//               {activeModule === "chapter1" && (
//                 <div style={{ width: '100%',height:"400px" }}>
//                   <iframe
//                     title="PDF Viewer"
//                     src="https://ww2.cs.fsu.edu/~faizian/cgs3066/resources/Lecture3-Intro%20to%20HTML.pdf"
//                     width="100%"
//                     height="100%"
//                   >
//                     This browser does not support PDFs. Please download the PDF to view it.
//                   </iframe>
//                   {activeModule === "chapter1" && !isRead.chapter1 && (
//                     <button onClick={() => handleMarkAsRead("chapter1")}>Mark as Read</button>
//                   )}
                
//                 </div> 
//               )}
            
//               {activeModule === "tags" && (<div style={{ width: '100%', height: '400px' }}>
//                 <iframe
//                   title="PDF Viewer"
//                   src="https://web.stanford.edu/group/csp/cs21/htmlcheatsheet.pdf"
//                   width="100%"
//                   height="100%"
//                 >
//                   This browser does not support PDFs. Please download the PDF to view it.
//                  </iframe>
//                  {activeModule === "tags" && !isRead.tags && (
//                     <button onClick={() => handleMarkAsRead("tags")}>Mark as Read</button>
//                   )}
                
//               </div>)}
//               {activeModule === "quiz" && <p>
//                 <QuizApp /></p>}
//               {activeModule === "assignment" && <p><Html/></p>}
//               {activeModule === "chapter2" && <p><Quiz/>  </p>}

//               {activeModule === "Assignmentt" && (
//                 <Assignmentt markAsRead={() => handleMarkAsRead("Assignmentt")} />
//               )}
//             </div>
//             <hr />
//             <p>Completion Percentage: {completedModules}%</p>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }


// old html code in which read is not added 
// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Nav, NavLink, Navbar } from 'react-bootstrap';
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
  
//     const [isRead, setIsRead] = useState(false);
  
//     const handleMarkAsRead = () => {
//       setIsRead(true);
//       // Perform any additional logic, such as updating a database or state
//     };
  

//   const handleToggle = () => {
//     setExpanded(!expanded);
//   };

//   const handleNavLinkClick = (module) => {
//      setActiveModule(module);
//   }
//   const handleNavLinkClick1 = (module) => {
 
//     // // Close other modules and toggle the clicked module
//     setModuleCollapse(prevState => ({
//       ...Object.keys(prevState).reduce((acc, key) => {
//         acc[key] = key === module ? !prevState[key] : false;
//            return acc;
//       }, {})
//     }));
//   };

//   useEffect(() => {
//     setActiveModule('chapter1');
//   }, []);

//   useEffect(() => {
//     const completionWorthyModules = ['chapter1','tags', 'quiz', 'assignment','chapter2','Assignmentt'];
//     const completedModulesCount = completionWorthyModules.includes(activeModule) ? completionWorthyModules.indexOf(activeModule) + 1 : 0;
//     setCompletedModules(completedModulesCount);
//   }, [activeModule]);

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
//                     <h4 style={{ margin: '0', marginLeft: '65px' }}>   Course  content  for  you</h4>
//                   </div>
//                    <hr></hr>
//                   <center>
//                   <ul className="list-unstyled components">
//                     <li>
//                       <NavLink href="#module1" className="dropdown-toggle"   onClick={() => handleNavLinkClick1("module1")}>
//                         Module1
//                       </NavLink>
//                       <ul className={`list-unstyled ${moduleCollapse.module1 ? '' : 'collapse'}`} id="module1">
//                         <li>
//                           <Nav.Link href="#chapter1" onClick={() => handleNavLinkClick("chapter1")}>Html Introduction</Nav.Link>
//                         </li>
//                     </ul>
//                     </li>
//                   </ul>
//                   <hr></hr>
//                   <ul className="list-unstyled components">
//                     <li>
//                       <NavLink href="#module2" className="dropdown-toggle" onClick={() => handleNavLinkClick1("module2")}>
//                         Module2
//                       </NavLink>
//                       <ul className={`list-unstyled ${moduleCollapse.module2 ? '' : 'collapse'}`} id="module2">
//                         <li>
//                           <Nav.Link onClick={() => handleNavLinkClick("tags")}>HTML tags</Nav.Link>
//                         </li>
//                         <li>
//                           <Nav.Link  onClick={() => handleNavLinkClick("quiz")}>Quiz</Nav.Link>
//                         </li>

//                       </ul>
//                     </li>
//                   </ul>
//                   <hr></hr>
//                   <ul className="list-unstyled components">
//                     <li>
//                       <NavLink href="#module3" className="dropdown-toggle" onClick={() => handleNavLinkClick1("module3")}>
//                         Module3
//                       </NavLink>
//                       <ul className={`list-unstyled ${moduleCollapse.module3 ? '' : 'collapse'}`} id="module3">
//                         <li>
//                           <Nav.Link  onClick={() => handleNavLinkClick("assignment")}>Assignment</Nav.Link>
//                         </li>
//                         <li>
//                           <Nav.Link  onClick={() => handleNavLinkClick("chapter2")}>Quiz2</Nav.Link>
//                         </li>
//                       </ul>
//                     </li>
//                   </ul>
//                   <hr></hr>
//                   <ul className="list-unstyled components">
//                     <li>
//                       <NavLink  className="dropdown-toggle" onClick={() => handleNavLinkClick1("module4")}>
//                         Module4
//                       </NavLink>
//                       <ul className={`list-unstyled ${moduleCollapse.module4 ? '' : 'collapse'}`} id="module4">
//                         <li>
//                           <Nav.Link  onClick={() => handleNavLinkClick("Assignmentt")}>Assignment</Nav.Link>
//                         </li>
//                         </ul>
//                     </li>
//                   </ul>
                 
                  
//                   </center>
                 
//                 </Nav>
//               </Navbar.Collapse>
//             </Navbar>
//           </Col>
//           <Col md={9} id="content">
//             <h4>HTML CONTENT</h4>
//             <div>
//               {activeModule === "chapter1" && (
//                 <div style={{ width: '100%',height:"400px" }}>
//                   <iframe
//                     title="PDF Viewer"
//                     src="https://ww2.cs.fsu.edu/~faizian/cgs3066/resources/Lecture3-Intro%20to%20HTML.pdf"
//                     width="100%"
//                     height="100%"
//                   >
//                     This browser does not support PDFs. Please download the PDF to view it.
//                   </iframe>
//                 </div>
//               )}
            
//               {activeModule === "tags" && (<div style={{ width: '100%', height: '400px' }}>
//                 <iframe
//                   title="PDF Viewer"
//                   src="https://web.stanford.edu/group/csp/cs21/htmlcheatsheet.pdf"
//                   width="100%"
//                   height="100%"
//                 >
//                   This browser does not support PDFs. Please download the PDF to view it.
//                 </iframe>
//               </div>)}
//               {activeModule === "quiz" && <p><QuizApp /></p>}
//               {activeModule === "assignment" && <p><Html/></p>}
//               {activeModule === "chapter2" && <p><Quiz/>  </p>}

//               {activeModule === "Assignmentt" && <p><Assignmentt/></p>}
//             </div>
//             <hr />
//             <p>Completion Percentage: {completionPercentage}%</p>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }






// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Nav, NavLink,Navbar } from 'react-bootstrap';
// import QuizApp from './QuizApp';
// import Profile from './Profile';
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function Module() {

//   const [open, setOpen] = useState(false);
//   const [expanded, setExpanded] = useState(false);
  

//    const handleToggle = () => {
//    setExpanded(!expanded);
//    };
//    const [activeModule, setActiveModule] = useState('module1');
//    const handleNavLinkClick = (module) => {
//     setActiveModule(module);
//   };
//   useEffect(() => {
//     // This effect will run when the component mounts
//     // and set the active module to 'module1' by default
//     setActiveModule('chapter1');
//   }, []);

//   return (
//     <>
//      <Profile/>
//      <Container fluid>
//       <Row style={{ display: "flex" }}>
//         <Col md={3} id="sidebar">
//         <Navbar style={{backgroundColor:"#ddeef0",borderRadius:"20px"}} expand="lg" expanded={expanded} className="flex-column align-items-start">
//     <Navbar.Toggle  aria-controls="basic-navbar-nav" onClick={handleToggle} />
//     <Navbar.Collapse id="basic-navbar-nav">
   
//           <Nav className="flex-column">
//           <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',  }} className="sidebar-header">
//       <svg style={{marginLeft:"10px"}} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-book-half" viewBox="0 0 16 16">
//   <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
// </svg> 
// <h5 style={{ margin: '0', marginLeft: '20px' }}>Course content for you</h5>
// </div>

// <ul className="list-unstyled components">
//         <li>
//         <NavLink href="#module1" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
//           Module1
//           </NavLink>
//           <ul className="collapse list-unstyled" id="module1">
//             <li>
//             <Nav.Link href="#chapter1" onClick={() => handleNavLinkClick("chapter1")}>Chapter1</Nav.Link>
//        </li>
//             <li>
//             <Nav.Link  href="#chapter2" onClick={() => handleNavLinkClick("chapter2")}>Chapter2</Nav.Link>
//        </li>
//           </ul>
//           </li>
//           </ul>
//           <ul className="list-unstyled components">
//         <li>
//         <NavLink href="#module2" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
//           Module2
//           </NavLink>
//           <ul className="collapse list-unstyled" id="module2">
//             <li>
//             <Nav.Link onClick={() => handleNavLinkClick("intro")}>Chapter1</Nav.Link>
//        </li>
//             <li>
//             <Nav.Link  href="#intro" onClick={() => handleNavLinkClick("intro")}>Chapter2</Nav.Link>
//        </li>
//           </ul>
//           </li>
//           </ul>
//           <ul className="list-unstyled components">
//         <li>
//         <NavLink href="#module3" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
//           Module
//           </NavLink>
//           <ul className="collapse list-unstyled" id="module3">
//             <li>
//             <Nav.Link href="#chapter1" onClick={() => handleNavLinkClick("chapter1")}>Chapter1</Nav.Link>
//        </li>
//             <li>
//             <Nav.Link  href="#chapter2" onClick={() => handleNavLinkClick("chapter2")}>Chapter2</Nav.Link>
//        </li>
//           </ul>
//           </li>
//           </ul>
//          <NavLink href="#module4" onClick={() => handleNavLinkClick("module4")}>
//               Module4
//             </NavLink>
//           </Nav>
//           </Navbar.Collapse>
//    </Navbar>
//         </Col>

//         <Col md={9} id="content">
//           <h4>HTML CONTENT</h4>
//           <div>
//             {activeModule === "chapter1" && (
//               <div style={{ width: '100%', height: '800px' }}>
//                 <iframe
//                   title="PDF Viewer"
//                   src="https://ww2.cs.fsu.edu/~faizian/cgs3066/resources/Lecture3-Intro%20to%20HTML.pdf"
//                   width="100%"
//                   height="50%"
//                 >
//                   This browser does not support PDFs. Please download the PDF to view it.
//                 </iframe>
//               </div>
//             )}
//             {activeModule === "chapter2" && <p><QuizApp/></p>}

//             {activeModule === "intro" && (<div style={{ width: '100%', height: '800px' }}>
//                 <iframe
//                   title="PDF Viewer"
//                   src="https://web.stanford.edu/group/csp/cs21/htmlcheatsheet.pdf"
//                   width="100%"
//                   height="50%"
//                 >
//                   This browser does not support PDFs. Please download the PDF to view it.
//                 </iframe>
//               </div>)}
//             {activeModule === "module4" && <p>Content for Module4</p>}
//           </div>
//           <hr />
//         </Col>
//       </Row>
//     </Container>
    
//     </>
//   );
// }





// import style from "./CSS/Ui.module.css";
// import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Image } from "react-bootstrap";
// import list from "./list.json"
// import { Container, Row, Col, Card } from 'react-bootstrap';


// export default function Scond() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
   

// <>





// <nav className="navbar bg-body-tertiary">
//           <div className="container">
//             <a className="navbar-brand" href="#">
//               <Image
//                 src="https://kochiva.com/wp-content/themes/Kochiva/kasset/assets/kochiva-logo.svg"
//                 alt="Kochiva Logo"
//                 width="100"
//                 height="50"
//               />
//             </a>
//             <div className={style.top}>
//               {/* <Row> */}
//               <div >
//         <img src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png"
//         width="50"
//         height="30"
//       alt="User Thumbnail" className="userthumb" />
//         <span style={{marginRight:'45px',fontSize:"14px"}}>Navreenkaur99@gmail.com</span>
//       </div>
//                  {/* <Col> */}
//                 <button className={style.dropdown} onClick={() => setIsOpen((prev) => !prev)}>
//                   <Image
//                     src="https://cdn.vectorstock.com/i/1000x1000/91/84/modern-menu-icon-for-mobile-apps-and-websites-vector-16849184.webp"
//                     alt="Menu Icon"
//                     width="50"
//                     height="30"
//                   />
//                   {!isOpen ? (
//                     <AiOutlineCaretDown className="h-8" />
//                   ) : (
//                     <AiOutlineCaretUp className="h-8" />
//                   )}
//                 </button>

//                 {isOpen && (
//                   <div className={style.button}>
//                     {list.map((item ) => (
//                       <div className={style.down} key={item}>
//                         <h6>{item.city}</h6>
//                         </div>
//                     ))}
//                   </div>                  
 
//                 )}
               
            
              
               
                
//                 {/* </Col> */}
//                 {/* </Row> */}
//                 </div>
//           </div>
//         </nav>

//  {/*
// <div class="container-fluid mt-3">
//   <div class="row">
//     <div class="col-md-3">
//       <div class="card">
//         <div class="card-body">
//           <h5 class="card-title">Total Users</h5>
//           <p class="card-text">500</p>
//         </div>
//       </div>
//     </div>
//     <div class="col-md-3">
//       <div class="card">
//         <div class="card-body">
//           <h5 class="card-title">Revenue</h5>
//           <p class="card-text">$10,000</p>
//         </div>
//       </div>
//     </div>
//     <div class="col-md-3">
//       <div class="card">
//         <div class="card-body">
//           <h5 class="card-title">Orders</h5>
//           <p class="card-text">200</p>
//         </div>
//       </div>
//     </div>
//     <div class="col-md-3">
//       <div class="card">
//         <div class="card-body">
//           <h5 class="card-title">Visitors</h5>
//           <p class="card-text">1000</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// <nav class="navbar navbar-expand-lg navbar-light bg-light side-nav"> */}
//   {/* <a class="navbar-brand" href="#">Dashboard</a> */}
//   {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button> */}

//   <div style={{backgroundColor:"rgb(63, 126, 182" ,borderRadius:"10px", width:"150px"}} >
//     <ul class="navbar-nav flex-column">
//        {/* <li class="nav-item">
//          <a class="nav-link active" href="#">Dashboard</a> 
//       </li> */}
//       <li class="nav-item"> 
//         <a class="nav-link" href="#">Introduction</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Chapter 1</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Chapter 2</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Chapter 2</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Chapter 2</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Chapter 2</a>
//       </li>
     

//     </ul>
//   </div>
// {/* </nav> */}

// {/* <!-- Page Content --> */}
// {/* <div class="content">
//   <h1>Dashboard</h1>
//   <p>Welcome to your dashboard.</p>
// </div> */}

// <div style={{display:"flex", justifyItems:"right"}}>
// <nav class="navbar navbar-expand-lg navbar-light bg-light">
//   <a class="navbar-brand" href="#">Dashboard</a>
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>

//   <div class="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul class="navbar-nav ml-auto">
//       <li class="nav-item active">
//         <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Settings</a>
//       </li>
//       <li class="nav-item">
//         <a class="nav-link" href="#">Logout</a>
//       </li>
//     </ul>
//   </div>
// </nav>
// </div>


//     <Container fluid>
//       <Row>
//         <Col md={4}>
//           <Card>
//             <Card.Body>
//               <Card.Title>Card 1</Card.Title>
//               <Card.Text>
//                 This is some text within a card.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={4}>
//           <Card>
//             <Card.Body>
//               <Card.Title>Card 2</Card.Title>
//               <Card.Text>
//                 This is some text within a card.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={4}>
//           <Card>
//             <Card.Body>
//               <Card.Title>Card 3</Card.Title>
//               <Card.Text>
//                 This is some text within a card.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>


// </>
// )
// }
