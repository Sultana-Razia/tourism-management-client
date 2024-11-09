import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import { useLoaderData, useParams } from 'react-router-dom';

const TouristSpotDetails = () => {

    const touristSpot = useLoaderData();
    // console.log(touristSpot);

    const { id } = useParams();
    // console.log(id);
    const spotDetails = touristSpot.find(spotDetail => spotDetail._id === id);
    // console.log(spotDetails);
    //{ _id, touristSpot, countryName, location, averageCost, photo, season, travelTime, totalVisitorsPerYear, userName, userEmail, description }

    return (
        <div>
            <Navbar></Navbar>
            <div className="container mx-auto p-4">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src={spotDetails.photo} alt={spotDetails.touristSpot} className="w-full h-64 object-cover" />
                    <div className="p-6">
                        <h2 className="text-3xl font-bold mb-2">{spotDetails.touristSpot}</h2>
                        <p className="text-gray-500 text-lg mb-4">{spotDetails.countryName}, {spotDetails.location}</p>

                        <p className="text-gray-700 mb-4">{spotDetails.description}</p>

                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <div>
                                <p className="text-gray-600 font-semibold">Average Cost:</p>
                                <p className="text-gray-800">${spotDetails.averageCost}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 font-semibold">Seasonality:</p>
                                <p className="text-gray-800">{spotDetails.season}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 font-semibold">Travel Time:</p>
                                <p className="text-gray-800">{spotDetails.travelTime}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 font-semibold">Total Visitors per Year:</p>
                                <p className="text-gray-800">{spotDetails.totalVisitorsPerYear}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default TouristSpotDetails;
