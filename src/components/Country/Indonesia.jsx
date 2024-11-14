import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import TouristSpotCard from '../TouristSpotCard';
import CountryCard from './CountryCard';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';

const Indonesia = () => {

    const touristSpots = useLoaderData();
    console.log(touristSpots);

    // const { _id, touristSpot, countryName, location, averageCost, photo, season, travelTime, totalVisitorsPerYear, userName, userEmail, description }= touristSpots

    const { country } = useParams();
    console.log(country);

    const indonesiaSpot = touristSpots.filter(indonesia => indonesia.countryName.toUpperCase() == country.toUpperCase());
    console.log(indonesiaSpot);

    return (
        <div>
            <Navbar></Navbar>
            <div className='w-[80%] mx-auto'>
                <h2 className='text-4xl text-center my-10 text-[#E8604C] font-medium lobster-regular'>

                </h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        indonesiaSpot.map(country => <CountryCard
                            key={country._id}
                            country={country}
                        ></CountryCard>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Indonesia;