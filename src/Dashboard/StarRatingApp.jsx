import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';

const StarRating = ({ cardId }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    // Fetch the initial rating when the component mounts
    fetchRating();
  }, []);

  const fetchRating = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/rating/${cardId}`);
      setRating(response.data.rating);
      console.log(rating)
    } catch (error) {
      console.error('Error fetching rating:', error);
    }
  };

  const handleRatingClick = async (ratingValue) => {
    setRating(ratingValue);
    try {
      // Update the rating in the backend
      await axios.post('http://localhost:4000/rating', { id: cardId, rating: ratingValue });
      console.log('Rating saved successfully');
    } catch (error) {
      console.error('Error saving rating:', error);
    }
  };

  return (
    <div>
      {[...Array(5)].map((_, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <FaStar
              style={{ margin: '5px', cursor: 'pointer' }}
              onClick={() => handleRatingClick(ratingValue)}
              color={ratingValue <= (hover || rating) ? '#294573' : '#e4e5e9'}
              size={30}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <div style={{ marginTop: '10px' }}>
        <span>Rating: {rating}/5</span>
      </div>
    </div>
  );
};

export default StarRating;



// import React, { useState, useEffect } from 'react';
// import { FaStar } from 'react-icons/fa';
// import axios from 'axios';

// const StarRating = ({ cardId }) => {
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(null);

//   const handleRatingClick = async (ratingValue) => {
//     setRating(ratingValue);
//     try {
//       // Use the cardId prop from the parent component
//       await axios.post('http://localhost:4000/rating', { id: cardId, rating: ratingValue });
//       console.log('Rating saved successfully');
//     } catch (error) {
//       console.error('Error saving rating:', error);
//     }
//   };

//   return (
//     <div>
//       {[...Array(5)].map((star, i) => {
//         const ratingValue = i + 1;

//         return (
//           <label key={i}>
//             <FaStar
//               style={{
//                 margin: '5px',
//                 cursor: 'pointer'
//               }}
//               onClick={() => handleRatingClick(ratingValue)}
//               color={ratingValue <= (hover || rating) ? "#294573" : "#e4e5e9"}
//               size={30}
//               onMouseEnter={() => setHover(ratingValue)}
//               onMouseLeave={() => setHover(null)}
//             />
//           </label>
//         );
//       })}
//       <div style={{ marginTop: '10px' }}>
//         <span>Rating: {rating}/5</span>
//       </div>
//     </div>
//   );
// };

// export default StarRating;



// import React, { useState, useEffect } from 'react';
// import { FaStar } from 'react-icons/fa';
// import axios from 'axios';

// const StarRating = ({ initialRating, cardId }) => {
//   const [rating, setRating] = useState(initialRating);
//   const [hover, setHover] = useState(null);

//   useEffect(() => {
//     updateRating(); // Call updateRating when initialRating changes
//   }, [initialRating]);

//   const updateRating = () => {
//     axios.put(`http://localhost:4000/api/v1/updaterating/${cardId}`, { rating })
//       .then((response) => {
//         console.log(response.data.message);
//       })
//       .catch((error) => {
//         console.error('Error updating rating:', error);
//       });
//   };

//   const handleRatingClick = (ratingValue) => {
//     setRating(ratingValue);
//   };

//   return (
//     <div>
//       {[...Array(5)].map((_, i) => {
//         const ratingValue = i + 1;
//         return (
//           <label key={i}>
//             <FaStar
//               style={{ margin: '5px', cursor: 'pointer' }}
//               onClick={() => handleRatingClick(ratingValue)}
//               color={ratingValue <= (hover || rating) ? "#294573" : "#e4e5e9"}
//               size={30}
//               onMouseEnter={() => setHover(ratingValue)}
//               onMouseLeave={() => setHover(null)}
//             />
//           </label>
//         );
//       })}
//       <div style={{ marginTop: '10px' }}>
//         <span>Rating: {rating}/5</span>
//       </div>
//     </div>
//   );
// };

// export default StarRating;


// import React, { useState, useEffect } from 'react';
// import { FaStar } from 'react-icons/fa';
// import axios from 'axios';

// const StarRating = () => {
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(null);
//   const [id, setId] = useState(null); // State to store the ID fetched from the backend

//   // Fetch ID from the backend when the component mounts
//   useEffect(() => {
//     const fetchId = async () => {
//       try {
//         const response = await axios.get('http://localhost:4000/data');
//         const data = response.data;
//         // Assuming the ID is fetched from the first data item
//         if (data.length > 0) {
//           setId(data[0].id); // Set the ID state with the fetched ID
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchId();
//   }, []); // Run this effect only once when the component mounts

//   const handleRatingClick = async (ratingValue) => {
//     if (!id) {
//       console.error('ID not available');
//       return;
//     }
//     setRating(ratingValue);
//     try {
//       await axios.post('http://localhost:4000/rating', { id, rating: ratingValue });
//       console.log('Rating saved successfully');
//     } catch (error) {
//       console.error('Error saving rating:', error);
//     }
//   };

//   return (
//     <div>
//       {[...Array(5)].map((star, i) => {
//         const ratingValue = i + 1;

//         return (
//           <label key={i}>
//             <FaStar
//               style={{
//                 margin: '5px',
//                 cursor: 'pointer'
//               }}
//               onClick={() => handleRatingClick(ratingValue)}
//               color={ratingValue <= (hover || rating) ? "#294573" : "#e4e5e9"}
//               size={30}
//               onMouseEnter={() => setHover(ratingValue)}
//               onMouseLeave={() => setHover(null)}
//             />
//           </label>
//         );
//       })}
//       <div style={{ marginTop: '10px' }}>
//         <span>Rating: {rating}/5</span>
//       </div>
//     </div>
//   );
//  };

// export default StarRating;

// import React, { useState , useEffect } from 'react';
// import { FaStar } from 'react-icons/fa';
// import axios from 'axios';

// const StarRating = () => {
//    const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(null);
//   const handleRatingClick = async (ratingValue) => {
//     setRating(ratingValue);
//     try {
//       await axios.post('http://localhost:4000/rating', { id: 'YOUR_DOCUMENT_ID', rating: ratingValue });
//       console.log('Rating saved successfully');
//     } catch (error) {
//       console.error('Error saving rating:', error);
//     }
//   };
//   // const handleRatingClick = async (ratingValue) => {
//   //   setRating(ratingValue);
//   //   try {
//   //     await axios.post('http://localhost:4000/rating', { rating: ratingValue });
//   //     console.log( ratingValue )
//   //     console.log('Rating saved successfully');
//   //   } catch (error) {
//   //     console.error('Error saving rating:', error);
//   //   }
//   // };
//   // const [rating, setRating] = useState(initialRating) // Initial value
//   //   const updateRating = () =>{
//   //     axios.put(`http://localhost:4000/api/v1/updaterating/${cardId}`,{
//   //       rating
//   //     }).then((response)=>{
//   //       console.log(response.data.message)
//   //     })
//   //   }
//   //   useEffect(()=>{
//   //     updateRating()
//   //   },[rating])
//   return (
//     <div>
//       {[...Array(5)].map((star, i) => {
//         const ratingValue = i + 1;

//         return (
//           <label key={i}>
//             <FaStar
//               style={{
//                 margin: '5px',
//                 cursor: 'pointer'
//               }}
//               onClick={() => handleRatingClick(ratingValue)}
//               color={ratingValue <= (hover || rating) ? "#294573" : "#e4e5e9"}
//               size={30}
//               onMouseEnter={() => setHover(ratingValue)}
//               onMouseLeave={() => setHover(null)}
//             />
//           </label>
//         );
//       })}
//       <div style={{ marginTop: '10px' }}>
//         <span>Rating: {rating}/5</span>
//       </div>
//     </div>
//   );
// };

// export default StarRating;

