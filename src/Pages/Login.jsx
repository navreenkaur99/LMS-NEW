import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import style from '../CSS/Ui.module.css'

export default function Dashb() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/login", { email, password })
            .then(result => {
                console.log(result);
                if (result.data.success) {
                    // Check user type from response data
                    const userType = result.data.userType;
                    if (userType === "User") {
                        console.log("User logged in");
                        navigate("/dashboard");
                    } else if (userType === "Admin") {
                        console.log("Admin logged in");
                        navigate("/admin");
                    } else {
                        console.log("Unknown user type");
                        // Handle unknown user type
                    }
                } else {
                    window.alert("Login failed ")
                    console.log("Login failed:", result.data.message);
                    // Handle login failure
                }
            })
            .catch(err => {
                console.error("Error logging in:", err);
            });
    }

    const cardStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Adjust the alpha value for transparency
        border: 'none', // Remove border if needed
      };
    
    return (
        <div style={{ backgroundImage: 'URL(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5pJQypNM4pvdYFEdb_8T2Vcl1TFa13XCPOA&s)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <Container className={style.root}>
                <div className="transparent-card-container">
                    <Card style={cardStyle}>
                        <Card.Body className={style.card}>
                            <Row style={{marginLeft:"10px",marginRight:"10px"}}>
                                <Col> 
                                    <center>
                                        <header>
                                            <h3  style={{marginTop:"20px",marginBottom:"30px"}}  className={style.header}>Log in to your account</h3>
                                        </header>
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <FontAwesomeIcon icon={faEnvelope} />
                                                    </span>
                                                    <Form.Control
                                                        type="email"
                                                        placeholder="Enter email"
                                                        name="email"
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </div>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <FontAwesomeIcon icon={faLock} />
                                                    </span>
                                                    <Form.Control
                                                        type="password"
                                                        placeholder="Password"
                                                        name="password"
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                </div>
                                            </Form.Group>
                                            <div className="d-grid gap-2">
                                                <Button type="submit"
                                                    style={{backgroundColor:"#294573",color:"white",marginTop:"20px"}}
                                                    variant="primary">
                                                    Log in
                                                </Button>
                                            </div>
                                        </Form>
                                        <div style={{marginTop:"20px"}}>
                                            <NavLink to="/Register">Not have account? Register</NavLink>
                                        </div>
                                    </center>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </div>
    );
}


