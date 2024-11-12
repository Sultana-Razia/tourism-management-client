import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const MyList = () => {
    const { user } = useContext(AuthContext);

    const [myList, setMyList] = useState([]);

    const touristSpots = useLoaderData();
    console.log(touristSpots);



    //{ _id, touristSpot, countryName, location, averageCost, photo, season, travelTime, totalVisitorsPerYear, userName, userEmail, description }


    useEffect(() => {
        fetch(`http://localhost:5000/myList/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyList(data);
            })
    }, [user])

    return (
        <div>
            <Navbar></Navbar>
            <h2 className='text-center text-4xl font-semibold text-[#E8604C] mt-10'>My List</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto mt-10 gap-5'>
                {
                    myList?.map(m => (
                        <div key={m._id} className="bg-white shadow-lg rounded-lg overflow-hidden w-80 mx-auto border border-gray-200">
                            <img src={m.photo} alt={m.touristSpot} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800">{m.touristSpot}</h3>
                                <p className="text-gray-600 mt-1">Average Cost: <span className="font-medium">${m.averageCost}</span></p>
                                <p className="text-gray-600 mt-1">Best Season: <span className="font-medium">{m.season}</span></p>
                                <div className="mt-4 flex space-x-3">
                                    <button
                                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-center py-2 rounded-lg"
                                    >
                                        Update
                                    </button>
                                    <button
                                        className="flex-1 bg-red-500 hover:bg-red-600 text-white text-center py-2 rounded-lg"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyList;