import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div>
                <h3 className='text'>JobHub</h3>
            </div>

            <div>
                <Link to="/">Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/appliedjob">Applied Jobs</Link>
                <Link to="/blog">Blog</Link>
            </div>
            <div>
                <button>Star Applying</button>
            </div>

        </nav>
    );
};

export default Navbar;