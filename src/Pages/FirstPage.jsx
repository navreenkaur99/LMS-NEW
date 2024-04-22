import style from '../CSS/Ui.module.css';
import React from 'react';
import logo from "/src/assets/iconn.jpeg"
import { Container,Col,Row, NavLink } from 'react-bootstrap';
// import { MdArrowForward } from 'react-icons/md';

import { Link } from 'react-router-dom';

export default function FirstPage() {
  return (
    <div data-aos="zoom-in-down" className={`${style.color} ${style.border}`}>
      <div className={style.color}>
        <div className="row position-relative">
          <div className="col-md-6">
          <div>
             <img
            //  style={{background:"red"}}
                src="https://play-lh.googleusercontent.com/QAK_YgkDVrnjdfJ3WIVtvKPo6JiYK_2ZoFUIcDq85ZF2QZT7kKugoTVL4GdC9NlOwZY=w600-h300-pc0xffffff-pd"
                // {logo}
                alt="Logo"
                width="200"
                height="88"
              /> 
            </div>
             
            <h3 style={ {marginTop:"15px", color:"#294573"}}>Study Hub </h3>
          
            <Col className={style.spacef} ><p style={{fontSize:"20px"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#294573" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>   Clean & Modern Design</p>
          </Col>
          <Col className={style.spacef}><p style={{fontSize:"20px"}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#294573" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>  Easy to Customize</p>
          </Col>
          <Col className={style.spacef}><p style={{fontSize:"20px"}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#294573" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>  Learning Management system</p>
          </Col>
          <Col className={style.spacef}><p style={{fontSize:"20px"}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#294573" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>  Well Documentation </p>
          </Col>
          
          <Col className={style.spacef}><p style={{fontSize:"20px"}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#294573" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>  Web & Mobile Ui</p>
          </Col>
          
           
            <p style={{fontSize:"18px"}}>
           We organized a software tool that allows you for managing online training content, creating and delivering courses, and tracking your team's learning progress
            </p>
          </div>
          <div className="col-md-6 position-relative">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/731/144/1/map-technology-hands-laptop-wallpaper-preview.jpg"
              className="img-fluid"
              alt="Marketing Analytics"
            />
            <div className="position-absolute top-0 end-0 m-3">
              <Link to="/login">
                <button className="me-2"
                style={{backgroundColor:"#294573",color:'white'}}>LOGIN</button>
              </Link>
              <Link to="/register">
                <button style={{backgroundColor:"#294573",color:'white'}}>Signup</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-5">
      <Container 
      // style={{backgroundColor:"#294573",color:"white"}}
      >
        <Row>
          {/* <Col>  
          <NavLink href='/About'>
           <h6>About Us</h6>
           </NavLink>
            </Col> */}
            <center>
          <Col>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
</svg>
          <NavLink href='/Contact'>
          <h5>Contact Us</h5></NavLink>

            </Col></center>
           </Row>
      </Container>
    </footer>
    </div>



  );
}



// import style from '../CSS/Ui.module.css';
// import React from 'react';
// import logo from "/src/assets/iconn.jpeg"

// import { Link } from 'react-router-dom';

// export default function FirstPage() {
//   return (
//     <div data-aos="zoom-in-down" className={style.color}>
//       <div className={style.color}>
//         <div className="row position-relative">
//           <div className="col-md-6">
//           <div>
//              <img
//              style={{background:"red"}}
//                 src={logo}
//                 alt="Kochiva Logo"
//                 width="100"
//                 height="60"
//               /> 
//             </div>
             
//             <b>A Learning Management System (LMS)</b>
//             <p>
//               A Learning Management System (LMS) is a platform that enables online education and eLearning by providing a framework to create, manage, and deliver learning content. LMS solutions reduce costs associated with traditional classroom training, printed materials, and travel expenses. LMS platforms also allow for easy integration of multimedia elements.
//             </p>
//             <p>
//               <strong>The best Learning Management System gives you the ability to keep track of learner progress and ensure that they are meeting their performance milestones.</strong>
//             </p>
//           </div>
//           <div className="col-md-6 position-relative">
//             <img
//               src="https://c4.wallpaperflare.com/wallpaper/731/144/1/map-technology-hands-laptop-wallpaper-preview.jpg"
//               className="img-fluid"
//               alt="Marketing Analytics"
//             />
//             <div className="position-absolute top-0 end-0 m-3">
//               <Link to="/Login">
//                 <button className="me-2"
//                 style={{backgroundColor:"black",color:'white'}}>LOGIN</button>
//               </Link>
//               <Link to="/Signup">
//                 <button style={{backgroundColor:"black",color:'white'}}>Signup</button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// import style from '../CSS/Ui.module.css';
// import React from 'react';
// import { Container, Navbar, Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// export default function FirstPage() {
//   return (
//     <div data-aos="zoom-in-down" className={style.color}>
//       <Navbar >
//         <Navbar.Brand href="#home">
//           <img
//             src="https://t3.ftcdn.net/jpg/02/97/30/40/240_F_297304005_XWvkIP998kpS8AyBjvVqgGT27fZfyT1L.jpg"
//             width="150px"
//             height="90px"
//             className="d-inline-block align-top"
//             alt="React Bootstrap logo"
//           />
//         </Navbar.Brand>
        
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             {/* Your other navbar links here */}
//           </Nav>
//           {/* Move login and signup buttons here */}
//           <Nav>
//             <Nav.Link>
//               <Link to="/Login">
//                 <button className="btn btn-primary">LOGIN</button>
//               </Link>
//             </Nav.Link>
//             <Nav.Link>
//               <Link to="/Signup">
//                 <button className="btn btn-info">Signup</button>
//               </Link>
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>

//       {/* <Container className={style.color}> */}
//         <div className="row">
//           <div className="col-md-6">
//             <b>A Learning Management System (LMS)</b>
//             <p>
//               A Learning Management System (LMS) is a platform that enables online education and eLearning by providing a framework to create, manage, and deliver learning content. LMS solutions reduce costs associated with traditional classroom training, printed materials, and travel expenses. LMS platforms also allow for easy integration of multimedia elements.
//             </p>
//             <p>
//               <strong>The best Learning Management System gives you the ability to keep track of learner progress and ensure that they are meeting their performance milestones.</strong>
//             </p>
//           </div>
//           <div className="col-md-6">
//             <img
//             style={{borderRadius:"20px"}}
//               src="https://c4.wallpaperflare.com/wallpaper/731/144/1/map-technology-hands-laptop-wallpaper-preview.jpg"
//               className="img-fluid"
//               alt="Marketing Analytics"
//             />
//           </div>
//         </div>
//       {/* </Container> */}
//     </div>
//   );
// }

// import style from '../CSS/Ui.module.css';


// import React from 'react';
// import { Container, Row, Col, Navbar, Nav, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// export default function FirstPage() {
//   return (
//     <div data-aos="zoom-in-down" className={style.color} >
//       <Navbar>
//         <Navbar.Brand href="#home">
//           <img
//             src="https://t3.ftcdn.net/jpg/02/97/30/40/240_F_297304005_XWvkIP998kpS8AyBjvVqgGT27fZfyT1L.jpg"
//             width="150px"
//             height="90px"
//             className="d-inline-block align-top"
//             alt="React Bootstrap logo"
//           />
//         </Navbar.Brand>
        
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link>
//               <Link to="/Login">
//                 <button >LOGIN</button>
//               </Link>
//             </Nav.Link>
//             <Nav.Link>
//               <Link to="/Signup">
//                 <button className="btn btn-info me-md-2">Signup</button>
//               </Link>
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>

//       {/* <Container className={style.color} > */}
//         <Row>
//           <Col md={6}>
//                   <b>A Learning Management System (LMS)</b>
//                   A Learning Management System (LMS) is a platform that enables
//                   online education and eLearning by providing a framework to
//                   create, manage, and deliver learning content.
//                   <br />
//                   LMS solutions reduce costs associated with traditional
//                   classroom training, printed materials, and travel expenses.
//                   LMS platforms also allow for easy integration of multimedia
//                   elements.
//                   <br />
//                   <strong>
//                     The best Learning Management System gives you the ability
//                     to keep track of learner progress and ensure that they are
//                     meeting their performance milestones.
//                   </strong>
                 
//           </Col>
//           <Col >
//             <img
//     src='https://c4.wallpaperflare.com/wallpaper/731/144/1/map-technology-hands-laptop-wallpaper-preview.jpg'
    
//               width={600}
              
//               alt="Marketing Analytics"
//             />
//           </Col>
//         </Row>
//       {/* </Container> */}
//     </div>
//   );
// }




// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import style from '../CSS/Ui.module.css';
// export default function HomePage() {
//     const Navigate = useNavigate();
//     const [isHovered, setIsHovered] = useState(false);
//     const [login, setLogin] = useState(false);
//     const [signup, setSignup] = useState(false);

//     const buttonStyle = {
//         backgroundColor: 'purple',
//         color: 'white',
//         borderColor: 'white',
//         width: '18vh',
//         transition: 'background-color 0.3s, border-color 0.3s'
//     };

//     const handleHover = () => {
//         setIsHovered(true);
//     };

//     const handleMouseLeave = () => {
//         setIsHovered(false);
//     };

//     const handleLoginClick = () => {
//         Navigate('/login');
//     };

//     const handleSignupClick = () => {
//         Navigate('/Ui');
//     };

//     return (
//         <div>
//             <nav className='bg-white-700 px-4 py-4 flex justify-between'>
//                 <div data-aos="fade-right" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-once="false">
//                     <div className='flex items-center text-xl'>
//                         <img className={style.logo} src="https://t3.ftcdn.net/jpg/02/97/30/40/240_F_297304005_XWvkIP998kpS8AyBjvVqgGT27fZfyT1L.jpg" alt='CodeEdu Logo' />
//                         <span className=' font-semibold' style={{ fontSize: "32px", fontWeight: "bolder", transform: "translateX(-25%)" }}>Code</span><span style={{ color: "#77368a", fontSize: "32px", fontWeight: "bold", transform: "translateX(-35%)" }}>Edu</span>
//                     </div>
//                 </div>

//                 <div className='flex items-center gap-x-5'>
//                     <div className='relative'>
//                         <button
//                             onClick={handleSignupClick}
//                             type="button"
//                             style={{
//                                 ...buttonStyle,
//                                 backgroundColor: signup ? '#6f42c1' : '#581c87',
//                                 borderColor: signup ? '#6f42c1' : 'white'
//                             }}
//                             onMouseEnter={() => setSignup(true)}
//                             onMouseLeave={() => setSignup(false)}
//                             className="btn"
//                         >
//                             Sign up
//                         </button>
//                     </div>
//                     <div className='flex items-center gap-x-5'>
//                         <div className='relative'>
//                             <button
//                                 onClick={handleLoginClick}
//                                 type="button"
//                                 style={{
//                                     ...buttonStyle,
//                                     backgroundColor: login ? '#6f42c1' : '#581c87',
//                                     borderColor: login ? '#6f42c1' : 'white'
//                                 }}
//                                 onMouseEnter={() => setLogin(true)}
//                                 onMouseLeave={() => setLogin(false)}
//                                 className="btn"
//                             >
//                                 Log in
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </nav>

//             <div>
//                 <div>
//                     <div className={style.image}>
//                         <div style={{ fontSize: "47px", paddingTop: "7vh", paddingLeft: "5vh" }}>
//                             <span style={{ color: "#581c87", }}>L</span><span style={{ color: "black" }}>everage,</span> <span style={{ color: "#581c87" }}>M</span><span style={{ color: "black" }}>aster,</span><span style={{ color: "#581c87" }}> S</span><span style={{ color: "black" }}>ucceed
//                             <br></br>
//                             Explore Our <span style={{ color: "#581c87", }}>CodeEdu's</span> Learning
//                             <br></br>
//                             Platform!</span>

//                         </div>
//                         <div style={{ fontSize: "19.7px", paddingTop: "2vh", paddingLeft: "5vh", color: "black" }}>
//                             <p>Welcome to our innovative online learning platform, where knowledge knows</p>
//                             <p>no bounds. Explore a dynamic space designed to empower and inspire</p>
//                             <p>learners of all backgrounds. Join us on a journey of discovery, growth, and</p>
//                             <p>achievement,as we pave the way for a brighter future together!</p>
//                         </div>
//                         <div style={{ paddingTop: "4vh", paddingLeft: "5vh" }}>
//                             <button
//                                 onClick={handleLoginClick}
//                                 type="button"
//                                 style={{
//                                     ...buttonStyle,
//                                     backgroundColor: isHovered ? '#6f42c1' : '#581c87',
//                                     borderColor: isHovered ? '#6f42c1' : 'white'
//                                 }}
//                                 onMouseEnter={handleHover}
//                                 onMouseLeave={handleMouseLeave}
//                                 className="btn"
//                             >
//                                 Get Started
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


// import React from 'react'
// import Card from "react-bootstrap/Card";
// import { Table, Row, Col, Container } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import { Link } from 'react-router-dom';

// export default function Firstpage() {
//   return (<>
   
//    <div data-aos="zoom-in-down">

   
//    <Navbar >
                            
//                     <Navbar.Brand href="#home">
//                        {/* <div className={style.licon}> */}
//                        <div>
//                         <img
//                             src="https://t3.ftcdn.net/jpg/02/97/30/40/240_F_297304005_XWvkIP998kpS8AyBjvVqgGT27fZfyT1L.jpg"
//                             width="150px"
//                             height="90px"
//                             className="d-inline-block align-top"
//                             alt="React Bootstrap logo"
//                         />
//                         </div>
//                     </Navbar.Brand>
//                     <Navbar.Toggle />
                    
//       {/* <h3> Welcome to My Learning Platform</h3>    add in motion */}
//                     <Navbar.Toggle 
//                         aria-controls="responsive-navbar-nav" />
//                     <Navbar.Collapse id="responsive-navbar-nav">
//                                               <Nav className="me-auto">
                           
//                             <Nav.Link>
// <div>
//                             {/* <div className={style.lbutton}> */}
//                             <Link to="/Login">   <button class="btn btn-info me-md-2">LOGIN</button>
//                             </Link> </div>
//                             </Nav.Link>

                            
//                             <Nav.Link>

//                             <Link to="/Signup">
//                                <button class="btn btn-info me-md-2">Signup</button>
//                                </Link>
//                             </Nav.Link>
                            
//                         </Nav>
                        
//                     </Navbar.Collapse>
               
//             </Navbar>



//         {/* <div className={style.ftext}> */}
//         <div>
//             <p>
// <b>
// A Learning Management System LMS is a platform that enables online education and eLearning by providing a framework to create, manage, and deliver learning content. 

// LMS solutions reduce costs associated with traditional classroom training, printed materials, and travel expenses.

// LMS platforms also allow for easy integration of multimedia elements.
// </b>  </p>  <br/>
// <strong>
// The best Learning Management System gives you the ability to keep track of learner progress and ensure that they are meeting their performance milestones. 
// <hr/>
// Instead of having your eLearning content spread out over different hard drives and devices, you can store all of your eLearning materials in one location.
// <center>
//     <br/>
// A Learning Management System can even reduce online training times, thanks to the fact that it gives online learners only the information they need in a direct and organized manner. Instead of having to sit through a lengthy half-hour online training course, online learners can simply click on the online modules they need and absorb the knowledge in a fraction of the time.
// </center> </strong>
// </div>



//     <div >
//     <div className="mt-3">
//     {/* <div className={style.centered}>  <h1> <strong><i>Start Learning</i></strong></h1> </div> */}

    
// </div>

// <div >    <img src='https://www.lftfield.com/wp-content/uploads/Marketing-Analytics-LFTFIELD-Inc-1024x574.png' width={800}>
//     </img>
    
//     </div>

   



//    <br/><br/><br/>
//     {/* <Footer/>  */}
    
//     </div>
//     </div>
//     </>
//   )
// }


// import logo from '../assets/CodeEdu.png'
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
//  import style from '../CSS/Ui.module.css';

//  import style from'../css/homepage.module.css'
// export default function HomePage() {
//     const Navigate = useNavigate();
//     const [isHovered, setIsHovered] = useState(false);
//     const[login,setlogin] = useState(false);
//     const[signup,setsignup] = useState(false);
//     const buttonStyle = {
//       backgroundColor: 'purple',
//       color: 'white',
//       borderColor: 'white',
//       width: '18vh',
//       transition: 'background-color 0.3s, border-color 0.3s'
//     };

//     const buttonStyle1 = {
//         backgroundColor: 'purple',
//         color: 'white',
//         borderColor: 'black',
//         width: '18vh',
//         transition: 'background-color 0.3s, border-color 0.3s'
//       };
  
//     const handleHover = () => {
//       setIsHovered(true);
//     };
  
//     const handleMouseLeave = () => {
//       setIsHovered(false);
//     };

//     const handleHover1 = () => {
//         setlogin(true);
//       };
    
//       const handleMouseLeave1 = () => {
//           setlogin(false);
//       };
//       const handleHover2 = () => {
//         setsignup(true);
//       };
    
//       const handleMouseLeave2 = () => {
//           setsignup(false);
//       };
//   return (
//     <div>
//         <nav className='bg-white-700 px-4 py-4 flex justify-between'>
//         <div data-aos="fade-right" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"  data-aos-once="false" >
//         <div className='flex items-center text-xl'>

//          <img className={style.logo}src="data:image/jpeg;base64,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" alt=' hhhh'/>
//          <span className=' font-semibold' style={{ fontSize:"32px", fontWeight:"bolder" ,transform: "translateX(-25%)" }}>Code</span><span style={{color:"#77368a", fontSize:"32px" ,fontWeight:"bold",transform: "translateX(-35%)"}}>Edu</span>
//         </div>
//         </div>

//         <div className='flex items-center gap-x-5'>
//           {/* Search bar */}
//           <div className='relative'>
//           <button
//         onClick={()=>
//         {
//             Navigate('/Ui')
//         }}
//       type="button"
//       style={{
//         ...buttonStyle1,
//         backgroundColor: signup ? '#6f42c1' : '#581c87',
//         borderColor: signup ? '#6f42c1' : 'white'
//       }}
//       onMouseEnter={handleHover2}
//       onMouseLeave={handleMouseLeave2}
//       className="btn"
//     >
//       Sign up
//     </button>
//             </div>
//           {/* User profile */}
//           <div className='flex items-center gap-x-5'>
//             <div className='relative'>
//             <button
//         onClick={()=>
//         {
//             Navigate('/login')
//         }}
//       type="button"
//       style={{
//         ...buttonStyle1,
//         backgroundColor: login ? '#6f42c1' : '#581c87',
//         borderColor: login ? '#6f42c1' : 'white'
//       }}
//       onMouseEnter={handleHover1}
//       onMouseLeave={handleMouseLeave1}
//       className="btn"
//     >
//       Log in
//     </button>
//             </div>
//           </div>
//         </div>
//       </nav>

      

//         <div >
//           <div>
//        <div className={style.image} > 
//        {/* <div> */}
//       {/* <div data-aos="fade-up" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"  data-aos-once="false" data-aos-anchor-placement="top-center"> */}
//         <div style={{fontSize:"47px",paddingTop:"7vh" ,paddingLeft:"5vh"}}>
//        <span style={{color:"#581c87", }}>L</span><span style={{color:"black"}}>everage,</span> <span style={{color:"#581c87" }}>M</span ><span style={{color:"black"}}>aster,</span><span style={{color:"#581c87" }}> S</span><span style={{color:"black"}}>ucceed
//         <br></br>
//          Explore Our <span style={{color:"#581c87", }}>CodeEdu's</span> Learning 
//          <br></br>
//          Platform!</span>
        
//          </div>
//          <div  style={{fontSize:"19.7px",paddingTop:"2vh" ,paddingLeft:"5vh", color:"black"}}>
//          <p >Welcome to our innovative online learning platform, where knowledge knows</p>
//          <p>  no bounds. Explore a dynamic space designed to empower and inspire</p>
//          <p> learners of all backgrounds. Join us on a journey of discovery, growth, and</p>
//          <p>achievement,as we pave the way for a brighter future together!</p>
//         </div>
//         <div style={{paddingTop:"4vh", paddingLeft:"5vh"}}>
//         <button
//         onClick={()=>
//         {
//             Navigate('/login')
//         }}
//       type="button"
//       style={{
//         ...buttonStyle,
//         backgroundColor: isHovered ? '#6f42c1' : '#581c87',
//         borderColor: isHovered ? '#6f42c1' : 'white'
//       }}
//       onMouseEnter={handleHover}
//       onMouseLeave={handleMouseLeave}
//       className="btn"
//     >
//       Get Started
//     </button>



//         </div>
//         </div>
//         </div>
     
//        </div>
//     </div>
//   )
// }

// import React, { useState } from 'react';
// import { Container, Row, Col, Image, Card, Form, Button } from 'react-bootstrap';
// import style from '../CSS/Ui.module.css';
// import { useNavigate } from 'react-router-dom';
// import * as Yup from 'yup';

// export default function LoginPage() {
//   const [isHovered, setIsHovered] = useState(false);
//   const [pass, setPass] = useState('password');
//   const [iconColor, setIconColor] = useState('currentColor');
//   const [buttonStatus, setButtonStatus] = useState(false);
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [error, setError] = useState({ password: '', email: '' });

//   const navigate = useNavigate();

//   const handleHover = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   const handlleClick = () => {
//     setIconColor(iconColor === 'currentColor' ? 'Darkblue' : 'currentColor');
//     setPass(pass === 'password' ? 'text' : 'password');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await validationSchema.validate(formData, { abortEarly: false });
//       setError({ email: '', password: '' });
//       setButtonStatus(true);
//     } catch (errors) {
//       const newError = {};
//       errors.inner.forEach((err) => {
//         newError[err.path] = err.message;
//       });
//       setError(newError);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const buttonStyle = {
//     width: '12vh',
//     transition: 'background-color 0.3s, border-color 0.3s',
//   };

//   const validationSchema = Yup.object({
//     email: Yup.string()
//       .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Invalid email format')
//       .required('Please enter email'),

//     password: Yup.string().required('Please enter password'),
//   });

//   return (
//     <>
//       <div
//         style={{
//           backgroundImage:
//             'URL(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5pJQypNM4pvdYFEdb_8T2Vcl1TFa13XCPOA&s)',
//           backgroundRepeat: 'no-repeat',
//           backgroundSize: 'cover',
//         }}
//       >
//         <Container className={style.root}>
//           <div className="transparent-card-container">
//             <Card>
//               <Card.Body>
//                 <Row>
//                   <Col>
//                     <span>
//                       <Image
//                         className={style.img}
//                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmXWk9i9hpjeNrkkoll1Bld0PuwGKzz7X7LQ&usqp=CAU"
//                       />
//                     </span>
//                     <Image
//                       className={style.img}
//                       src="https://rukminim2.flixcart.com/image/850/1000/k8q8nm80/poster/s/r/w/small-motivational-poster-for-study-room-motivational-poster-for-original-imafqzjf36re9jgh.jpeg?q=90&crop=false"
//                       thumbnail
//                     />
//                   </Col>
//                   <Col>
//                     <h2 className={style.heading}>Login into your account</h2>
//                     <Form onSubmit={handleSubmit}>
//                       <Form.Group className="mb-3" controlId="formBasicEmail">
//                         <Form.Label>Email address</Form.Label>
//                         <Form.Control
//                           type="email"
//                           placeholder="Enter email"
//                           value={formData.email}
//                           onChange={handleChange}
//                           name="email"
//                         />
//                         <Form.Text className="text-danger">{error.email}</Form.Text>
//                       </Form.Group>

//                       <Form.Group className="mb-3" controlId="formBasicPassword">
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control
//                           type={pass}
//                           placeholder="Password"
//                           value={formData.password}
//                           onChange={handleChange}
//                           name="password"
//                         />
//                         <Form.Text className="text-danger">{error.password}</Form.Text>
//                       </Form.Group>

//                       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                         <Form.Check type="checkbox" label="Remember me" />
//                       </Form.Group>

//                       <Button
//                         type="submit"
//                         style={buttonStyle}
//                         onMouseEnter={handleHover}
//                         onMouseLeave={handleMouseLeave}
//                         variant={isHovered ? 'primary' : 'secondary'}
//                         disabled={!buttonStatus}
//                       >
//                         Login
//                       </Button>
//                     </Form>
//                   </Col>
//                 </Row>
//               </Card.Body>
//             </Card>
//           </div>
//         </Container>
//       </div>
//     </>
//   );
// }



