import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import style from '../CSS/Ui.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faPhoneAlt,faLocationDot } from '@fortawesome/free-solid-svg-icons';

function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Check if any of the form fields are empty
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setAlertMessage('Please fill out all fields');
      return;
    }
    try {
      const response = await fetch('http://localhost:4000/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.text();
      console.log(data); // You can handle the response as needed
      alert('Your form is submitted successfully');
      setAlertMessage(''); // Reset alert message
      setFormData({ name: '', email: '', message: '' }); // Clear form fields
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div  className={style.color}>
      <Container className={style.root}>
      <Row >
        <Col>
        {/* <center> */}
          <Card className={style.card}>
            <Card.Body >
              <center>              <h5>Contact Us</h5>

              <p>Any questions or remarks? Just write us a message</p></center>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={5} name="message" value={formData.message} onChange={handleChange} placeholder="Enter your message" />
                </Form.Group>

                {alertMessage && <p style={{ color: 'red' }}>{alertMessage}</p>}
                <div className="d-grid gap-2">
  
                <Button variant="secondary" type="submit" size="lg">
                  Submit
                </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
          {/* </center> */}
        </Col>
      </Row>
      </Container>
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
  );
}

export default ContactUsPage;

