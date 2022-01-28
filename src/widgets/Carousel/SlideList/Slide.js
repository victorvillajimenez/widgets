import React from 'react';

export default function Slide ({data, isShow}) {
  return (
    <div className='slide'>
      <img
        src={data.image}
        alt='description'
        className='slideImage'
      />
    </div>
  );
}
