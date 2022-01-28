import React, {useCallback, useContext} from 'react';
import {CarouselContext} from '../../Carousel';

export default function Arrows () {
  const {changeSlide} = useContext(CarouselContext);
  /* eslint-disable react-hooks/exhaustive-deps */
  const changeSlideCallback = useCallback(changeSlide);
  /* eslint-enable react-hooks/exhaustive-deps */

  return (
    <div className='direction'>
      <div className='icon back' onClick={() => changeSlideCallback(-1)} />
      <div className='icon next' onClick={() => changeSlideCallback(1)} />
    </div>
  );
}
