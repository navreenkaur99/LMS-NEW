import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
// import style from './CSS/Ui.module.css';

import style from '../CSS/Ui.module.css'
import * as Yup from 'yup';
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import axios from 'axios';


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
            console.log("Login failed:", result.data.message);
            // Handle login failure
        }
    })
    .catch(err => {
        console.error("Error logging in:", err);
    });
    }
    //     axios.post("http://localhost:4000/login", { email, password })
    //       .then(result => {
    //         console.log(result);
    //         if (result.data === "success" && userType == User) {
    //          console.log("please sign in")
    //          navigate("/dashboard");
    //         }
    //         else{
    //             navigate("/admin")
    //         }
            
    //       })
    //       .catch(err => {
    //         console.log(err);
    //       });
    //   };
       
//     const handleSubmit =  (e) => {
//       e.preventDefault()
//       axios.post ("http://localhost:4001/login",{email,password})
//      .then(result =>{console.log(result)
//       if(data === "Success") {
//         navigate ("/dashboard");
  
//       }
//     //   navigate ("/Ui");
//     })
//     .catch (err => console.log(e)
//    )}
      

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const navigate = useNavigate();
  
    // const handleSubmit =  (e) => {
    //   e.preventDefault()
    //   axios.post ("http://localhost:4001/register",{email,password})
    //  .then(result =>{console.log(result)
    //   navigate ("/login");
  
    // })
    //  .catch (err => console.log(e)
    // // )}
    // const [email, setEmail] = useState("");
    //  const [password, setPassword] = useState("");
    //  const navigate = useNavigate();
    
    // // const [isHovered, setIsHovered] = useState(false);
    // const [formData, setFormData] = useState({
    //     email: '',
    //     password: '',
    // });
    // const [errors, setErrors] = useState({ email: '', password: '' });
    // // const navigate = useNavigate();
      
    // // const handleHover = () => {
    // //     setIsHovered(true);
    // // };

    // // const handleMouseLeave = () => {
    // //     setIsHovered(false);
    // // };

    // const validationSchema = Yup.object().shape({
    //     email: Yup.string().email('Invalid email').required('Email is required'),
    //     password: Yup.string()
    //         .required('Password is required')
    //         .matches(/.*[0-9].*/, 'Password must contain at least one number'),
    // });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //     });
    // };
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    
    //     try {
    //       const response = await fetch("http://localhost:4000/auth", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ email, password }),
    //       });
    
    //       const data = await response.json();
    
    //       if (data.success) {
    //         // If authentication is successful, navigate to the dashboard
    //         navigate("/Ui");
    //       } else {
    //         // If authentication fails, handle the error (e.g., show an error message)
    //         console.error("Authentication failed:", data.message);
    //       }
    //     } catch (error) {
    //       console.error("An error occurred during authentication:", error);
    //     }
    //   };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await validationSchema.validate(formData, { abortEarly: false });
    //         // Validation passed, do something (e.g., login)
    //         console.log('Form data:', formData);
    //         navigate("/Ui"); // Navigate to "/Ui" route after successful form submission
    //     } catch (validationErrors) {
    //         // Validation failed, set error messages
    //         const newErrors = {};
    //         validationErrors.inner.forEach((error) => {
    //             newErrors[error.path] = error.message;
    //         });
    //         setErrors(newErrors);
    //     }
    // };
    const cardStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Adjust the alpha value for transparency
        border: 'none', // Remove border if needed
        // width: '300px' // Adjust width as needed
      };
    
    return (
        <div style={{ backgroundImage: 'URL(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5pJQypNM4pvdYFEdb_8T2Vcl1TFa13XCPOA&s)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <Container className={style.root}>
                <div className="transparent-card-container">
                    <Card style={cardStyle}>
                        <Card.Body className={style.card}>
                            <Row style={{marginLeft:"10px",marginRight:"10px"}}>
                                 {/* <Col>
                                        <Image className={style.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmXWk9i9hpjeNrkkoll1Bld0PuwGKzz7X7LQ&usqp=CAU" />
                                    <Image className={style.img} src="https://rukminim2.flixcart.com/image/850/1000/k8q8nm80/poster/s/r/w/small-motivational-poster-for-study-room-motivational-poster-for-original-imafqzjf36re9jgh.jpeg?q=90&crop=false" thumbnail />
                                </Col> */}
                                <Col> 
                                <center>
                                    <header>
                                        <h3  style={{marginTop:"20px",marginBottom:"30px"}}  className={style.header}>Log in to your account</h3>
                                    </header>
                                    <Form onSubmit={handleSubmit}>
        
                                    {/* <Form onSubmit={handleSubmit}> */}
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            
                                            <Form.Control
                                                type="email"
                                                placeholder="Enter email"
                                                name="email"
                                                // value={formData.email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                // onChange={handleChange}
                                                // isInvalid={!!errors.email}
                                                
                                            />
                                            
                                            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Control
                                                type="password"
                                                placeholder="Password"
                                                name="password"
                                                // value={formData.password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                // onChange={handleChange}
                                                // isInvalid={!!errors.password}
                                            />
                                           {/* <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback> */}
                                        </Form.Group>
                                        <div className="d-grid gap-2">
                                        <Button type="submit"
                                            style={{backgroundColor:"#294573",color:"white",marginTop:"20px"}}
                                            variant="primary">
                                                Log in
                                            </Button>

                                            {/* <Button type="submit" 
                                            style={{marginTop:"20px"}}
                                             onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} variant={isHovered ? 'primary' : 'secondary'}>
                                                Login
                                            </Button> */}
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






// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import { NavLink, useNavigate } from 'react-router-dom';
// // import style from './CSS/Ui.module.css';

// import style from '../CSS/Ui.module.css'
// import * as Yup from 'yup';
// import Image from "react-bootstrap/Image";
// import Card from "react-bootstrap/Card";


// export default function Dashb() {
//     // const [isHovered, setIsHovered] = useState(false);
//     const [formData, setFormData] = useState({
//         email: '',
//         password: '',
//     });
//     const [errors, setErrors] = useState({ email: '', password: '' });
//     const navigate = useNavigate();
      
//     // const handleHover = () => {
//     //     setIsHovered(true);
//     // };

//     // const handleMouseLeave = () => {
//     //     setIsHovered(false);
//     // };

//     const validationSchema = Yup.object().shape({
//         email: Yup.string().email('Invalid email').required('Email is required'),
//         password: Yup.string()
//             .required('Password is required')
//             .matches(/.*[0-9].*/, 'Password must contain at least one number'),
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value,
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             await validationSchema.validate(formData, { abortEarly: false });
//             // Validation passed, do something (e.g., login)
//             console.log('Form data:', formData);
//             navigate("/Ui"); // Navigate to "/Ui" route after successful form submission
//         } catch (validationErrors) {
//             // Validation failed, set error messages
//             const newErrors = {};
//             validationErrors.inner.forEach((error) => {
//                 newErrors[error.path] = error.message;
//             });
//             setErrors(newErrors);
//         }
//     };
//     const cardStyle = {
//         backgroundColor: 'rgba(255, 255, 255, 0.5)', // Adjust the alpha value for transparency
//         border: 'none', // Remove border if needed
//         // width: '300px' // Adjust width as needed
//       };
    
//     return (
//         <div style={{ backgroundImage: 'URL(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5pJQypNM4pvdYFEdb_8T2Vcl1TFa13XCPOA&s)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
//             <Container className={style.root}>
//                 <div className="transparent-card-container">
//                     <Card style={cardStyle}>
//                         <Card.Body className={style.card}>
//                             <Row>
//                                 <Col>
//                                         <Image className={style.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmXWk9i9hpjeNrkkoll1Bld0PuwGKzz7X7LQ&usqp=CAU" />
//                                     <Image className={style.img} src="https://rukminim2.flixcart.com/image/850/1000/k8q8nm80/poster/s/r/w/small-motivational-poster-for-study-room-motivational-poster-for-original-imafqzjf36re9jgh.jpeg?q=90&crop=false" thumbnail />
//                                 </Col>
//                                 <Col>
//                                     <header>
//                                         <h2 className={style.header}>Log in to your account</h2>
//                                     </header>
//                                     <Form onSubmit={handleSubmit}>
//                                         <Form.Group className="mb-3" controlId="formBasicEmail">
                                            
//                                             <Form.Control
//                                                 type="email"
//                                                 placeholder="Enter email"
//                                                 name="email"
//                                                 value={formData.email}
//                                                 onChange={handleChange}
//                                                 isInvalid={!!errors.email}
                                                
//                                             />
                                            
//                                             <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
//                                         </Form.Group>
//                                         <Form.Group className="mb-3" controlId="formBasicPassword">
//                                             <Form.Control
//                                                 type="password"
//                                                 placeholder="Password"
//                                                 name="password"
//                                                 value={formData.password}
//                                                 onChange={handleChange}
//                                                 isInvalid={!!errors.password}
//                                             />
//                                             <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
//                                         </Form.Group>
//                                         <div className="d-grid gap-2">
//                                         <Button type="submit"
//                                             style={{backgroundColor:"#294573",color:"white",marginTop:"20px"}}
//                                             variant="primary">
//                                                 Log in
//                                             </Button>

//                                             {/* <Button type="submit" 
//                                             style={{marginTop:"20px"}}
//                                              onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} variant={isHovered ? 'primary' : 'secondary'}>
//                                                 Login
//                                             </Button> */}
//                                         </div>
//                                     </Form>
//                                     <div style={{marginTop:"20px"}}>
//                                         <NavLink to="/Register">Not have account? Register</NavLink>
//                                     </div>
//                                 </Col>
//                             </Row>
//                         </Card.Body>
//                     </Card>
//                 </div>
//             </Container>
//         </div>
//     );
// }




