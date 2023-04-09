import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className='flex items-center justify-around mt-12'>
            <div>
                <h3 className='text-4xl font-mono font-bold'>JobHub</h3>
            </div>

            <div className='flex justify-center items-center gap-10 font-bold'>
                <Link to="/">Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/appliedjob">Applied Jobs</Link>
                <Link to="/blog">Blog</Link>
            </div>
            <div>
                <button className='btn-apply p-3 rounded-lg'>Star Applying</button>
            </div>

        </nav>
    );
};

export default Navbar;