import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from '../../assets/images/card1.jpg'
import image2 from '../../assets/images/card2.jpg'

const Banner = () => {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        adaptiveHeight: true
    };

    return (
        <div className='w-[80%] mx-auto mt-3'>
            <Slider {...settings}>
                <div>
                    <img className="h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-md" src={image1} alt="" />
                </div>
                <div>
                    <img className="h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-md" src={image2} alt="" />
                </div>
                <div>
                    <img className="h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-md" src={image1} alt="" />
                </div>
                <div>
                    <img className="h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-md" src={image1} alt="" />
                </div>
                <div>
                    <img className="h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-md" src={image2} alt="" />
                </div>
                <div>
                    <img className="h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-md" src={image1} alt="" />
                </div>
            </Slider>
        </div>
    );
};

export default Banner;