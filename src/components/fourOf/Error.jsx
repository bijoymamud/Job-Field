import React from 'react';

const Error = () => {
    return (
        <div className=' flex flex-col items-center text-center  mt-36'>
            <div className='mb-8'>
                <img src="../../../public/All Images/error.png" alt="" />
            </div>

            <div>
                <h1 className='text-7xl font-mono font-extrabold'>404</h1>
                <h3 className='text-3xl font-bold text-gray-500'>Looks Like you have made a little bit mistake. <br />
                    Please fixed it first.
                </h3>
            </div>
        </div>
    );
};

export default Error;