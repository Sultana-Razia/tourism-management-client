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
        <div>
            {/* <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div> */}
            <div>
                <Slider {...settings}>
                    <div>
                        <img className="h-[300px] md:h-[400px] lg:h-[500px] w-full" src={image1} alt="" />
                    </div>
                    <div>
                        <img className="h-[300px] md:h-[400px] lg:h-[500px] w-full" src={image2} alt="" />
                    </div>
                    <div>
                        <img className="h-[300px] md:h-[400px] lg:h-[500px] w-full" src={image1} alt="" />
                    </div>
                    <div>
                        <img className="h-[300px] md:h-[400px] lg:h-[500px] w-full" src={image1} alt="" />
                    </div>
                    <div>
                        <img className="h-[300px] md:h-[400px] lg:h-[500px] w-full" src={image2} alt="" />
                    </div>
                    <div>
                        <img className="h-[300px] md:h-[400px] lg:h-[500px] w-full" src={image1} alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Banner;