import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function AboutUsPage() {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1>About Us</h1>
          <p>
             
          </p>
          <p>
            Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h2>Our Mission</h2>
          <p>
           </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h2>Our Team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
            dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
            Fusce nec tellus sed augue semper porta.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutUsPage;
