import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
};



const MainCarousel = () => {
    const items = mainCarouselData.map((item) => <a href={`${item.path}`}><img className="cursor-pointer" src={item.image} role="presentation" alt="" /></a>);
    
    return (
        <div className=' -z-10'>
            <AliceCarousel
                items={items}
                responsive={responsive}
                disableButtonsControls
                autoPlay
                autoPlayInterval={2000}
                infinite
            />
        </div>

    )

}

export default MainCarousel;