import React from 'react';
import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {



    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                <img className="w-full h-48 object-cover" src={country.photo} alt={country.touristSpot} />
                <div className="px-6 py-4">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{country.touristSpot}</h2>
                    <p className="text-gray-500 text-sm mb-2">{country.location}</p>
                    <p className="text-gray-700 text-base mb-4">{country.description}</p>
                    <div className="mb-4">
                        <p className="text-gray-600 text-sm mb-2"><strong>Average Cost:</strong> ${country.averageCost}</p>
                        <p className="text-gray-600 text-sm"><strong>Season:</strong> {country.season}</p>
                    </div>
                    <Link to={`/touristSpot/${country._id}`}>
                        <button className="w-full bg-[#E8604C] hover:bg-[#f8492e]  text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CountryCard;