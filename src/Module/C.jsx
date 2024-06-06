import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Nav, NavLink, Navbar, Card } from 'react-bootstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import QuizApp from './QuizApp';
import Profile from '../Profile';
import Html from './Html';
import Quiz from './Quiz';
import Assignmentt from './Assignmentt';
import { FaCheck } from 'react-icons/fa'; 
import style from '../CSS/Ui.module.css';
 import Cquiz from "./Cquiz"


export default function Module() {
  const [expanded, setExpanded] = useState(false);
  const [activeModule, setActiveModule] = useState('first');
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
      <Container fluid style={{ marginTop: "20px", marginBottom: "20px" }}>
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
                          <Nav.Link href="#chapter1" onClick={() => handleNavLinkClick("chapter1")}> Video session
                         
                          {activeModule === "chapter1" && isRead.chapter1 && (
                            <FaCheck />
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
                          <Nav.Link onClick={() => handleNavLinkClick("tags")}>Introduction                       
                           {activeModule === "tags" && isRead.tags && (
                             <FaCheck style={{ marginLeft: '200px',display:"flex-end" }} />
                            )}
                          </Nav.Link>
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
                          <Nav.Link  onClick={() => handleNavLinkClick("chapter2")}>Tags</Nav.Link>
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
              <h4 style={{marginTop:"40px", color:"#294573"}}>C++ CONTENT</h4></Col>
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
            {activeModule === "first" && (
              <div style={{ width: '100%',height:"100%" ,marginTop:"0px"}} >
                <center>
                  <h1 className={style.heading}>  WELCOME !!!</h1>
                  <h5>Please check our modules for your further study and gain knowledge about your course. Best of Luck</h5> 
                </center> 
              </div>
            )}
            <div>
              {activeModule === "chapter1" && (
                <div style={{ width: '100%',height:"170%" ,marginTop:"0px"}} >
                  <iframe
                    title="YouTube Video"
                    width="100%"
                    height="300vh"
                    src="https://www.youtube.com/embed/yGB9jhsEsr8?si=9gYG3FPMVAUBZVyH"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  {activeModule === "chapter1" && !isRead.chapter1 && (
                    <button
                      style={{backgroundColor:"#294573",color:"whitesmoke" , justifyContent: "flex-end"}}
                      onClick={() => handleMarkAsRead("chapter1")}
                    >
                      Mark as Read
                    </button>
                  )}
                </div> 
              )}
            
              {activeModule === "tags" && (
                <div style={{ width: '100%', height: '400px' }}>
                  <iframe
                    title="PDF Viewer"
                    src="https://cplusplus.com/files/tutorial.pdf"
                    width="100%"
                    height="300vh"
                  ></iframe>
                  {activeModule === "tags" && !isRead.tags && (
                    <button 
                      style={{backgroundColor:"#294573",color:"whitesmoke" , justifyContent: "flex-end"}}
                      onClick={() => handleMarkAsRead("tags")}
                    >
                      Mark as Read
                    </button>
                  )}
                </div>
              )}
              {activeModule === "quiz" && (
                <Cquiz markAsRead={() => handleMarkAsRead("quiz")} />
              )}
              {activeModule === "assignment" && (
                <Html markAsRead={() => handleMarkAsRead("assignment")}/>
              )}
              {activeModule === "chapter2" && (
                 <iframe
                 title="PDF Viewer"
                 src="https://person.dibris.unige.it/moggi-eugenio/PG1-13/Cpp_reference.pdf"
                 width="100%"
                 height="300vh"
               ></iframe>
              )}
              {activeModule === "chapter2" && !isRead.chapter2 && (
                <button
                  style={{backgroundColor:"#294573",color:"whitesmoke" , justifyContent: "flex-end"}}
                  onClick={() => handleMarkAsRead("chapter2")}
                >
                  Mark as Read
                </button>
              )}

              {activeModule === "Assignmentt" && (
                <Assignmentt markAsRead={() => handleMarkAsRead("Assignmentt")} />
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
