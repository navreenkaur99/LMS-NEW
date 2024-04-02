import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';


const StarRating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 0.5;

        return (
           <label key={i}>
            <FaStar
             style={{ margin: '5px',
                cursor: 'pointer'}}
                onClick={() => setRating(ratingValue)}
           
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={30}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};


const StarRatingApp = () => {
  return (
    <div>
      <StarRating />
    </div>
  );
};

export default StarRatingApp;
