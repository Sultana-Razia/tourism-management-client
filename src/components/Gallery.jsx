import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {

    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className='w-[80%] mx-auto mt-24 '>
            <div className='text-4xl text-center mt-10 text-[#E8604C] font-medium lobster-regular'>
                <h2>Gallery</h2>
            </div>
            <div className='slider-container mt-10'>
                <Slider {...settings}>
                    <div className=''>
                        <img className='h-[200px] w-[200px] rounded-md'
                            src="https://thebaliguideline.com/build/blog/img/bali-common-questions-why-is-bali-so-famous-02.jpg" alt="Bali" />
                    </div>
                    <div className=''>
                        <img className='h-[200px] w-[200px] rounded-md'
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQVysd6E1rgfJuQ0RvMOSbYyqxYiyHC64QVRiHUz8zmZ-6_0e0q3hLPeYtG4oB99Gsq7w&usqp=CAU" alt="Borobudur Temple" />
                    </div>
                    <div className=''>
                        <img className="h-[200px] w-[200px] rounded-md"
                            src="https://www.rjtravelagency.com/wp-content/uploads/2023/09/Indonesia.jpg" alt="Indonesia" />
                    </div>
                    <div className=''>
                        <img className="h-[200px] w-[200px] rounded-md"
                            src="https://d1shf7n3qgesaf.cloudfront.net/wp-content/uploads/20240521155530/BALCountryOverview_Malaysia.webp" alt="Malaysia" />
                    </div>
                    <div className=''>
                        <img className="h-[200px] w-[200px] rounded-md"
                            src="https://www.ana.co.jp/www2/plan-book/where-we-travel/singapore/singapore-02.jpg" alt="Singapore" />
                    </div>
                    <div className=''>
                        <img className="h-[200px] w-[200px] rounded-md"
                            src="https://www.expat.hsbc.com/content/dam/hsbc/mbos/img/international-banking/16-9/3347-thailand-2-2000x1125.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg" alt="Thailand" />
                    </div>
                    <div className=''>
                        <img className="h-[200px] w-[200px] rounded-md"
                            src="https://kampatour.com/pic/news/1b26bb3d-1cb7-4ad1-b161-dcf194e08ba6.jpg" alt="Vietnam" />
                    </div>
                    <div className=''>
                        <img className="h-[200px] w-[200px] rounded-md"
                            src="https://assets.airtrfx.com/media-em/library/countries/philippines-PH.jpg" alt="Philippines" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default Gallery;