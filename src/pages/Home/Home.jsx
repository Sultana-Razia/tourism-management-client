import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import { Link, useLoaderData } from 'react-router-dom';
import TouristSpotCard from '../../components/TouristSpotCard';
import Gallery from '../../components/Gallery';

import image1 from '../../assets/images/card1.jpg'
import image2 from '../../assets/images/card2.jpg'
import Discount from '../../components/Discount';

const Home = () => {

    const allTouristSpots = useLoaderData();


    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <div className='w-[80%] mx-auto mt-24'>
                <h2 className='text-4xl text-center text-[#E8604C] font-medium lobster-regular'>Destination List</h2>
                <div className='grid grid-cols-4 gap-3 mt-5'>
                    <Link to={`/country/indonesia`} className='col-span-1'>
                        <div className="bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-wGFN5xMACPOYrgNEdtMOcCv5E8vShfuWJ6b8sf2Oi32SPB-tezV3mncwBjBMcBKSlB0&usqp=CAU')] rounded-md h-[300px] bg-cover">
                            <h1 className='text-white font-bold text-3xl text-center lobster-regular pt-16'>Indonesia</h1>
                        </div>
                    </Link>
                    <Link to={`/country/malaysia`} className='col-span-2'>
                        <div className="bg-[url('https://www.outlooktravelmag.com/media/malaysia-tg.png')] rounded-md h-[300px] bg-cover">
                            <h1 className='text-white font-bold text-3xl text-center lobster-regular pt-16'>Malaysia</h1>
                        </div>
                    </Link>
                    <Link to={`/country/singapore`} className='col-span-1'>
                        <div className="bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Skylines_of_the_Central_Business_District%2C_Singapore_at_dusk.jpg/640px-Skylines_of_the_Central_Business_District%2C_Singapore_at_dusk.jpg')] rounded-md h-[300px] bg-cover">
                            <h1 className='text-white font-bold text-3xl text-center lobster-regular pt-16'>Singapore</h1>
                        </div>
                    </Link>
                    <Link to={`/country/thailand`} className='col-span-2'>
                        <div className="bg-[url('https://cdn.tourradar.com/s3/serp/1500x800/4600_t8afNwa2.jpg')] rounded-md h-[300px] bg-cover">
                            <h1 className='text-white font-bold text-3xl text-center lobster-regular pt-16'>Thailand</h1>
                        </div>
                    </Link>
                    <Link to={`/country/vietnam`} className='col-span-2'>
                        <div className="bg-[url('https://www.outlooktravelmag.com/media/vietnam-tg-1024x589.png')] rounded-md h-[300px] bg-cover">
                            <h1 className='text-white font-bold text-3xl text-center lobster-regular pt-16'>Vietnam</h1>
                        </div>
                    </Link>
                </div>
            </div>
            <Discount></Discount>
            <div className='w-[80%] mx-auto'>
                <div className='text-center mt-24'>
                    <h2 className='lobster-regular text-3xl text-[#E8604C]'>Most Popular Tours</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                    {
                        allTouristSpots.slice(0, 3).map(allTouristSpot => <TouristSpotCard
                            key={allTouristSpot._id}
                            allTouristSpot={allTouristSpot}
                        ></TouristSpotCard>)
                    }
                </div>
                <div className='mt-10 text-center'>
                    <Link className='' to={'/allTouristSpot'}><button
                        className='text-white bg-[#E8604C] px-4 py-2 rounded-md text-xl font-medium'
                    >See More</button></Link>
                </div>
            </div>
            <Gallery></Gallery>
            <Footer></Footer>
        </div>
    );
};

export default Home;