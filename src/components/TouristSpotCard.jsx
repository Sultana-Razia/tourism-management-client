import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TouristSpotCard = ({ allTouristSpot }) => {

    const { _id, touristSpot, countryName, location, averageCost, photo, season, travelTime, totalVisitorsPerYear, userName, userEmail, description } = allTouristSpot;
    // console.log(photo);

    // console.log(allTouristSpot);



    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs mx-auto mt-10">
            <img src={photo} alt={touristSpot} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{touristSpot}</h3>
                <p className="text-gray-700"><strong>Average Cost:</strong> ${averageCost}</p>
                <p className="text-gray-700"><strong>Total Visitors per Year:</strong> {totalVisitorsPerYear}</p>
                <p className="text-gray-700"><strong>Travel Time:</strong> {travelTime}</p>
                <p className="text-gray-700"><strong>Seasonality:</strong> {season}</p>
                <Link to={`/touristSpot/${_id}`}>
                    <button
                        className="mt-4 w-full bg-[#E8604C] text-white py-2 px-4 rounded hover:bg-[#f8563e]"
                    >
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default TouristSpotCard;