import React, { useState, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

// Define responsive configuration outside the component
const responsive = {
  0: { items: 1 },
  720: { items: 3 },
  1024: { items: 4 },
  1200:{items:5}
};

const HomeSectionCarousel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const slidePrev = () => {
    setActiveIndex((prevIndex) => prevIndex - 1);
    carouselRef.current.slidePrev();
  };

  const slideNext = () => {
    setActiveIndex((prevIndex) => prevIndex + 1);
    carouselRef.current.slideNext();
  };

  const items = data.map((item, index) => (
    <HomeSectionCard key={index} product={item} />
  ));

  return (
    <div className='border'>
      <h1>Discover our {sectionName}</h1>
      <div className='relative p-5'>
        <AliceCarousel
          items={items}
          responsive={responsive}
          buttonsDisabled
          disableButtonsControls
          disableDotsControls
          dotsDisabled
          ref={carouselRef}
        />

        {activeIndex !== items.length - 5 && (
          <Button
            variant='contained'
            onClick={slideNext}
            className='z-50'
            sx={{
              position: 'absolute',
              top: '8rem',
              right: '0rem',
              transform: 'translateX(50%) rotate(90deg)',
              bgcolor: 'white',
            }}
            aria-label='next'
          >
            <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
          </Button>
        )}

        {activeIndex !== 0 && (
          <Button
            variant='contained'
            onClick={slidePrev}
            className='z-50'
            sx={{
              position: 'absolute',
              top: '8rem',
              left: '0rem',
              transform: 'translateX(-50%) rotate(-90deg)',
              bgcolor: 'white',
            }}
            aria-label='prev'
          >
            <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: 'black' }} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
