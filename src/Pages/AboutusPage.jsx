import React from 'react'
import {Row, Col , Container} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
// import Contactus from './Contactus'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faPhoneAlt,faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Aboutus() {
  return (
    <>
   
         <div style={{backgroundColor:"#294573",color:"whitesmoke" , padding: "10px",  borderRadius : "5px",
    boxShadow  : "2px 2px 5px rgba(0, 0, 0, 0.1)"}}>
  <center> <h1 > <strong> <b>  About Study Hub</b></strong></h1></center>
   </div>
  
<br></br>
  
    <div style={ {marginTop:"2px"}} >
    <center>
    {/* <h2>  <strong> <b><i> Learning as it should be  </i></b> </strong></h2> */}
      </center>

        <center><font color="black"size="+1"> We organized a software tool that allows to managing online training content, <br></br>creating and delivering courses, and tracking your team's learning progress. </font></center>
        
 
<img src="https://img.freepik.com/premium-vector/freelance-airplane-people-work-airplane-freelance_491047-353.jpg" alt="Freelance airplane people work" style={{maxWidth: "100%", height:" auto",display:" block", margin: "0 auto"}}/>

    </div>

    <div style={{marginTop:"30px" }}>
    <center>

        <font color="black">
         <h2>  <strong> <b><i> Our Mision  </i></b> </strong></h2>
           <br></br>
 We believe every child on this planet should have equal access to great education.
               <br>
           </br>
           All student are unique. Each has a different pace of learning ,different interests and different goals. However, with limited time and resourses.
        <br></br>
        It's a challenge for educators to treate as individuals and cates to their varied needs.Our philosopy is that learning is personal journey. 
        <br></br>
        <bold>The Study hub was founded with the mission to enable everyone to learn in his or her own way.</bold>
        </font>
    </center>
    </div>

   <br></br> <br></br>
<div >

    <div style={{backgroundColor:"#294573",color:"whitesmoke"}} >
    <center>
    <h2>  <strong> <b><i> Our Team </i></b> </strong></h2>
    </center>
    <center><b> Teamwork makes the Dream Work </b>
<br></br> Welcome to the team! We are a group of passionate individuals work together to achieve our goals.<br></br> Get to know the faces behind our success.
</center>



                  <br></br>
                  <Row>
                <div  style={{overflowX: 'auto', display: 'flex'}}>
               
                    <Col style={{ display: 'inline-block', marginRight: '10px',marginLeft:"40px",marginTop:"15px" }}>
                   
                      <div style={{borderRadius:'100vh', height:'8rem',width:'8rem'}}>
                             <img style={{ borderRadius: "100vh",
    height:"8rem",
    width:"8rem",
    display: "inline-block",
    marginRight:"80px",
    marginLeft:"80px",
}}  src="src/assets/navreen.png" />
                       
                        </div>  <div style={{marginRight:"80px",marginLeft:"14vh"}}><b>Navreen Kaur</b></div>
                 
                   <div>
                
                    </div>
                    </Col>

                    <Col style={{ marginRight: '10px',marginLeft:"40px",marginTop:"15px" }}>
                   
                   <div style={{borderRadius:'100vh', height:'8rem',width:'8rem'}}>
                   <img style={{ borderRadius: "100vh",
    height:"8rem",
    width:"8rem",
    display: "inline-block",
    marginRight:"80px",
    marginLeft:"80px",
}}  src="src/assets/manmeet.png" />
                         </div>
                 <div style={{marginRight:"80px",marginLeft:"14vh"}}><b>Manmeet Kaur</b></div>
                <div>
                 
                 </div>

                 
                 </Col>

                 <Col style={{marginRight: '10px',marginLeft:"40px",marginTop:"15px" }}>
                   
                   <div style={{borderRadius:'100vh', height:'8rem',width:'8rem',marginRight:"10px"}}>
                     <img style={{ borderRadius: "100vh",
    height:"8rem",
    width:"8rem",
    display: "inline-block",
    marginRight:"80px",
    marginLeft:"80px",
}}  src="src/assets/Sanju.png" />
                 </div> 
                 <div style={{marginRight:"80px",marginLeft:"14vh"}}><b>Sanjot Kaur</b></div>
                 
                 </Col>
                 </div>
                    
                    </Row> 
                    <br></br>
                    <br></br>
                    <center>
                    <p>Please contact us if you wanted to know more about us</p></center>
                    <footer className="mt-5">
        <Container>
          <Row>
          <Col>
          <center>  <FontAwesomeIcon icon={faEnvelope} />
            
              <p>navreenkaur99@gmail.com</p></center>
            </Col>
            <Col>
              <center>
              <FontAwesomeIcon icon={faPhoneAlt} />
                                                 
                <p>Phone No :6283210462</p>
              </center>
            </Col>
            <Col> 
            <center> 
            <FontAwesomeIcon icon={faLocationDot} />
              <p>Address:khalsa college for women amritsar</p>
              </center>
            </Col>
          </Row>
        </Container>
      </footer>

                    </div>
                    </div>
                   
    </>
  )
}

