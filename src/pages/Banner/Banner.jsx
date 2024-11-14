import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import image1 from '../../assets/images/card1.jpg'
// import image2 from '../../assets/images/card2.jpg'

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
                    <img className="h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-md"
                        src="https://www.rjtravelagency.com/wp-content/uploads/2023/09/Indonesia.jpg" alt="Indonesia" />
                </div>
                <div>
                    <img className="h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-md"
                        src="https://d1shf7n3qgesaf.cloudfront.net/wp-content/uploads/20240521155530/BALCountryOverview_Malaysia.webp" alt="Malaysia" />
                </div>
                <div>
                    <img className="h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-md"
                        src="https://www.ana.co.jp/www2/plan-book/where-we-travel/singapore/singapore-02.jpg" alt="Singapore" />
                </div>
                <div>
                    <img className="h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-md"
                        src="https://www.expat.hsbc.com/content/dam/hsbc/mbos/img/international-banking/16-9/3347-thailand-2-2000x1125.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg" alt="Thailand" />
                </div>
                <div>
                    <img className="h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-md"
                        src="https://kampatour.com/pic/news/1b26bb3d-1cb7-4ad1-b161-dcf194e08ba6.jpg" alt="Vietnam" />
                </div>
                <div>
                    <img className="h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-md"
                        src="https://assets.airtrfx.com/media-em/library/countries/philippines-PH.jpg" alt="Philippines" />
                </div>
            </Slider>
        </div>
    );
};

export default Banner;