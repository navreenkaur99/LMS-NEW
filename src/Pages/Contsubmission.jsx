
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
 import AdminNavbar from  './AdminNavbar'
function SubmissionsPage() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/submissions');
        const data = await response.json();
        setSubmissions(data);
      
      } catch (error) {
        console.error('Error fetching submissions:', error);
      }
    };

    fetchSubmissions();
  }, []);

  return (
    <> 
      <AdminNavbar/>
    <Container>
      <Row className="mt-5">
        <Col>
          <h1>Contacts Information</h1>
          <Table striped bordered hover style={{ width: '80%' }}>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((submission, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{submission.name}</td>
                  <td>{submission.email}</td>
                  <td   style={{ maxWidth: "50px" , height:"auto"}}>{submission.message}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
    </>
 
  );
}

export default SubmissionsPage;

