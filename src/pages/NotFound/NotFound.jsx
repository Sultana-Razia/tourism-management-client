import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1 className='pt-5'>Page Not Found</h1>
            {/* <p className="zoom-area"><b>CSS</b> animations to make a cool 404 page. </p> */}
            <section className="error-container">
                <span className="four"><span class="screen-reader-text">4</span></span>
                <span className="zero"><span class="screen-reader-text">0</span></span>
                <span className="four"><span class="screen-reader-text">4</span></span>
            </section>
            <div className="link-container">
                {/* <a target="_blank" href="https://www.silocreativo.com/en/creative-examples-404-error-css/" className="more-link">Visit the original article</a> */}
                <a className="more-link"><Link to='/'>Go Home</Link></a>
            </div>
        </div>
    );
};

export default NotFound;