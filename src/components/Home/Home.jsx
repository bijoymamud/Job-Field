import React from 'react';
import Jobs from '../Jobs/Jobs';
import "./Home.css";

const Home = () => {
    return (
        <div>
            <div>

                <div className='md:flex items-center justify-between bg-slate-100 '>
                    <div className='w-2/4 ms-2 md:ms-24'>
                        <h3 className='font-extrabold text-7xl'>One Step <br /> Closer To Your <br /> <span className='text-sky-600'>Dream Job</span></h3>
                        <p className='mt-5 mb-5 md:mt-10 text-gray-500 font-medium'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                        <button className="btn-primary">Get Started</button>

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