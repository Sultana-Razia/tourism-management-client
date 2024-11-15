import React, { useEffect, useRef, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import Swal from 'sweetalert2';

const UpdateTouristSpot = () => {
    const [update, setUpdate] = useState([]);

    // const updateTouristSpots = useLoaderData();
    // console.log(updateTouristSpots);

    const { id } = useParams();
    console.log(id);

    // const updateTouristSpot = updateTouristSpots.find(item => item._id === id);
    // console.log(updateTouristSpot);

    useEffect(() => {
        fetch(`https://tourism-management-server-flax.vercel.app/update/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUpdate(data);
            })
    }, [id])

    console.log(update)

    const textAreaRef = useRef(null);

    // const { _id, touristSpot, countryName, location, averageCost, photo, season, travelTime, totalVisitorsPerYear, userName, userEmail, description } = updateTouristSpot;

    const handleUpdate = event => {
        event.preventDefault();

        const form = event.target;

        const touristSpot = form.spot_name.value;
        const countryName = form.country_Name.value;
        const location = form.location.value;
        const averageCost = form.average_cost.value;
        const photo = form.photo_url.value;
        const season = form.seasonality.value;
        const travelTime = form.travel_time.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const description = textAreaRef.current.value;

        // console.log(touristSpot, countryName, location, averageCost, photo, season, travelTime, totalVisitorsPerYear, userName, userEmail, description);

        const update = { touristSpot, countryName, location, averageCost, photo, season, travelTime, totalVisitorsPerYear, description };
        console.log(update);

        //Send data to the server
        fetch(`https://tourism-management-server-flax.vercel.app/updateTouristSpot/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Tourist spot updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }



    return (
        <div>
            <Navbar></Navbar>
            <div className='w-[80%] mx-auto mt-10'>
                <form onSubmit={handleUpdate} className='px-28 pb-16'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
                        {/* First Row */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-[#1B1A1ACC] text-lg font-semibold">Tourists Spot Name</span>
                            </div>
                            <input type="text" placeholder="Enter Tourists Spot Name" name='spot_name' defaultValue={update.touristSpot}
                                className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-[#1B1A1ACC] text-lg font-semibold">Country Name</span>
                            </div>
                            <input type="text" placeholder="Enter Country Name" name='country_Name'
                                defaultValue={update.countryName}
                                className="input input-bordered w-full" />
                        </label>
                        {/* Second Row */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-[#1B1A1ACC] text-lg font-semibold">Location</span>
                            </div>
                            <input type="text" placeholder="Enter location" name='location'
                                defaultValue={update.location} className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-[#1B1A1ACC] text-lg font-semibold">Average Cost</span>
                            </div>
                            <input type="text" placeholder="Enter Average Cost" name='average_cost' defaultValue={update.averageCost} className="input input-bordered w-full" />
                        </label>
                        {/* Third Row */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-[#1B1A1ACC] text-lg font-semibold">Photo URL</span>
                            </div>
                            <input type="text" placeholder="Enter Photo URL" name='photo_url'
                                defaultValue={update.photo} className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-[#1B1A1ACC] text-lg font-semibold">Seasonality</span>
                            </div>
                            <input type="text" placeholder="Enter Season" name='seasonality'
                                defaultValue={update.season} className="input input-bordered w-full" />
                        </label>
                        {/* Fourth Row */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-[#1B1A1ACC] text-lg font-semibold">Travel Time</span>
                            </div>
                            <input type="text" placeholder="Enter Travel Time" name='travel_time'
                                defaultValue={update.travelTime}
                                className="input input-bordered w-full" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-[#1B1A1ACC] text-lg font-semibold">Total Visitors Per Year</span>
                            </div>
                            <input type="text" placeholder="Enter Total Visitors Per Year" name='totalVisitorsPerYear'
                                defaultValue={update.totalVisitorsPerYear} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className='mt-5'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text text-[#1B1A1ACC] text-lg font-semibold">Short Description</span>
                            </div>
                            <textarea className="textarea textarea-bordered" ref={textAreaRef} name='text_area' defaultValue={update.description} placeholder="Short Description"></textarea>
                        </label>
                    </div>
                    <div className='w-full text-[#331A15] border-[#331A15] rounded-md text-center py-2 mt-6 font-semibold rancho-google-font'>
                        <input type="submit" value="Update" className='btn btn-block text-2xl text-white bg-[#E8604C]' />
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UpdateTouristSpot;