import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Row, Col, Container, Form, NavLink } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import StarRatingApp from "./StarRatingApp";
import Profile from "./Profile";
import style from "./CSS/Ui.module.css";
import FavoritePage from "./FavoritePage"; 

export default function Ui() {
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState([]);

  const courses = [
    { 
      id: 1,
      name: "HTML Course",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-G7K4-q2sSnpAobvMWegjHK4f0NmrzniwRQ&usqp=CAU",  
      link: "/Scond"
    },
    { 
      id: 2,
      name: "javascript",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-G7K4-q2sSnpAobvMWegjHK4f0NmrzniwRQ&usqp=CAU", 
      link: "/javascript"
    },
    { 
      id: 3,
      name: "JavaScript Course",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-G7K4-q2sSnpAobvMWegjHK4f0NmrzniwRQ&usqp=CAU", 
      link: "/Module"
    }
  ];

  const toggleFavorite = (courseId) => {
    if (favorites.includes(courseId)) {
      setFavorites(favorites.filter(id => id !== courseId));
    } else {
      setFavorites([...favorites, courseId]);
    }
  };

  const isFavorite = (courseId) => {
    return favorites.includes(courseId);
  };

  const filterCourses = (courseName) => {
    return courseName.toLowerCase().includes(searchQuery.toLowerCase());
  };  

  // Initialize a flag variable to track if any courses are found
  let coursesFound = false;

  return (
    <>
      <div style={{ backgroundColor: "#edfafa" }}>
        <Profile />
        <div style={{ backgroundColor: "#edfafa" }} data-aos="fade-right">
          <h4 className={style.heading}>Dashboard</h4>
          <Container>
            <Row className="justify-content-md-center">
              <Col xs={12} md={6}>
                <Form.Control
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ marginBottom: "10px" }}
                />
              </Col>
            </Row>
          </Container>
          <Row className={style.space}>
          <Col>
              <Card style={{ width: '18rem' }}>
                <Row>
                  <Col xs={6}>
                    <Card.Img style={{ height:"7rem" }} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-G7K4-q2sSnpAobvMWegjHK4f0NmrzniwRQ&usqp=CAU" />
                  </Col>
                  <Col xs={6}>
                    <Card.Body>
                      <h6> IT courses</h6>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col style={{ marginRight:"550px" }}>
              <NavLink href="/Language">
                <Card style={{ width: '18rem' }}>
                  <Row>
                    <Col xs={6}>
                      <Card.Img style={{ height:"7rem" }} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-G7K4-q2sSnpAobvMWegjHK4f0NmrzniwRQ&usqp=CAU" />
                    </Col>
                    <Col xs={6}>
                      <Card.Body>
                        <h6> Language courses</h6>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </NavLink>
            </Col>

          </Row>
          <h3 className={style.heading}>Explore our course</h3>
          <Row>
            {courses.map((course) => {
              if (filterCourses(course.name)) {
                // Set the flag to true if at least one course is found
                coursesFound = true;
 return (
                  <Col key={course.id} style={{ marginBottom: "20px" }}>
                    <Card style={{ width: '18rem' }}>
                      <Link to={course.link}>
                        <Card.Img style={{ height: '12rem' }} variant="top" src={course.image} />
                      </Link>
                      <div onClick={() => toggleFavorite(course.id)} 
                      style={{ cursor: "pointer", position: "absolute", top: "10px", right: "10px" }}>
                        <FontAwesomeIcon icon={faHeart} size="2x" color={isFavorite(course.id) ? "red" : "gray"} />
                      </div>
                      <Card.Body>
                        <h6>{course.name}</h6>
                        <StarRatingApp />
                      </Card.Body>
                    </Card>
                  </Col>
                );
              }
              return null;
            })}
            {/* Display the "Card not found" message if no courses are found */}
            {!coursesFound && (
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <h6>Card not found</h6>
                  </Card.Body>
                </Card>
              </Col>
            )}
          </Row>
        </div>
      </div>
      {/* Pass courses and favorites to FavoritePage component */}
      {favorites.length > 0 && <FavoritePage courses={courses} favorites={favorites} />}
    </>
  );
}
