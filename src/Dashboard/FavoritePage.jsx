import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import StarRatingApp from "./StarRatingApp";

const FavoritePage = ({ courses, favorites }) => {
  // Check if courses is defined before filtering
  const favoriteCourses = courses ? courses.filter(course => favorites.includes(course.id)) : [];

  return (
    <div style={{ backgroundColor: "#edfafa" }}>
        
      <Container>
        <h4>Favorite Courses</h4>
        <Row>
          {favoriteCourses.map(course => (
            <Col key={course.id} style={{ marginBottom: "20px" }}>
              <Card style={{ width: "18rem" }}>
                <Card.Img style={{ height: "12rem" }} variant="top" src={course.image} />
                <Card.Body>
                  <h6>{course.name}</h6>
                  <StarRatingApp />
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <div  courses={courses} favorites={favorites} />

    </div>
  );
};

export default FavoritePage;
