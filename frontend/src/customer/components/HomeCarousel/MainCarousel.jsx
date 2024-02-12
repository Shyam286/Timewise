import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};



const MainCarousel = () => {
    const items = mainCarouselData.map((item) => <img className="cursor-pointer" src={item.image} role="presentation" alt="" />);

    return (
        <div className=' -z-10'>
            <AliceCarousel
                items={items}
                responsive={responsive}
                disableButtonsControls
                autoPlay
                autoPlayInterval={1000}
                infinite
            />
        </div>

    )

}

export default MainCarousel;