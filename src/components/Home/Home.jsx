import React from 'react';
import Jobs from '../Jobs/Jobs';
import "./Home.css";

const Home = () => {
    return (
        <div>
            <div className='mt-10 container mx-auto'>

                <div className='md:flex items-center justify-between '>
                    <div className='w-2/4 ms-2 md:ms-24'>
                        <h3 className='font-extrabold text-7xl'>One Step <br /> Closer To Your <br /> <span className='text-violet-500 '>Dream Job</span></h3>
                        <p className='mt-5 mb-5 md:mt-10'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                        <button className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900 mt-3">Get Started</button>

                    </div>
                    <div>
                        <img src="../../../public/All Images/P3OLGJ1 copy 1.png" alt="" />
                    </div>
                </div>
            </div>

            <Jobs></Jobs>
        </div>
    );
};

export default Home;