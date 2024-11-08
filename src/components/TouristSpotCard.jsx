import React from 'react';

const TouristSpotCard = ({ allTouristSpot }) => {

    const { touristSpot, countryName, location, averageCost, photo, season, travelTime, totalVisitorsPerYear, userName, userEmail, description } = allTouristSpot;
    console.log(photo);

    console.log(allTouristSpot)

    return (
        // <div className="card bg-base-100 w-96 shadow-xl mt-9">
        //     <figure>
        //         <img
        //             src={photo}
        //             alt={touristSpot} />
        //     </figure>
        //     <div className="card-body">
        //         <h2 className="card-title">
        //             <div className="">{touristSpot}</div>
        //         </h2>
        //         <div className=''>
        //             <p>Average Cost: <span className='text-[#E8604C]'>${averageCost}</span></p>
        //             <p>{totalVisitorsPerYear}</p>
        //             <p>{travelTime}</p>
        //             <p>{season}</p>
        //         </div>
        //         <div className="card-actions">
        //             <div className="bg-[#E8604C] px-4 py-2 rounded-md mt-2"><button className='text-white '>View Details</button></div>
        //         </div>
        //     </div>
        // </div>
        <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs mx-auto mt-10">
            <img src={photo} alt={touristSpot} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{touristSpot}</h3>
                <p className="text-gray-700"><strong>Average Cost:</strong> ${averageCost}</p>
                <p className="text-gray-700"><strong>Total Visitors per Year:</strong> {totalVisitorsPerYear}</p>
                <p className="text-gray-700"><strong>Travel Time:</strong> {travelTime}</p>
                <p className="text-gray-700"><strong>Seasonality:</strong> {season}</p>
                <button
                    className="mt-4 w-full bg-[#E8604C] text-white py-2 px-4 rounded hover:bg-[#f8563e]"
                >
                    View Details
                </button>
            </div>
        </div>
    );
};

export default TouristSpotCard;