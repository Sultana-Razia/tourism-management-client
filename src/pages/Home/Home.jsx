import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2>This is home.</h2>
            <Banner></Banner>
        </div>
    );
};

export default Home;