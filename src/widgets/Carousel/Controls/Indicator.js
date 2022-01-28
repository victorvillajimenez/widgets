import React, {useContext} from 'react';
import Dot from './Dot';
import {CarouselContext} from '../../Carousel';

export default function Indicator () {
  const {slidesLength} = useContext(CarouselContext);

  return (
    <div className='indicator'>
      {[...Array(slidesLength).keys()].map(i =>
        <Dot key={i} number={i} />
      )}
    </div>
  );
}
