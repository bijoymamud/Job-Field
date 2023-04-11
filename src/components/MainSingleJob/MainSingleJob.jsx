import React from 'react';

const MainSingleJob = ({ mainJob }) => {
    const { id, img, title, subtitle, location, salary } = mainJob
    return (
        <div>
            <div className='text-start mb-3 border bg-white md:shadow-lg p-10 rounded-lg '>

                <img src={img} alt="" />
                <h3 className='mt-8 mb-2 font-bold text-2xl '>{title}</h3>
                <p className='text-gray-500 font-bold'>{subtitle}</p>
                <div className='flex gap-5  md:gap-5 items-center mt-4 mb-3'>
                    <button className='btn bg-white text-violet-500  rounded-lg'>Remote</button>
                    <button className='btn bg-white text-violet-500  rounded'>Full Time</button>
                </div>
                <div className='grid grid-cols-2 justify-between mt-1'>
                    <p className='text-gray-500 font-bold'>{location}</p>
                    <p className='text-gray-500 font-bold'>{salary}</p>
                </div>
                <button className=" mt-7 mtinline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-bold font-mono uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">View Details</button>


            </div>


        </div>
    );
};

export default MainSingleJob;