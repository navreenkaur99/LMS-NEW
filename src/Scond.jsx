
import style from "./CSS/Ui.module.css";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";
import list from "./list.json"
import { Container, Row, Col, Card } from 'react-bootstrap';


export default function Scond() {
  const [isOpen, setIsOpen] = useState(false);

  return (
   

<>





<nav className="navbar bg-body-tertiary">
          <div className="container">
            <a className="navbar-brand" href="#">
              <Image
                src="https://kochiva.com/wp-content/themes/Kochiva/kasset/assets/kochiva-logo.svg"
                alt="Kochiva Logo"
                width="100"
                height="50"
              />
            </a>
            <div className={style.top}>
              {/* <Row> */}
              <div >
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135789.png"
        width="50"
        height="30"
      alt="User Thumbnail" className="userthumb" />
        <span style={{marginRight:'45px',fontSize:"14px"}}>Navreenkaur99@gmail.com</span>
      </div>
                 {/* <Col> */}
                <button className={style.dropdown} onClick={() => setIsOpen((prev) => !prev)}>
                  <Image
                    src="https://cdn.vectorstock.com/i/1000x1000/91/84/modern-menu-icon-for-mobile-apps-and-websites-vector-16849184.webp"
                    alt="Menu Icon"
                    width="50"
                    height="30"
                  />
                  {!isOpen ? (
                    <AiOutlineCaretDown className="h-8" />
                  ) : (
                    <AiOutlineCaretUp className="h-8" />
                  )}
                </button>

                {isOpen && (
                  <div className={style.button}>
                    {list.map((item ) => (
                      <div className={style.down} key={item}>
                        <h6>{item.city}</h6>
                        </div>
                    ))}
                  </div>                  
 
                )}
               
            
              
               
                
                {/* </Col> */}
                {/* </Row> */}
                </div>
          </div>
        </nav>

 {/*
<div class="container-fluid mt-3">
  <div class="row">
    <div class="col-md-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Total Users</h5>
          <p class="card-text">500</p>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Revenue</h5>
          <p class="card-text">$10,000</p>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Orders</h5>
          <p class="card-text">200</p>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Visitors</h5>
          <p class="card-text">1000</p>
        </div>
      </div>
    </div>
  </div>
</div>
<nav class="navbar navbar-expand-lg navbar-light bg-light side-nav"> */}
  {/* <a class="navbar-brand" href="#">Dashboard</a> */}
  {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> */}

  <div style={{backgroundColor:"rgb(63, 126, 182" ,borderRadius:"10px", width:"150px"}} >
    <ul class="navbar-nav flex-column">
       {/* <li class="nav-item">
         <a class="nav-link active" href="#">Dashboard</a> 
      </li> */}
      <li class="nav-item"> 
        <a class="nav-link" href="#">Introduction</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Chapter 1</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Chapter 2</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Chapter 2</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Chapter 2</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Chapter 2</a>
      </li>
     

    </ul>
  </div>
{/* </nav> */}

{/* <!-- Page Content --> */}
{/* <div class="content">
  <h1>Dashboard</h1>
  <p>Welcome to your dashboard.</p>
</div> */}

<div style={{display:"flex", justifyItems:"right"}}>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Dashboard</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Settings</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Logout</a>
      </li>
    </ul>
  </div>
</nav>
</div>


    <Container fluid>
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>
                This is some text within a card.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>
                This is some text within a card.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Card 3</Card.Title>
              <Card.Text>
                This is some text within a card.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>


</>
)
}
