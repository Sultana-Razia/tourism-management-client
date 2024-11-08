import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import TouristSpotCard from '../../components/TouristSpotCard';

const AllTouristSpot = () => {

    const allTouristSpots = useLoaderData();

    return (
        <div>
            <Navbar></Navbar>
            <h2 className='text-6xl text-center'>All Tourist Spot : {allTouristSpots.length}</h2>
            <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    allTouristSpots.map(allTouristSpot => <TouristSpotCard
                        key={allTouristSpot._id}
                        allTouristSpot={allTouristSpot}
                    ></TouristSpotCard>)
                }
            </div>
        </div>
    );
};

export default AllTouristSpot;