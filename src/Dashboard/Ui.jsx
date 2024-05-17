import React, { useEffect, useState } from "react";
import { Col, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import axios from "axios"; // Import axios for HTTP requests
import Profile from "../Profile";
import StarRatingApp from "./StarRatingApp";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/data");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const filterCourses = (courseName) => {
    return courseName.toLowerCase().includes(searchQuery.toLowerCase());
  };

  // const handleToggleFavorite = async (course) => {
  //   try {
  //     const response = await axios.put(`http://localhost:4000/api/v1/updatefavcards/${course._id}`);
  //     if (response.data.success) {
  //       // Update favorites state
  //       setFavorites(prevFavorites => {
  //         if (prevFavorites.find(fav => fav._id === course._id)) {
  //           return prevFavorites.filter(fav => fav._id !== course._id);
  //         } else {
  //           return [...prevFavorites, course];
  //         }
  //       });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  const handleToggleFavorite = async (course) => {
    try {
      const response = await axios.put(`http://localhost:4000/api/v1/updatefavcards/${course._id}`);
      if (response.data.success) {
        // Check if the course is already in favorites
        const isFavorite = favorites.find(fav => fav._id === course._id);
        if (isFavorite) {
          // If it's in favorites, remove it
          setFavorites(prevFavorites => prevFavorites.filter(fav => fav._id !== course._id));
        } else {
          // If it's not in favorites, add it
          setFavorites(prevFavorites => [...prevFavorites, course]);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <>
      <div style={{ backgroundColor: "#edfafa" }}>
        <Profile />
        <Col xs={12} md={6}>
          <Form.Control
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ marginBottom: "10px" }}
          />
        </Col>
        <h3>Explore our course</h3>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <Row>
            {data.map((item, index) => {
              if (filterCourses(item.para)) {
                return (
                  <Col key={item.id} style={{ marginBottom: "20px" }}>
                    <Card style={{ width: '18rem' }}>
                      <a href={item.link}>
                        <img
                          style={{ height: '12rem' }}
                          src="https://mlyhfwsozyid.i.optimole.com/w:1920/h:1080/q:mauto/f:best/https://timezest.com/wp-content/uploads/How-To-Optimize-Your-Helpdesk-Starter-Pack-in-2022.png"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                      <div onClick={() => handleToggleFavorite(item)} style={{ cursor: "pointer", position: "absolute", top: "10px", right: "10px" }}>
                        <FontAwesomeIcon icon={faHeart} size="2x" color={favorites.find(fav => fav._id === item._id) ? "red" : "gray"} />
                      </div>
                      <div className="card-body">
                        <p className="card-text">{item.para}</p>
                        <StarRatingApp />
                      </div>
                    </Card>
                  </Col>
                );
              }
              return null;
            })}
          </Row>
        )}
        {!isLoading && !error && data.length === 0 && (
          <Col xs={12} md={6}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <h6>No courses available</h6>
              </Card.Body>
            </Card>
          </Col>
        )}
      </div>
    </>
  );
}






// import React, { useState } from "react";
// import Card from "react-bootstrap/Card";
// import { Row, Col, Container, Form, NavLink } from "react-bootstrap";
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';
// import StarRatingApp from "./StarRatingApp";
// import Profile from "../Profile";
// import style from "../CSS/Ui.module.css";
// import axios from 'axios';

// import FavoritePage from "./FavoritePage"; 

// export default function Ui(data=[]) {
//    const [searchQuery, setSearchQuery] = useState("");
//   const [favorites, setFavorites] = useState([]);

//  fetch("http://localhost:4001/data",{
//   method:"get",
//  }).then((res)=>
// res.json().then((data)=>{
//   console.log(data)
// }))

//   //const courses = [
//   //   { 
//   //     id: 1,
//   //     name: "HTML Course",
//   //     image: "https://mlyhfwsozyid.i.optimole.com/w:1920/h:1080/q:mauto/f:best/https://timezest.com/wp-content/uploads/How-To-Optimize-Your-Helpdesk-Starter-Pack-in-2022.png",  
//   //     link: "/Scond"
//   //   },
//   //   { 
//   //     id: 2,
//   //     name: "javascript",
//   //     image: "https://mlyhfwsozyid.i.optimole.com/w:1920/h:1080/q:mauto/f:best/https://timezest.com/wp-content/uploads/How-To-Optimize-Your-Helpdesk-Starter-Pack-in-2022.png", 
//   //     link: "/javascript"
//   //   },
//   //   { 
//   //     id: 3,
//   //     name: "JavaScript Course",
//   //     image: "https://mlyhfwsozyid.i.optimole.com/w:1920/h:1080/q:mauto/f:best/https://timezest.com/wp-content/uploads/How-To-Optimize-Your-Helpdesk-Starter-Pack-in-2022.png", 
//   //     // image: "https://e0.pxfuel.com/wallpapers/769/212/desktop-wallpaper-ways-that-remote-tech-support-can-provide-fast-it-help-with-no-visit-needed-thumbnail.jpg", 
//   //     link: "/Module"
//   //   } 
//   //   ,
//   //   { 
//   //     id: 3,
//   //     name: "JavaScript Course",
//   //     image: "https://mlyhfwsozyid.i.optimole.com/w:1920/h:1080/q:mauto/f:best/https://timezest.com/wp-content/uploads/How-To-Optimize-Your-Helpdesk-Starter-Pack-in-2022.png", 
//   //     // image: "https://e0.pxfuel.com/wallpapers/769/212/desktop-wallpaper-ways-that-remote-tech-support-can-provide-fast-it-help-with-no-visit-needed-thumbnail.jpg", 
//   //     link: "/Module"
//   //   } ,
//   //   { 
//   //     id: 3,
//   //     name: "JavaScript Course",
//   //     image: "https://mlyhfwsozyid.i.optimole.com/w:1920/h:1080/q:mauto/f:best/https://timezest.com/wp-content/uploads/How-To-Optimize-Your-Helpdesk-Starter-Pack-in-2022.png", 
//   //     // image: "https://e0.pxfuel.com/wallpapers/769/212/desktop-wallpaper-ways-that-remote-tech-support-can-provide-fast-it-help-with-no-visit-needed-thumbnail.jpg", 
//   //     link: "/Module"
//   //   } 
//   // ];

//   const toggleFavorite = (courseId) => {
//     if (favorites.includes(courseId)) {
//       setFavorites(favorites.filter(id => id !== courseId));
//     } else {
//       setFavorites([...favorites, courseId]);
//     }
//   };

//   const isFavorite = (courseId) => {
//     return favorites.includes(courseId);
//   };

//   const filterCourses = (courseName) => {
//     return courseName.toLowerCase().includes(searchQuery.toLowerCase());
//   };  

//   // Initialize a flag variable to track if any courses are found
//   let coursesFound = false;

//   return (
//     <>
//       <div style={{ backgroundColor: "#edfafa" }}>
//         <Profile />
//         <div style={{ backgroundColor: "#edfafa", marginLeft:"10px" }} data-aos="fade-right">
//           <h4 className={style.heading}>Dashboard</h4>
//           <Container>
//             <Row className="justify-content-md-center">
//               <Col xs={12} md={6}>
//                 <Form.Control
//                   type="text"
//                   placeholder="Search courses..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   style={{ marginBottom: "10px" }}
//                 />
//               </Col>
//             </Row>
//           </Container>
//           <Row className={style.space}>
//           <Col>
//               <Card style={{ width: '18rem' }}>
//                 <Row>
//                   <Col xs={6}>
//                     <Card.Img style={{ height:"7rem" }} variant="top" src="https://e0.pxfuel.com/wallpapers/769/212/desktop-wallpaper-ways-that-remote-tech-support-can-provide-fast-it-help-with-no-visit-needed-thumbnail.jpg" />
//                   </Col>
//                   <Col xs={6}>
//                     <Card.Body>
//                       <h6> IT courses</h6>
//                     </Card.Body>
//                   </Col>
//                 </Row>
//               </Card>
//             </Col>
//             <Col style={{ marginRight:"550px" }}>
//               <NavLink href="/Language">
//                 <Card style={{ width: '18rem' }}>
//                   <Row>
//                     <Col xs={6}>
//                       <Card.Img style={{ height:"7rem" }} variant="top"  src="https://e0.pxfuel.com/wallpapers/769/212/desktop-wallpaper-ways-that-remote-tech-support-can-provide-fast-it-help-with-no-visit-needed-thumbnail.jpg" />
      
//                       {/* // src="https://mlyhfwsozyid.i.optimole.com/w:1920/h:1080/q:mauto/f:best/https://timezest.com/wp-content/uploads/How-To-Optimize-Your-Helpdesk-Starter-Pack-in-2022.png" */}
//                        {/* /> */}
//                     </Col>
//                     <Col xs={6}>
//                       <Card.Body>
//                         <h6> Language courses</h6>
//                       </Card.Body>
//                     </Col>
//                   </Row>
//                 </Card>
//               </NavLink>
//             </Col>

//           </Row>
//           <h3 className={style.heading}>Explore our course</h3>
//           <Row>
//             {data.map((data) => {
//               if (filterCourses(data.name)) {
//                 console.log(data)
          
//                 // Set the flag to true if at least one course is found
//                 coursesFound = true;
//  return (
//                   <Col key={data.id} style={{ marginBottom: "20px" }}>
//                     <Card style={{ width: '18rem' }}>
//                       <Link to={data.link}>
//                         <Card.Img style={{ height: '12rem' }} variant="top" src={course.image}   />
//                       </Link>
//                       <div onClick={() => toggleFavorite(course.id)} 
//                       style={{ cursor: "pointer", position: "absolute", top: "10px", right: "10px" }}>
//                         <FontAwesomeIcon icon={faHeart} size="2x" color={isFavorite(course.id) ? "#294573" : "gray"} />
//                       </div>
//                       <Card.Body>
//                         <h6>{data.name}</h6> 
//                         <StarRatingApp />
//                       </Card.Body>
//                     </Card>
//                   </Col>
//                  );
//               }
//               return null;
//             })}
//             {/* Display the "Card not found" message if no courses are found */}
//             {!coursesFound && (
//               <Col>
//                 <Card style={{ width: "18rem" }}>
//                   <Card.Body>
//                     <h6>Card not found</h6>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             )}
//           </Row>
//         </div>
//       </div>
//       {/* Pass courses and favorites to FavoritePage component */}
//       {/* {favorites.length > 0 && <FavoritePage data={data} favorites={favorites} />} */}
//     </>
//   );
// }
