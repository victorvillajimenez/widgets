import React from 'react';
import Arrows from './Arrows';
import Indicator from './Indicator';
import './index.scss';

export default function Controls ({ children }) {
  return (
    <>
      <div className='slideContainer'>
        <Arrows />
        {children}
      </div>
      <Indicator />
    </>
  );
}
