import React from 'react';

const SingleJob = ({ job }) => {


    const { id, img, title, note } = job;
    return (
        <div className='bg-indigo-100 p-10 rounded-lg  '>
            <img className=' rounded-lg bg-indigo-200 text-2xl h-16 w-16 py-3 px-3 ' src={img} alt="" />
            <h3 className='font-bold text-2xl mt-8 mb-2'>{title}</h3>
            <p><small className='text-gray-500'>{note}</small></p>
        </div>
    );
};

export default SingleJob;