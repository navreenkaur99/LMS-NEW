import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate, NavLink } from 'react-router-dom';
import style from '../CSS/Ui.module.css';
import Card from "react-bootstrap/Card";
import axios from 'axios';

export default function Dashb() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showNameAlert, setShowNameAlert] = useState(false);
    const [showEmailAlert, setShowEmailAlert] = useState(false);
    const [showPasswordAlert, setShowPasswordAlert] = useState(false);
    const [showConfirmPasswordAlert, setShowConfirmPasswordAlert] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(true); 
    const [userType, setUserType] = useState("");
    const [secretKey, setSecretKey] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userType === "Admin" && secretKey !== "studyhub") {
            alert("Invalid Admin Secret Key");
            return;
        }

        let newAlerts = {};
        if (!name) {
            newAlerts.name = true;
        }
        if (!email) {
            newAlerts.email = true;
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
        setShowPasswordAlert(newAlerts.password || newAlerts.passwordLength || false);
        setShowConfirmPasswordAlert(newAlerts.confirmPassword || newAlerts.passwordMismatch || false);

        if (Object.values(newAlerts).some(alert => alert)) {
            return;
        }

        if (!passwordsMatch) {
            return;
        }

        axios.post("http://localhost:4000/register", { name, email, password, userType })
            .then(result => {
                console.log(result);
                navigate("/login");
                console.log({ name });
                console.log({ email });
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
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Enter secret key"
                                                        name="secretkey"
                                                        onChange={(e) => setSecretKey(e.target.value)}
                                                    />
                                                </Form.Group> : null}
                                            <Form.Group className="mb-3" controlId="formBasicname">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter your name"
                                                    name="name"
                                                    onChange={(e) => setName(e.target.value)}
                                                />
                                                {showNameAlert && !name && (
                                                    <p style={{ color: "red", marginTop: "5px", marginBottom: "0" }}>Please enter your name.</p>
                                                )}
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Enter email"
                                                    name="email"
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                                {showEmailAlert && !email && (
                                                    <p style={{ color: "red", marginTop: "5px", marginBottom: "0" }}>Please enter your email.</p>
                                                )}
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Control
                                                    type="password"
                                                    placeholder="Enter Password"
                                                    name="password"
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                                {showPasswordAlert && !password && (
                                                    <p style={{ color: "red", marginTop: "5px", marginBottom: "0" }}>Please enter your password.</p>
                                                )}
                                                {showPasswordAlert && password && password.length < 8 && (
                                                    <p style={{ color: "red", marginTop: "5px", marginBottom: "0" }}>Password must be at least 8 characters long.</p>
                                                )}
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                                                <Form.Control
                                                    type="password"
                                                    placeholder="Confirm password"
                                                    name="confirmPassword"
                                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                                />
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


// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import { useNavigate , NavLink} from 'react-router-dom'; 
// import style from '../CSS/Ui.module.css';
// import Card from "react-bootstrap/Card";
// import axios from 'axios';

// export default function Dashb() {
//     const [name, setname] = useState("");
 
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [shownameAlert, setShownameAlert] = useState(false);
  
//     const [showEmailAlert, setShowEmailAlert] = useState(false);
//     const [showPasswordAlert, setShowPasswordAlert] = useState(false);
//     const [showConfirmPasswordAlert, setShowConfirmPasswordAlert] = useState(false);
//     const [passwordsMatch, setPasswordsMatch] = useState(true); // Track if passwords match
//     const [userType , setuserType] = useState("");
//     const [SecretKey , setSecretKey] = useState("");
 
//     const navigate = useNavigate();
  
//     const handleSubmit = (e) => {
//         if(userType == "Admin" && SecretKey != "studyhub"){
//             e.preventDefault();
//             alert("Invalid Admin ")
//         } 
//         else{
//         let newAlerts = {};
//         if (!name) {
//             newAlerts.name = true;
//         }
//         if (!email) {
//             newAlerts.email = true;
//         }
//         if (!password) {
//             newAlerts.password = true;
//         } else if (password.length < 8) {
//             newAlerts.passwordLength = true;
//         }
//         if (!confirmPassword) {
//             newAlerts.confirmPassword = true;
//         } else if (password !== confirmPassword) {
//             newAlerts.passwordMismatch = true;
//             setPasswordsMatch(false); // Update passwords match state
//         } else {
//             setPasswordsMatch(true); // Update passwords match state
//         }
//         setShownameAlert(newAlerts.name || false);

//         setShowEmailAlert(newAlerts.email || false);
//         setShowPasswordAlert(newAlerts.password || newAlerts.passwordLength || false);
//         setShowConfirmPasswordAlert(newAlerts.confirmPassword || newAlerts.passwordMismatch || false);
//         if (Object.values(newAlerts).some(alert => alert)) {
//             return;
//         }
//         if (!passwordsMatch) {
//             return; // Don't submit if passwords don't match
//         }
//         axios.post("http://localhost:4000/register", { name, email, password ,userType })
//             .then(result => {
//                 console.log(result);
//                 navigate("/login");
//                 console.log({ name })
//                 console.log({ email });
//             })
//             .catch(err => console.log(err));
//     }
// }
//     const cardStyle = {
//         backgroundColor: 'rgba(255, 255, 255, 0.5)',
//         border: 'none',
//     };
  
//     return (
//         <div style={{ backgroundImage: 'URL(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5pJQypNM4pvdYFEdb_8T2Vcl1TFa13XCPOA&s)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
//             <Container className={style.root}>
//                 <div className="transparent-card-container">
//                     <Card style={cardStyle}>
//                         <Card.Body className={style.card}>
//                             <Row style={{marginLeft:"10px",marginRight:"10px"}}>
//                                 <Col>
//                                     <center>
//                                         <header>
//                                             <h3 style={{marginTop:"20px",marginBottom:"30px"}} className={style.header}>Sign up your account</h3>
//                                         </header>
//                                         <Form onSubmit={handleSubmit}>
//                                         <div>
//                                             Register AS
//                                     <input type="radio" name="UserType"
//                                     value="User"
//                                      onChange={(e) => setuserType(e.target.value)} />
//                                     User
                                  

//                                     <input type="radio" name="UserType"
//                                     value="Admin"
//                                      onChange={(e) => setuserType(e.target.value)} /> 
//                            Admin
                                   

// </div>
// {userType=="Admin" ?
// <Form.Group className="mb-3" controlId="formBasicEmail">
                                            
//                                             <Form.Control
//                                                 type="text"
//                                                 placeholder="enter secret key"
//                                                 name="secretkey"
//                                                 // value={formData.email}
//                                                 onChange={(e) => setSecretKey(e.target.value)}
//                                                 // onChange={handleChange}
//                                                 // isInvalid={!!errors.email}
                                                
//                                             />
                                            
//                                             <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
//                                         </Form.Group>:null}
                                      
//                                         <Form.Group className="mb-3" controlId="formBasicname">
//                                                  <Form.Control
//                                                     type="text"
//                                                     placeholder="enter your name"
//                                                     name="name"
//                                                     onChange={(e) => setname(e.target.value)}
//                                                 />
//                                                 {shownameAlert && !name && (
//                                                     <p style={{ color: "red", marginTop: "5px", marginBottom: "0" }}>Please enter your name.</p>
//                                                 )}
//                                             </Form.Group>
//                                             <Form.Group className="mb-3" controlId="formBasicEmail">
//                                                  <Form.Control
//                                                     type="email"
//                                                     placeholder="Enter email"
//                                                     name="email"
//                                                     onChange={(e) => setEmail(e.target.value)}
//                                                 />
//                                                 {showEmailAlert && !email && (
//                                                     <p style={{ color: "red", marginTop: "5px", marginBottom: "0" }}>Please enter your email.</p>
//                                                 )}
//                                             </Form.Group>
//                                             <Form.Group className="mb-3" controlId="formBasicPassword">
//                                                 <Form.Control
//                                                     type="password"
//                                                     placeholder="Enter Password"
//                                                     name="password"
//                                                     onChange={(e) => setPassword(e.target.value)}
//                                                 />
//                                                 {showPasswordAlert && !password && (
//                                                     <p style={{ color: "red", marginTop: "5px", marginBottom: "0" }}>Please enter your password.</p>
//                                                 )}
//                                                 {showPasswordAlert && password && password.length < 8 && (
//                                                     <p style={{ color: "red", marginTop: "5px", marginBottom: "0" }}>Password must be at least 8 characters long.</p>
//                                                 )}
//                                             </Form.Group>
//                                             <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
//                                                 <Form.Control
//                                                     type="password"
//                                                     placeholder="Confirm password"
//                                                     name="confirmPassword"
//                                                     onChange={(e) => setConfirmPassword(e.target.value)}
//                                                 />
//                                                 {showConfirmPasswordAlert && !confirmPassword && (
//                                                     <p style={{ color: "red", marginTop: "5px", marginBottom: "0" }}>Please enter your confirm password.</p>
//                                                 )}
//                                                 {!passwordsMatch && (
//                                                     <p style={{ color: "red", marginTop: "5px", marginBottom: "0" }}>Passwords do not match.</p>
//                                                 )}
//                                             </Form.Group>
//                                             <div className="d-grid gap-2">
//                                                 <Button type="submit" style={{backgroundColor:"#294573",color:"white",marginTop:"10px"}} variant="primary">
//                                                     Sign up
//                                                 </Button>
//                                             </div>
//                                             <div style={{marginTop:"10px"}}>
//                                                 <NavLink to="/login">Already a Member ? Log in </NavLink>
//                                             </div>
//                                         </Form>
//                                     </center>
//                                 </Col>
//                             </Row>
//                         </Card.Body>
//                     </Card>
//                 </div>
//             </Container>
//         </div>
//     );
// }


// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import { useNavigate , NavLink} from 'react-router-dom'; 
// import style from '../CSS/Ui.module.css';

// import Card from "react-bootstrap/Card";
// import axios from 'axios';

// export default function Dashb() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [showAlert, setShowAlert] = useState(false);
//     const navigate = useNavigate();
  
//     const handleSubmit =  (e) => {
//         if (!email) {
//             setShowAlert(true);
//             return; // Stop execution if email is empty
//         }
//       e.preventDefault()
//       axios.post ("http://localhost:4001/register",{email,password})
//      .then(result =>{console.log(result)
//       navigate ("/login");
//       console.log({email})
//     })
   
//      .catch (err => console.log(e)
//     )}
   
//     const cardStyle = {
//       backgroundColor: 'rgba(255, 255, 255, 0.5)', // Adjust the alpha value for transparency
//       border: 'none', // Remove border if needed
//       // width: '300px' // Adjust width as needed
//     };
  
//     return (
//         <div style={{ backgroundImage: 'URL(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5pJQypNM4pvdYFEdb_8T2Vcl1TFa13XCPOA&s)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
//             <Container className={style.root}>
//                 <div className="transparent-card-container">
//                     <Card style={cardStyle}>
//                         <Card.Body className={style.card}>
//                             <Row style={{marginLeft:"10px",marginRight:"10px"}}>
                               
//                                 <Col>
//                                 <center>                                    <header>
//                                         <h3 style={{marginTop:"20px",marginBottom:"30px"}} className={style.header}>Sign up your account</h3>
//                                     </header>
                                  
//                                     <Form onSubmit={handleSubmit}>
//                                         <Form.Group className="mb-3" controlId="formBasicEmail">
//                                         <Form.Label style={{color:"blue"}}>Email address</Form.Label>
//                                             <Form.Control
//                                                 type="email"
//                                                 placeholder="Enter email"
//                                                 name="email"
//                                                 onChange={(e) => setEmail(e.target.value)}
//                                                 />
//                                                  {showAlert && !email && (
//                                                 <p style={{ color: "red", marginTop: "5px", marginBottom: "0" }}>Please enter your email.</p>
//                                             )}
//                                                     </Form.Group>
//                                         <Form.Group className="mb-3" controlId="formBasicPassword">
//                                             <Form.Control
//                                                 type="password"
//                                                 placeholder="Enter Password"
//                                                 name="password"
//               onChange={(e) => setPassword(e.target.value)}
// />  </Form.Group>
//                                         <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
//                                             <Form.Control
//                                                 type="password"
//                                                 placeholder="Confirm password"
//                                                 name="confirmPassword"
//          />

//                                            </Form.Group>
                                     
//                                         <div className="d-grid gap-2">
//                                             <Button type="submit"
//                                             style={{backgroundColor:"#294573",color:"white",marginTop:"10px"}}
//                                             variant="primary">
//                                                 Sign up
//                                             </Button>
//                                         </div>
//                                         <div style={{marginTop:"10px"}}>
//                                         <NavLink to="/login">Already a Member ? Log in </NavLink>
//                                     </div>
//                                     </Form>
//                                     </center>
//                                 </Col>
//                             </Row>
//                         </Card.Body>
//                     </Card>
//                 </div>
//             </Container>
//         </div>
//     );
// }


// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import { Table, Row, Col, Container } from "react-bootstrap";
// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Form from "react-bootstrap/Form";
// import Image from "react-bootstrap/Image";
// import { Link, NavLink } from "react-router-dom";
// import style from "./CSS/Ui.module.css"

// export default function Dashb() {
//   // const[buttonClicked, setbuttonClicked] = useState(true);
  // const cardStyle = {
  //   backgroundColor: 'rgba(255, 255, 255, 0.5)', // Adjust the alpha value for transparency
  //   border: 'none', // Remove border if needed
  //   // width: '300px' // Adjust width as needed
  // };

// return (
//     <>
//       <div style={{backgroundImage:'URL(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5pJQypNM4pvdYFEdb_8T2Vcl1TFa13XCPOA&s)',backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>      <Container  className={style.root}>
//       <div className="transparent-card-container">
//        <Card style={cardStyle}>
//       {/* <Card> */}
//           <Card.Body className={style.card}>
//             <Row>
//               <Col>
//               <span> 
//                 <Image className={style.img}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmXWk9i9hpjeNrkkoll1Bld0PuwGKzz7X7LQ&usqp=CAU"/></span>

//                 <Image className={style.img}
//                   src="https://rukminim2.flixcart.com/image/850/1000/k8q8nm80/poster/s/r/w/small-motivational-poster-for-study-room-motivational-poster-for-original-imafqzjf36re9jgh.jpeg?q=90&crop=false"
//                   thumbnail
//                 />
//               </Col>

//               <Col>
//                <Col>
//                   <Row>

//                     <header>
//                 <h1 className={style.header}>Register your account</h1>
//       </header>



//                     {/* <Form.Label >Email id</Form.Label> */}
//                     <Form.Control
//                       required
//                       type="text"
//                       placeholder="Email"
//                     />
                   
//                     <p>Enter your email </p>
//                     {/* <Form.Label >Password</Form.Label> */}
//                     <Form.Control
//                       required
//                       type="password"
//                       placeholder="Password"
//                     />
//                     < NavLink href="/Ui"><Button className={style.space} variant="primary" onClick={()=>{}}>Register account</Button>{' '}</NavLink>  
//                       <Link to="/">
//                       Sign in 
//                     </Link>
//                   </Row>
//                 </Col>
//               </Col>
//             </Row>
//           </Card.Body>
//         </Card>
//         </div>
//       </Container>
//       </div>
      

//       {/* :   <ShimmerThumbnail height={250} rounded /> } */}
//     </>
//   );
// }
