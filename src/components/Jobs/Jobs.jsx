import React, { useEffect, useState } from 'react';
import MainJob from '../MainJob/MainJob';
import SingleJob from '../SingleJob/SingleJob';

const Jobs = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {

        fetch('/FakeCatagory.json')
            .then(res => res.json())
            .then(data => setJobs(data))

    }, [])
    return (
        <div>
            <div className='text-center mt-10 md:mt-32 '>
                <h3 className='text-5xl font-bold mb-4'>Job Category List</h3>
                <p className='text-gray-500 font-bold px-1'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className=' mt-5 grid grid-cols-1 m-10 mx-3 md:grid-cols-4 md:gap-10 md:mx-36 md:mb-22 md:mt-16 '>
                {
                    jobs.map(job => <SingleJob
                        key={job.id}
                        job={job}

                    ></SingleJob>)
                }
            </div>


            <MainJob></MainJob>

        </div>

    );
};

export default Jobs;