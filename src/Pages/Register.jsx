import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate, NavLink } from 'react-router-dom';
import style from '../CSS/Ui.module.css';
import Card from "react-bootstrap/Card";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faLock, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

export default function Dashb() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [Number, setNumber] = useState("");

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showNameAlert, setShowNameAlert] = useState(false);
    const [showEmailAlert, setShowEmailAlert] = useState(false);
    const [showNumberAlert, setShowNumberAlert] = useState(false);
    const [showPasswordAlert, setShowPasswordAlert] = useState(false);
    const [showConfirmPasswordAlert, setShowConfirmPasswordAlert] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(true); 
    const [userType, setUserType] = useState("");
    const [secretKey, setSecretKey] = useState("");
    // const [secretKey1, setSecretKey1] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        let newAlerts = {};
        
        if (!name) {
            newAlerts.name = true;
        }
        if (!email) {
            newAlerts.email = true;
        }
        if (!Number) {
            newAlerts.Number = true;
        }
        if (!password) {
            newAlerts.password = true;
        } else if (password.length < 8) {
            newAlerts.passwordLength = true;
        }
        if (!confirmPassword) {
            newAlerts.confirmPassword = true;
        } else if (password !== confirmPassword) {
            newAlerts.passwordMismatch = true;
            setPasswordsMatch(false); 
        } else {
            setPasswordsMatch(true); 
        }

        setShowNameAlert(newAlerts.name || false);
        setShowEmailAlert(newAlerts.email || false);
        setShowNumberAlert(newAlerts.Number || false);
        setShowPasswordAlert(newAlerts.password || newAlerts.passwordLength || false);
        setShowConfirmPasswordAlert(newAlerts.confirmPassword || newAlerts.passwordMismatch || false);

        if (Object.values(newAlerts).some(alert => alert)) {
            return;
        }

        if (!passwordsMatch) {
            return;
        }

        if (userType === "Admin" && secretKey !== "studyhub") {
            alert("Invalid Admin Secret Key");
            return;
        }
        // if (userType === "User" && secretKey1 !== "study") {
        //     alert("Invalid Admin Secret Key");
        //     return;
        // }
        

        axios.post("http://localhost:4000/register", { name, email, password,Number, userType  })
            .then(result => {
                console.log(result);
                navigate("/login");
                console.log({ name });
                console.log({ email });
                console.log({Number})
            })
            .catch(err => console.log(err));
    };

    const cardStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        border: 'none',
    };

    return (
        <div style={{ backgroundImage: 'URL(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5pJQypNM4pvdYFEdb_8T2Vcl1TFa13XCPOA&s)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <Container className={style.root}>
                <div className="transparent-card-container">
                    <Card style={cardStyle}>
                        <Card.Body className={style.card}>
                            <Row style={{ marginLeft: "10px", marginRight: "10px" }}>
                                <Col>
                                    <center>
                                        <header>
                                            <h3 style={{ marginTop: "20px", marginBottom: "30px" }} className={style.header}>Sign up your account</h3>
                                        </header>
                                        <Form onSubmit={handleSubmit}>
                                            <div>
                                                Register As
                                                <input type="radio" name="UserType" value="User" onChange={(e) => setUserType(e.target.value)} />
                                                User
                                                <input type="radio" name="UserType" value="Admin" onChange={(e) => setUserType(e.target.value)} />
                                                Admin
                                            </div>
                                            {userType === "Admin" ?
                                            
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <div className="input-group">
                                              <span className="input-group-text">
                                                  <FontAwesomeIcon icon={faLock} />
                                              </span>
                                                    <Form.Control
                                                        type="password"
                                                        placeholder="Enter secret key"
                                                        name="secretkey"
                                                        onChange={(e) => setSecretKey(e.target.value)}
                                                    /></div>
                                                </Form.Group> : null}
                                                {/* {userType === "User" ?
                                            
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <div className="input-group">
                                              <span className="input-group-text">
                                                  <FontAwesomeIcon icon={faLock} />
                                              </span>
                                                    <Form.Control
                                                        type="password"
                                                        placeholder="Enter secret key"
                                                        name="secretkey1"
                                                        onChange={(e) => setSecretKey1(e.target.value)}
                                                    /></div>
                                                </Form.Group> : null} */}
                                            <Form.Group className="mb-3" controlId="formBasicname">
                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <FontAwesomeIcon icon={faUser} />
                                                    </span>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Enter your name"
                                                        name="name"
                                                        onChange={(e) => setName(e.target.value)}
                                                    />
                                                </div>
                                                {showNameAlert && !name && (
                                                    <p style={{ color: "red", marginTop: "5px", marginBottom: "0" }}>Please enter your name.</p>
                                                )}
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <FontAwesomeIcon icon={faEnvelope} />
                                                    </span>
                                                    <Form.Control
                                                        type="email"
                                                        placeholder="Enter Email"
                                                        name="email"
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </div>
                                                {showEmailAlert && !email && (
                                                    <p style={{ color: "red", marginTop: "5px", marginBottom: "0" }}>Please enter your email.</p>
                                                )}
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <FontAwesomeIcon icon={faPhoneAlt} />
                                                    </span>
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Enter contact number"
                                                        name="number"
                                                        onChange={(e) => setNumber(e.target.value)}
                                                    />
                                                </div>
                                                {showNumberAlert && !Number && (
                                                    <p style={{ color: "red", marginTop: "5px", marginBottom: "0" }}>Please enter your Number.</p>
                                                )}
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <FontAwesomeIcon icon={faLock} />
                                                    </span>
                                                    <Form.Control
                                                        type="password"
                                                        placeholder="Enter Password"
                                                        name="password"
                                                        onChange={(e) => setPassword(e.target.value)}
                                                    />
                                                </div>
                                                {showPasswordAlert && !password && (
                                                    <p style={{ color: "red", marginTop: "5px", marginBottom: "0" }}>Please enter your password.</p>
                                                )}
                                                {showPasswordAlert && password && password.length < 8 && (
                                                    <p style={{ color: "red", marginTop: "5px", marginBottom: "0" }}>Password must be at least 8 characters long.</p>
                                                )}
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                                                <div className="input-group">
                                                    <span className="input-group-text">
                                                        <FontAwesomeIcon icon={faLock} />
                                                    </span>
                                                    <Form.Control
                                                        type="password"
                                                        placeholder="Confirm password"
                                                        name="confirmPassword"
                                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                                    />
                                                </div>
                                                {showConfirmPasswordAlert && !confirmPassword && (
                                                    <p style={{ color: "red", marginTop: "5px", marginBottom: "0" }}>Please enter your confirm password.</p>
                                                )}
                                                {!passwordsMatch && (
                                                    <p style={{ color: "red", marginTop: "5px", marginBottom: "0" }}>Passwords do not match.</p>
                                                )}
                                            </Form.Group>
                                            <div className="d-grid gap-2">
                                                <Button type="submit" style={{ backgroundColor: "#294573", color: "white", marginTop: "10px" }} variant="primary">
                                                    Sign up
                                                </Button>
                                            </div>
                                            <div style={{ marginTop: "10px" }}>
                                                <NavLink to="/login">Already a Member ? Log in </NavLink>
                                            </div>
                                        </Form>
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


