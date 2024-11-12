import React from 'react';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { CgProfile } from "react-icons/cg";
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    // console.log(user);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }


    return (
        <div className="navbar bg-base-100 w-[80%] mx-auto mt-10">
            <div className="">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/allTouristSpot'>All Tourists Spot</NavLink></li>
                        <li>
                            <a>My List</a>
                            <ul className="p-2">
                                <li><NavLink to='/myList'>My List</NavLink></li>
                                <li><NavLink to='/addTouristSpot'>Add Tourists Spot</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to='/about'>About Us</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl text-[#E8604C] lobster-regular">TravelTrailz</a>
            </div>
            <div className="w-[80%] hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/' className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>Home</NavLink></li>
                    <li><NavLink to='/allTouristSpot' className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>AllTouristsSpot</NavLink></li>
                    <li>
                        <details>
                            <summary>My List</summary>
                            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li><NavLink to='/addTouristSpot' className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>AddTouristsSpot</NavLink></li>
                                <li><NavLink to='/myList' className={({ isActive }) => (isActive ? 'active-link' : 'inactive-link')}>My List</NavLink></li>
                            </ul>
                        </details>
                    </li>
                    <li><NavLink to='/about'>About Us</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                </ul>
            </div>

            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-20 relative">
                            {
                                user ?
                                    <div className="w-16 rounded-full group absolute  top-1 -left-3 px-3 pb-11">
                                        <span className="hidden group-hover:block text-xs">
                                            {user?.displayName}
                                        </span>
                                        <img
                                            className="rounded-full"
                                            alt="user photo"
                                            src={user?.photoURL} />
                                    </div>
                                    :
                                    <CgProfile className='text-4xl mt-[2px] ml-[2px] text-[#E8604C]' />
                            }
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <div>
                            {
                                user ?
                                    <li><NavLink to='' onClick={handleSignOut}>Sign Out</NavLink></li>
                                    :
                                    <li><NavLink to='/login'>Login</NavLink></li>
                            }
                        </div>
                        <li><NavLink to='/register'>Register</NavLink></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Navbar;