import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
// import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyList = () => {
    const { user } = useContext(AuthContext);

    const [myList, setMyList] = useState([]);

    // const touristSpots = useLoaderData();
    // console.log(touristSpots);



    //{ _id, touristSpot, countryName, location, averageCost, photo, season, travelTime, totalVisitorsPerYear, userName, userEmail, description }


    useEffect(() => {
        fetch(`http://localhost:5000/myList/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyList(data);
            })
    }, [user])


    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/touristSpot/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your tourist spot has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

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
                                    <Link className='flex-1 bg-blue-500 hover:bg-blue-600 text-white text-center py-2 rounded-lg' to={m._id}>
                                        <button
                                            className=""
                                        >
                                            Update
                                        </button>
                                    </Link>
                                    <Link className='flex-1 bg-red-500 hover:bg-red-600 text-white text-center py-2 rounded-lg'>
                                        <button
                                            onClick={() => handleDelete(m._id)}
                                            className=""
                                        >
                                            Delete
                                        </button>
                                    </Link>
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