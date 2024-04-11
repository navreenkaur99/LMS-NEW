import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Table, Row, Col, Container } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import { Link, NavLink } from "react-router-dom";
import style from "./CSS/Ui.module.css"
import { useState } from "react";
export default function Dashb() {
  const[buttonClicked, setbuttonClicked] = useState(true);
  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Adjust the alpha value for transparency
    border: 'none', // Remove border if needed
    // width: '300px' // Adjust width as needed
  };

return (
    <>
      <div style={{backgroundImage:'URL(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5pJQypNM4pvdYFEdb_8T2Vcl1TFa13XCPOA&s)',backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>      <Container  className={style.root}>
      <div className="transparent-card-container">
       <Card style={cardStyle}>
      {/* <Card> */}
          <Card.Body className={style.card}>
            <Row>
              <Col>
              <span> 
                <Image className={style.img}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmXWk9i9hpjeNrkkoll1Bld0PuwGKzz7X7LQ&usqp=CAU"/></span>

                <Image className={style.img}
                  src="https://rukminim2.flixcart.com/image/850/1000/k8q8nm80/poster/s/r/w/small-motivational-poster-for-study-room-motivational-poster-for-original-imafqzjf36re9jgh.jpeg?q=90&crop=false"
                  thumbnail
                />
              </Col>

              <Col>
               <Col>
                  <Row>

                    <header>
                <h1 className={style.header}>        Sign in to your account</h1>
      </header>



                    {/* <Form.Label >Email id</Form.Label> */}
                    <Form.Control
                      required
                      type="text"
                      placeholder="Email"
                    />
                   
                    <p>Enter the Email or Registered number</p>
                    {/* <Form.Label >Password</Form.Label> */}
                    <Form.Control
                      required
                      type="password"
                      placeholder="Password"
                    />
                      <Link to="/Ui">
                      <div className="d-grid gap-2">
   
        
      <Button style={{marginTop:"20px",}} variant="primary" onClick={()=>{}}>Login</Button>{' '}
      </div>
                      </Link> 
                      
                      <NavLink to="/Register">
                      Not have account ?Register
                    </NavLink>
                  </Row>
                </Col>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        </div>
      </Container>
      </div>
      

      {/* :   <ShimmerThumbnail height={250} rounded /> } */}
    </>
  );
}
