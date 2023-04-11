import React, { useEffect, useState } from 'react';
import MainSingleJob from '../MainSingleJob/MainSingleJob';

const MainJob = () => {
    const [mainJobs, setMainJobs] = useState([])

    useEffect(() => {

        fetch("FakeJobs.json")
            .then(res => res.json())
            .then(data => setMainJobs(data))
    }, [])

    return (
        <div >
            <div className='text-center mb-8 '>
                <div>
                    <h3 className='text-5xl font-bold mb-4'>Featured Jobs</h3>
                    <p className='text-gray-500 font-bold p-1'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='md:grid grid-cols-2 md:gap-10 mx-4 md:mx-36 mt-8 '>
                    {
                        mainJobs.map(mainJob => <MainSingleJob
                            key={mainJob.id}
                            mainJob={mainJob}
                        ></MainSingleJob>)
                    }
                </div>
            </div>
            <div className='text-center mt-10 mb-36 font'>
                <button className=' rounded-lg bg-gradient-to-r from-indigo-500 via-purple-600 p-3'>See More</button>
            </div>
        </div>
    );
};

export default MainJob;