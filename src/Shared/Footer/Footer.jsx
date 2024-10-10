import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";




const Footer = () => {
    return (
        <div className='bg-[#313041] lg:h-[400px] mt-20 px-[10%] pt-16'>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8'>
                <div className='col-span-2'>
                    <a className="btn btn-ghost text-3xl text-[#E8604C] lobster-regular">TravelTrailz</a>
                    <p className='text-[#A9A8B6] mt-2'>Welcome to our Trip and Tour Agency.</p>
                    <p className='text-[#A9A8B6] mt-2 mb-7'>Your next adventure is just a click away. Contact us for more information or to book your dream vacation.</p>
                    <hr />
                    <p className='flex items-center gap-4 mt-6'><FaPhoneAlt className='text-[#E8604C] ' /> <span className='text-[#A9A8B6]'>9458 555 000</span></p>
                    <p className='flex items-center gap-4 mt-3'><MdEmail className='text-[#E8604C] ' /> <span className='text-[#A9A8B6]'>info@TravelTrailz.com</span></p>
                    <p className='flex items-center gap-4 mt-3'><IoLocation className='text-[#E8604C] ' /> <span className='text-[#A9A8B6]'>235 West 46th Street New York USA</span></p>
                </div>
                <div className='col-span-1 text-[#A9A8B6]'>
                    <h2 className='text-white font-semibold text-2xl mb-5'>Company</h2>
                    <div className='col-span-1 space-y-3 text-[#A9A8B6]'>
                        <p>About Us</p>
                        <p>Community Blog</p>
                        <p>Rewards</p>
                        <p>Work with Us</p>
                        <p>Contact</p>
                    </div>
                </div>
                <div className='col-span-1'>
                    <h2 className='text-white font-semibold text-2xl mb-5'>Explore</h2>
                    <div className='col-span-1 space-y-3 text-[#A9A8B6]'>
                        <p>Account</p>
                        <p>Privacy Policy</p>
                        <p>Affiliate Program</p>
                        <p>Our Partner</p>
                        <p>Events</p>
                    </div>
                </div>
                <div className='col-span-2 text-[#A9A8B6]'>
                    <h2 className='text-white font-semibold text-2xl mb-5'>Newsletter</h2>
                    <form>
                        <input className='px-16 py-4 rounded-md bg-[#22222E] text-white text-center' type="email" name="email" placeholder='Email Address' id="" />
                        <br />
                        <input className='px-28 py-4 rounded-md bg-[#E8604C] text-white font-bold mt-5' type="submit" value="SUBSCRIBE" />
                    </form>
                </div>
            </div>

            <small className='flex justify-center mt-16 text-center text-[#A9A8B6]'>©Copyright 2024 by  <span className='text-[#E8604C]'>  TravelTrailz</span></small>
        </div>
    );
};

export default Footer;