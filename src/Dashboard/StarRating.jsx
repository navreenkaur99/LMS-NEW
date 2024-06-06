// import axios from 'axios';
// import React, { useState, useEffect } from 'react';

// const StarRating = ({ initialRating, cardId }) => {
//   const [rating, setRating] = useState(initialRating);

//   useEffect(() => {
//     // Fetch rating from backend when component mounts
//     fetchRating();
//   }, []);

//   const fetchRating = async () => {
//     try {
//       // Make a GET request to fetch the rating for the card
//       const response = await axios.get(`http://localhost:4000/api/v1/getrating/${cardId}`);
//       // Update the rating state with the fetched rating
//       setRating(response.data.rating);
//     } catch (error) {
//       console.error('Error fetching rating:', error);
//     }
//   };

//   return (
//     <div>
//       <span>Rating: {rating}/5</span>
//       {/* Render star icons based on the fetched rating */}
//       {/* Add logic to render star icons here */}
//     </div>
//   );
// };

// export default StarRating;
