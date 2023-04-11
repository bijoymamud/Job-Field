import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className='flex items-center justify-around mt-2  px-2 md:mt-8'>
            <div>
                <h3 className='text-3xl me-2 md:text-4xl font-mono font-bold'>JobHub</h3>
            </div>

            <div className='flex justify-center gap-5 text-xs items-center me-2 md:gap-10 font-bold md:text-xl'>
                <Link to="/">Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/appliedjob">Applied Jobs</Link>
                <Link to="/blog">Blog</Link>
            </div>
            <div>
                <button className='btn-apply text-xs md:text-xl font-bold p-3 md:p-3 rounded-lg'>Star Applying</button>
            </div>

        </nav>
    );
};

export default Navbar;