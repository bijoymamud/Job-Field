import { faCircleDollarToSlot, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const ShowApplyJob = ({ getJoob }) => {



    return (
        <div >
            <div className='mb-14 p-2'>
                <div className='md:flex justify-between items-center  md:mx-36 p-2 md:p-5 border rounded-md'>
                    <div className='flex items-center gap-4 '>
                        <div className='bg-slate-300 p-8 md:p-14 rounded-lg'>
                            <img className='h-24 w-24 md:h-28 md:w-36' src={getJoob?.img} alt="" />
                        </div>
                        <div>
                            <h3 className='text-2xl font-bold mb-3'>{getJoob?.title}</h3>
                            <h3 className='text-xl font-bold mb-3 text-gray-500'>{getJoob?.subtitle}</h3>
                            <button className='btn-outlined me-2 mb-2 md:me-4'>{getJoob?.btn}</button>
                            <button className='btn-outlined'>Full Time</button>

                            <div className='flex items-center gap-12 md:mt-3'>


                                <h3 className='font-bold text-gray-500 '>
                                    <FontAwesomeIcon className='me-2' icon={faLocationDot} />
                                    {getJoob?.location}</h3>


                                <h3 className='font-bold text-gray-500 '>
                                    <FontAwesomeIcon className='me-2' icon={faCircleDollarToSlot} />
                                    {getJoob?.salary}</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link to={`/jobDetails/${getJoob?.id}`} className=" btn-primary">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowApplyJob;