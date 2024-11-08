import React, { useRef } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Swal from 'sweetalert2';

const AddTouristSpot = () => {

    const textAreaRef = useRef(null);

    const handleAddTouristSpot = event => {
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
        const userName = form.user_name.value;
        const userEmail = form.user_email.value;
        const description = textAreaRef.current.value;

        // console.log(touristSpot, countryName, location, averageCost, photo, season, travelTime, totalVisitorsPerYear, userName, userEmail, description);

        const newSpot = { touristSpot, countryName, location, averageCost, photo, season, travelTime, totalVisitorsPerYear, userName, userEmail, description };
        console.log(newSpot);

        //Send data to the server
        fetch('http://localhost:5000/touristSpot', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Tourist spot added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }


    return (
        <div>
            <Navbar></Navbar>

            <div className='w-[80%] mx-auto my-9 '>
                <div className='bg-[#F4F3F0] rounded-md'>
                    <h2 className='text-center text-[#E8604C] text-5xl pt-16 rancho-google-font font-extrabold'>Add Tourist Spot</h2>
                    <p className='text-center text-lg text-[#1B1A1AB3] py-8 px-28 raleway-google-font'>Thisis a feature that allows users to contribute to our growing travel guide by sharing new and exciting destinations. Whether it's a hidden gem or a popular attraction, users can easily submit details about a tourist spot, including its name, location, a brief description, entry costs, and seasonal highlights. This collaborative platform encourages travelers to enrich the community's knowledge, helping others discover unique places worldwide. </p>
                    <form onSubmit={handleAddTouristSpot} className='px-28 pb-16'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
                            {/* First Row */}
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-[#1B1A1ACC] text-lg font-semibold">Tourists Spot Name</span>
                                </div>
                                <input type="text" placeholder="Enter Tourists Spot Name" name='spot_name' className="input input-bordered w-full" />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-[#1B1A1ACC] text-lg font-semibold">Country Name</span>
                                </div>
                                <input type="text" placeholder="Enter Country Name" name='country_Name' className="input input-bordered w-full" />
                            </label>
                            {/* Second Row */}
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-[#1B1A1ACC] text-lg font-semibold">Location</span>
                                </div>
                                <input type="text" placeholder="Enter location" name='location' className="input input-bordered w-full" />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-[#1B1A1ACC] text-lg font-semibold">Average Cost</span>
                                </div>
                                <input type="text" placeholder="Enter Average Cost" name='average_cost' className="input input-bordered w-full" />
                            </label>
                            {/* Third Row */}
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-[#1B1A1ACC] text-lg font-semibold">Photo URL</span>
                                </div>
                                <input type="text" placeholder="Enter Photo URL" name='photo_url' className="input input-bordered w-full" />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-[#1B1A1ACC] text-lg font-semibold">Seasonality</span>
                                </div>
                                <input type="text" placeholder="Enter Season" name='seasonality' className="input input-bordered w-full" />
                            </label>
                            {/* Fourth Row */}
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-[#1B1A1ACC] text-lg font-semibold">Travel Time</span>
                                </div>
                                <input type="text" placeholder="Enter Travel Time" name='travel_time' className="input input-bordered w-full" />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-[#1B1A1ACC] text-lg font-semibold">Total Visitors Per Year</span>
                                </div>
                                <input type="text" placeholder="Enter Total Visitors Per Year" name='totalVisitorsPerYear' className="input input-bordered w-full" />
                            </label>
                            {/* Fifth Row */}
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-[#1B1A1ACC] text-lg font-semibold">User Name</span>
                                </div>
                                <input type="text" placeholder="User Name" name='user_name' className="input input-bordered w-full" />
                            </label>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-[#1B1A1ACC] text-lg font-semibold">User Email</span>
                                </div>
                                <input type="email" placeholder="User Email" name='user_email' className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text text-[#1B1A1ACC] text-lg font-semibold">Short Description</span>
                                </div>
                                <textarea className="textarea textarea-bordered" ref={textAreaRef} name='text-area' placeholder="Short Description"></textarea>
                            </label>
                        </div>
                        <div className='w-full text-[#331A15] border-[#331A15] rounded-md text-center py-2 mt-6 font-semibold rancho-google-font'>
                            <input type="submit" value="Add" className='btn btn-block text-2xl text-white bg-[#E8604C]' />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddTouristSpot;