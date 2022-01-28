import React, {useState} from 'react';
import Star from './Star';
import './index.css';

export default function StarRating ({
  size = 5,
  value = 0,
  onClick
}) {
  const [rating, setRating] = useState(value);
  const [hover, setHover] = useState(null);

  return (
    <div className='starRating'>
      {[...Array(size).keys()].map(starIdx =>
        <Star
          key={starIdx}
          value={starIdx + 1}
          rating={rating}
          setRating={setRating}
          hover={hover}
          setHover={setHover}
        />
      )}
    </div>
  );
}
