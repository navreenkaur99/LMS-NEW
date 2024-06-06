import style from '../CSS/Ui.module.css';
import React from 'react';
import logo from "/src/assets/iconn.jpeg"
import { Container,Col,Row, NavLink } from 'react-bootstrap';
// import { MdArrowForward } from 'react-icons/md';

import { Link } from 'react-router-dom';

export default function FirstPage() {
  return (
    // <div data-aos="zoom-in-down" className={`${style.color} ${style.border}`}>
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
           We organized a software tool that allows to managing online training content, creating and delivering courses, and tracking your team's learning progress
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
      {/* </div> */}
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
          <NavLink href='/about'>
          <h5>About Us</h5></NavLink>

            </Col></center>
           </Row>
      </Container>
    </footer>
    </div>



  );
}


