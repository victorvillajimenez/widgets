import React, {useContext} from 'react';
import Slide from './Slide';
import {CarouselContext} from '../../Carousel';

export default function SlideList ({ items = [] }) {
  const {slideNumber} = useContext(CarouselContext);

  return (
    <div
      className='slideList'
      style={{transform: `translateX(-${slideNumber * 100}%)`}}
    >
      {items.map((slide, index) =>
        <Slide
          key={index}
          data={slide}
          isShow={index === slideNumber}
        />
      )}
    </div>
  );
}
