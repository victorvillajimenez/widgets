import React, {memo} from 'react';

function Star ({
  value,
  rating,
  setRating,
  hover,
  setHover
}) {
  const onMouseEnter = () => setHover(value);
  const onMouseLeave = () => setHover(null);
  const onClickItem = () => setRating(value);

  const color = value <= (hover || rating) ? '#EFAB11' : 'GREY';

  return (
    <label>
      <input
        type='radio'
        name='rating'
        value={value}
        onClick={onClickItem}
      />

      <div
        className='star'
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <svg
          height='55px'
          width='53px'
          viewBox='0 0 25 23'
          fill={color}
        >
          <polygon
            strokeWidth='0'
            points='9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78'
          />
        </svg>
      </div>
    </label>
  );
}

export default memo(Star);
