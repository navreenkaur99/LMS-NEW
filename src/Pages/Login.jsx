import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
// import style from './CSS/Ui.module.css';

import style from '../CSS/Ui.module.css'
import * as Yup from 'yup';
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";


export default function Dashb() {
    // const [isHovered, setIsHovered] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({ email: '', password: '' });
    const navigate = useNavigate();
      
    // const handleHover = () => {
    //     setIsHovered(true);
    // };

    // const handleMouseLeave = () => {
    //     setIsHovered(false);
    // };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string()
            .required('Password is required')
            .matches(/.*[0-9].*/, 'Password must contain at least one number'),
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
                                        <Image className={style.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmXWk9i9hpjeNrkkoll1Bld0PuwGKzz7X7LQ&usqp=CAU" />
                                    <Image className={style.img} src="https://rukminim2.flixcart.com/image/850/1000/k8q8nm80/poster/s/r/w/small-motivational-poster-for-study-room-motivational-poster-for-original-imafqzjf36re9jgh.jpeg?q=90&crop=false" thumbnail />
                                </Col>
                                <Col>
                                    <header>
                                        <h2 className={style.header}>Log in to your account</h2>
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
                                                placeholder="Password"
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                isInvalid={!!errors.password}
                                            />
                                            <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
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
// import { NavLink } from 'react-router-dom';
// import style from './CSS/Ui.module.css';
// import * as Yup from 'yup';
// import Image from "react-bootstrap/Image";
// import Card from "react-bootstrap/Card";


// export default function Dashb() {
//     const [isHovered, setIsHovered] = useState(false);

//     const handleHover = () => {
//         setIsHovered(true);
//       };
    
//       const handleMouseLeave = () => {
//         setIsHovered(false);
//       };
//       const buttonStyle = {
//         backgroundColor: 'purple',
//         color: 'white',
//         borderColor: 'white',
//         width: '12vh',
//         transition: 'background-color 0.3s, border-color 0.3s'
//       };
//       const [pass, setpass] = useState("password");


 
//     const [formData, setFormData] = useState({
//         email: '',
//         password: '',
//     });

//     const [errors, setErrors] = useState({ email: '', password: '' });

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
//     };

    

//     return (
//         <div style={{ backgroundImage: 'URL(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5pJQypNM4pvdYFEdb_8T2Vcl1TFa13XCPOA&s)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
//             <Container className={style.root}>
//                 <div className="transparent-card-container">
//                 <Card style={cardStyle}>
//       {/* <Card> */}
//           <Card.Body className={style.card}>
     
//                     <Row >
//                     <Col>
//               <span> 
//                 <Image className={style.img}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmXWk9i9hpjeNrkkoll1Bld0PuwGKzz7X7LQ&usqp=CAU"/></span>

//                 <Image className={style.img}
//                   src="https://rukminim2.flixcart.com/image/850/1000/k8q8nm80/poster/s/r/w/small-motivational-poster-for-study-room-motivational-poster-for-original-imafqzjf36re9jgh.jpeg?q=90&crop=false"
//                   thumbnail
//                 />
//               </Col>

            
//                         {/* <Col xs={12} sm={8} md={6} lg={4}> */}
                            
//                             <Col>
//                             <Row>
//                             {/* <div className={`card ${style.card}`}> */}
//                                  {/* <div className="card-body"> */}
//                                     <header>
//                                         <h1 className={style.header}>Sign in to your account</h1>
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
//                                         <button type='submit' onClick={() => {
//                                                     if (buttonStatus === true) {
//                                                         setbuttonClick(false)
//                                                         setTimeout(() => {
//                                                             navigate("/Ui")
//                                                         });
//                                                     }
//                                                 }} size="lg"
                                                
//                                                 style={{
//                                                   ...buttonStyle,
//                                                   backgroundColor: isHovered ? '#6f42c1' : '#581c87',
//                                                   borderColor: isHovered ? '#6f42c1' : 'white'
//                                                 }}
//                                                 onMouseEnter={handleHover}
//                                                 onMouseLeave={handleMouseLeave}
//                                                 className="btn"
                                                    
//                                                 // disabled={buttonStatus}

//                                                 >Login</button>


//                                             {/* <Button variant="primary" type="submit" href='/Ui' >
//                                                 Login
//                                             </Button> */}
//                                         </div>
//                                     </Form>
//                                     <div>
//                                         <NavLink to="/Register">Not have account? Register</NavLink>
                                
//                                     </div>
//                                     </Row>

//                                 {/* </div> */}
//                             {/* </div> */}
//                         </Col>
//                     </Row>
//                     </Card.Body>
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
// import { useState } from "react";
// export default function Dashb() {
//   const[buttonClicked, setbuttonClicked] = useState(true);
//   const cardStyle = {
//     backgroundColor: 'rgba(255, 255, 255, 0.5)', // Adjust the alpha value for transparency
//     border: 'none', // Remove border if needed
//     // width: '300px' // Adjust width as needed
//   };

// return (
//     <>
//       <div style={{backgroundImage:'URL(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5pJQypNM4pvdYFEdb_8T2Vcl1TFa13XCPOA&s)',backgroundRepeat:"no-repeat",backgroundSize:"cover"}}> 
//            <Container  className={style.root}>
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
//                 <h1 className={style.header}>        Sign in to your account</h1>
//       </header>



//                     {/* <Form.Label >Email id</Form.Label> */}
//                     <Form.Control
//                       required
//                       type="text"
//                       placeholder="Email"
//                     />
                   
//                     <p>Enter the Email or Registered number</p>
//                     {/* <Form.Label >Password</Form.Label> */}
//                     <Form.Control
//                       required
//                       type="password"
//                       placeholder="Password"
//                     />
//                       <Link to="/Ui">
//                       <div className="d-grid gap-2">
   
        
//       <Button style={{marginTop:"20px",}} variant="primary" onClick={()=>{}}>Login</Button>{' '}
//       </div>
//                       </Link> 
                      
//                       <NavLink to="/Register">
//                       Not have account ?Register
//                     </NavLink>
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
