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
        <div className='text-center mb-8 '>
            <div>
                <h3 className='text-5xl font-bold mb-4'>Featured Jobs</h3>
                <p className='text-gray-500 font-bold'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-2 gap-10 mx-36 mt-8 '>
                {
                    mainJobs.map(mainJob => <MainSingleJob
                        key={mainJob.id}
                        mainJob={mainJob}
                    ></MainSingleJob>)
                }
            </div>
        </div>
    );
};

export default MainJob;