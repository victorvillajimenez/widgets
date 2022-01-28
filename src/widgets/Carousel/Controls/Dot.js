import React, {useCallback, useContext} from 'react';
import {CarouselContext} from '../../Carousel';

export default function Dot ({ number }) {
  const {
    goToSlide,
    slideNumber
  } = useContext(CarouselContext);
  /* eslint-disable react-hooks/exhaustive-deps */
  const goTo = useCallback(goToSlide);
  /* eslint-enable react-hooks/exhaustive-deps */

  return (
    <div
      className={`dot ${slideNumber === number ? 'selected' : ''}`}
      onClick={() => goTo(number)}
    />
  );
}
