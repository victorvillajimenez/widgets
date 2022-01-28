import React, {useEffect, useState, createContext} from 'react';
import Controls from './Controls';
import SlideList from './SlideList';
import {IMAGES} from './data/images';
import './index.scss';

export const CarouselContext = createContext();

export default function Carousel ({
  width = '100%',
  height = '100%',
  autoPlayTime = 5000,
  autoPlay
}) {
  const [items, setItems] = useState([]);
  const [slide, setSlide] = useState(0);

  const changeSlide = (direction = 1) => {
    const newIndex = slide + direction;
    const size = items.length;
    const slideNum = newIndex < 0 ? size - 1 : newIndex % size;
    setSlide(slideNum);
  };

  const goToSlide = num => setSlide(num % items.length);

  useEffect(() => {
    const loadImages = () => {
      setItems(IMAGES);
    };
    loadImages();
  }, [width, height]);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      changeSlide(1);
    }, autoPlayTime);

    return () => clearInterval(interval);
  }, [items.length, slide]);
  /* eslint-enable react-hooks/exhaustive-deps */

  return (
    <div style={{width, height}} className='carousel'>
      <CarouselContext.Provider
        value={{
          goToSlide,
          changeSlide,
          slidesLength: items.length,
          slideNumber: slide
        }}
      >
        <Controls>
          <SlideList items={items} />
        </Controls>
      </CarouselContext.Provider>
    </div>
  );
}
