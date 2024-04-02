import React from 'react'
import Profile from './Profile'
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./CSS/Ui.module.css";
// import { Link } from 'react-router-dom'; // Assuming you're using React Router


export default function Language() {
  return (
    <>
<Profile/>
<h3 className={style.space}>Language courses</h3>
<Row className={style.space}> 

<Col>
        <Card  style={{ width: '18rem'}}>
      <Row>
        <Col    xs={6}>
          <Card.Img  style={{height:"7rem"}} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-G7K4-q2sSnpAobvMWegjHK4f0NmrzniwRQ&usqp=CAU" />
        </Col>
        <Col xs={6}>
          <Card.Body>
            <h6> It courses</h6> 
           </Card.Body>
        </Col>
        
      </Row>
    </Card>
    </Col>

    <Col >
        <Card  style={{ width: '18rem'}}>
      <Row>
        <Col    xs={6}>
          <Card.Img style={{height:"7rem"}}variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-G7K4-q2sSnpAobvMWegjHK4f0NmrzniwRQ&usqp=CAU" />
        </Col>
        <Col xs={6}>
          <Card.Body>
            <h6> Language courses</h6> 
             </Card.Body>
        </Col>
        
      </Row>
    </Card>
    </Col>


    <Col >
        <Card  style={{ width: '18rem'}}>
      <Row>
        <Col    xs={6}>
          <Card.Img style={{height:"7rem"}}variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-G7K4-q2sSnpAobvMWegjHK4f0NmrzniwRQ&usqp=CAU" />
        </Col>
        <Col xs={6}>
          <Card.Body>
            <h6> Language courses</h6> 
             </Card.Body>
        </Col>
        
      </Row>
    </Card>
    </Col>
    <Col >
        <Card  style={{ width: '18rem'}}>
      <Row>
        <Col    xs={6}>
          <Card.Img style={{height:"7rem"}}variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-G7K4-q2sSnpAobvMWegjHK4f0NmrzniwRQ&usqp=CAU" />
        </Col>
        <Col xs={6}>
          <Card.Body>
            <h6> Language courses</h6> 
             </Card.Body>
        </Col>
        
      </Row>
    </Card>
    </Col>
   
    </Row>



    </>
    )
}
