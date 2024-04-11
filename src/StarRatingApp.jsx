import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label key={i}>
            <FaStar
              style={{
                margin: '5px',
                cursor: 'pointer'
              }}
              onClick={() => setRating(ratingValue)}
              color={ratingValue <= (hover || rating) ? "#294573" : "#e4e5e9"}
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

const StarRatingApp = () => {
  return (
    <div>
      <StarRating />
    </div>
  );
};

export default StarRatingApp;
