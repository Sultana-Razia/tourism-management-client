import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import { Link, useLoaderData } from 'react-router-dom';
import TouristSpotCard from '../../components/TouristSpotCard';

const Home = () => {

    const allTouristSpots = useLoaderData();

    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
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
            <Footer></Footer>
        </div>
    );
};

export default Home;