import { faCircleDollarToSlot, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const MainSingleJob = ({ mainJob }) => {
    const { id, btn, img, title, subtitle, location, salary } = mainJob
    return (
        <div>
            <div className='text-start mb-5 border bg-white md:shadow-lg p-5 md:p-10 rounded-lg '>

                <img src={img} alt="" />
                <h3 className='mt-8 mb-2 font-bold text-2xl '>{title}</h3>
                <p className='text-gray-500 font-bold'>{subtitle}</p>
                <div className='flex gap-5  md:gap-5 items-center mt-4 mb-3'>
                    <button className='btn-outlined'>{btn}</button>
                    <button className='btn-outlined'>Full Time</button>
                </div>
                <div className='grid grid-cols-2 justify-between mt-1 mb-2 md:mb-5'>
                    <p className='text-gray-500 font-bold'>
                        <FontAwesomeIcon className='me-2' icon={faLocationDot} />
                        {location}</p>
                    <p className='text-gray-500 font-bold'>
                        <FontAwesomeIcon className='me-2' icon={faCircleDollarToSlot} />
                        {salary}</p>
                </div>
                <Link to={`/jobDetails/${id}`} className=" btn-primary">View Details</Link>



            </div>


        </div>
    );
};

export default MainSingleJob;