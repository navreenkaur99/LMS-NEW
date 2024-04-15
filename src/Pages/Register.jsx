import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import style from '../CSS/Ui.module.css';
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

export default function Dashb() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [errors, setErrors] = useState({ email: '', password: '', confirmPassword: '' });
    const navigate = useNavigate();
      
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string()
            .required('Password is required')
            .matches(/.*[0-9].*/, 'Password must contain at least one number')
            .min(8, 'Password must be at least 8 characters long'),
        confirmPassword: Yup.string()
            .required('Confirm password is required')
            .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await validationSchema.validate(formData, { abortEarly: false });
            // Validation passed, do something (e.g., login)
            console.log('Form data:', formData);
            navigate("/Ui"); // Navigate to "/Ui" route after successful form submission
        } catch (validationErrors) {
            // Validation failed, set error messages
            const newErrors = {};
            validationErrors.inner.forEach((error) => {
                newErrors[error.path] = error.message;
            });
            setErrors(newErrors);
        }
    };
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
                            <Row>
                                <Col>
                                    <span>
                                        <Image className={style.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmXWk9i9hpjeNrkkoll1Bld0PuwGKzz7X7LQ&usqp=CAU" />
                                    </span>
                                    <Image className={style.img} src="https://rukminim2.flixcart.com/image/850/1000/k8q8nm80/poster/s/r/w/small-motivational-poster-for-study-room-motivational-poster-for-original-imafqzjf36re9jgh.jpeg?q=90&crop=false" thumbnail />
                                </Col>
                                <Col>
                                    <header>
                                        <h3 
                                        style={{marginTop:"20px",marginBottom:"30px"}} className={style.header}>Sign up your account</h3>
                                    </header>
                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control
                                                type="email"
                                                placeholder="Enter email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                isInvalid={!!errors.email}
                                            />
                                            <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Control
                                                type="password"
                                                placeholder="Enter Password"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                isInvalid={!!errors.password}
                                            />
                                            <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                                            <Form.Control
                                                type="password"
                                                placeholder="Confirm password"
                                                name="confirmPassword"
                                                value={formData.confirmPassword}
                                                onChange={handleChange}
                                                isInvalid={!!errors.confirmPassword}
                                            />
                                            <Form.Control.Feedback type="invalid">{errors.confirmPassword}</Form.Control.Feedback>
                                        </Form.Group>
                                        <div className="d-grid gap-2">
                                            <Button type="submit"
                                            style={{backgroundColor:"#294573",color:"white",marginTop:"20px"}}
                                            variant="primary">
                                                Sign up
                                            </Button>
                                        </div>
                                    </Form>
                                    {/* <div>
                                        <NavLink to="/Register">Not have account? Register</NavLink>
                                    </div> */}
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </div>
    );
}


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
