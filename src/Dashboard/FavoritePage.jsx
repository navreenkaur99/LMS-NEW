import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FavoriteCards from './FavoriteCards'
import Profile from '../Profile'
// import Navbar from '../Navbar/Navbar'
// import FavouriteCardBanner from '../Banner/FavouriteCardBanner'
// import FavouriteCards from '../Cards/FavouriteCards'
export default function FavoriteCoursesComponent() {
    const [favouriteList, setFavouriteList] = useState([])
    const getFavouriteCards = () => {
        try {
            axios.get("http://localhost:4000/api/v1/favouriteCards")
                .then((response) => {
                    setFavouriteList(response.data.favouriteData)
                })
        }
        catch (error) {
            const errorMsg = error.response.data
            console.log(errorMsg)
        }
    }
    useEffect(() => {
        getFavouriteCards();
    }, [])
    return (
        <div>
            <Profile />
            {/* <FavouriteCardBanner /> */}
            <div className='grid grid-cols-4 mx-10 gap-5'>
                {favouriteList.map((value, index) => (
                    <div key={index} className='mb-5'>
                        <FavoriteCards data={value} />
                    </div>
                ))
                }
            </div >
        </div>
    )
}
//import React from "react";
// import { Row, Col, Card } from "react-bootstrap";

// const FavoritePage = ({ courses, favorites }) => {
//   // Check if courses and favorites are defined
//   if (!courses || !favorites) {
//     return null; // Return null if courses or favorites are undefined
//   }

//   // Filter out the favorite courses
//   const favoriteCourses = courses.filter((course) => favorites.includes(course.id));

//   return (
//     <div style={{ marginTop: "20px" }}>
//       <h3>Favorite Courses</h3>
//       <Row>
//         {favoriteCourses.map((course) => (
//           <Col key={course.id} style={{ marginBottom: "20px" }}>
//             <Card style={{ width: "18rem" }}>
//               <a href={course.link}>
//                 <img
//                   style={{ height: "12rem" }}
//                   src="https://mlyhfwsozyid.i.optimole.com/w:1920/h:1080/q:mauto/f:best/https://timezest.com/wp-content/uploads/How-To-Optimize-Your-Helpdesk-Starter-Pack-in-2022.png"
//                   className="card-img-top"
//                   alt="..."
//                 />
//               </a>
//               <div className="card-body">
//                 <p className="card-text">{course.para}</p>
//                 {/* Optionally, you can add a remove from favorites button */}
//               </div>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </div>
//   );
// };

// export default FavoritePage;
// // import React from "react";
// // import { Row, Col, Card } from "react-bootstrap";

// // const FavoritePage = ({ items, favorites }) => {
// //   // Check if items and favorites are defined
// //   if (!items || !favorites) {
// //     return null; // Return null if items or favorites are undefined
// //   }

// //   // Filter out the favorite items based on the favorites array
// //   const favoriteItems = items.filter((item) => favorites.includes(item.id));

// //   return (
// //     <div style={{ marginTop: "20px" }}>
// //       <h3>Favorite Courses</h3>
// //       <Row>
// //         {favoriteItems.map((item) => (
// //           <Col key={item.id} style={{ marginBottom: "20px" }}>
// //             <Card style={{ width: "18rem" }}>
// //               <a href={item.link}>
// //                 <img
// //                   style={{ height: "12rem" }}
// //                   src={item.imageUrl}
// //                   className="card-img-top"
// //                   alt="..."
// //                 />
// //               </a>
// //               <div className="card-body">
// //                 <p className="card-text">{item.para}</p>
// //                 {/* Optionally, you can add a remove from favorites button */}
// //               </div>
// //             </Card>
// //           </Col>
// //         ))}
// //       </Row>
// //     </div>
// //   );
// // };

// // export default FavoritePage;


// // import React from "react";
// // import Card from "react-bootstrap/Card";
// // import { Container, Row, Col } from "react-bootstrap";
// // import StarRatingApp from "./StarRatingApp";

// // const FavoritePage = ({ courses, favorites }) => {
// //   // Filter favorite items
// //   const favoriteItems = courses.filter(item => favorites.includes(item.id));

// //   return (
// //     <div style={{ backgroundColor: "#edfafa" }}>
// //       <Container>
// //         <h4>Favorite Courses</h4>
// //         <Row>
// //           {favoriteItems.map(item => (
// //             <Col key={item.id} style={{ marginBottom: "20px" }}>
// //               <Card style={{ width: "18rem" }}>
// //                 <a href={item.link}>
// //                   <Card.Img style={{ height: "12rem" }} variant="top" src={item.imageUrl} />
// //                 </a>
// //                 <Card.Body>
// //                   <h6>{item.para}</h6>
// //                   <StarRatingApp />
// //                 </Card.Body>
// //               </Card>
// //             </Col>
// //           ))}
// //         </Row>
// //       </Container>
// //     </div>
// //   );
// // };

// // export default FavoritePage;



// // import React from "react";
// // import Card from "react-bootstrap/Card";
// // import { Container, Row, Col } from "react-bootstrap";
// // import StarRatingApp from "./StarRatingApp";

// // const FavoritePage = ({ courses, favorites }) => {
// //   // Check if courses is defined before filtering
// //   const favoriteCourses = courses ? courses.filter(course => favorites.includes(course.id)) : [];

// //   return (
// //     <div style={{ backgroundColor: "#edfafa" }}>
        
// //       <Container>
// //         <h4>Favorite Courses</h4>
// //         <Row>
// //           {favoriteCourses.map(course => (
// //             <Col key={course.id} style={{ marginBottom: "20px" }}>
// //               <Card style={{ width: "18rem" }}>
// //                 <Card.Img style={{ height: "12rem" }} variant="top" src={course.image} />
// //                 <Card.Body>
// //                   <h6>{course.name}</h6>
// //                   <StarRatingApp />
// //                 </Card.Body>
// //               </Card>
// //             </Col>
// //           ))}
// //         </Row>
// //       </Container>
// //       <div  courses={courses} favorites={favorites} />

// //     </div>
// //   );
// // };

// // export default FavoritePage;
 