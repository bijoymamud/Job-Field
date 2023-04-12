import React, { useEffect, useState } from 'react';
import MainSingleJob from '../MainSingleJob/MainSingleJob';

const MainJob = () => {
    const [mainJobs, setMainJobs] = useState([]);



    useEffect(() => {

        fetch("FakeJobs.json")
            .then(res => res.json())
            .then(data => setMainJobs(data))
    }, [])




    const controlData = (limit) => {
        let limitedData;
        if (limit) {
            return limitedData = mainJobs.slice(0, limit);
        }
        else {
            return limitedData = mainJobs;
        }


    }
    console.log(controlData(4));

    const data = controlData(4)


    return (
        <div >
            <div className='text-center mb-8 '>
                <div>
                    <h3 className='text-5xl font-bold md:mt-36 mb-4'>Featured Jobs</h3>
                    <p className='text-gray-500 font-bold p-1'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='sm:grid grid-cols-2  md:gap-10 mx-3  md:mx-36 mt-8 '>
                    {
                        data.map(mainJob => <MainSingleJob
                            key={mainJob.id}
                            mainJob={mainJob}

                        ></MainSingleJob>)
                    }
                </div>
            </div>


            <div className='text-center mt-10 mb-36 font'>
                {
                    data.length <= 4 &&
                    <button button className='btn-primary'>See More</button>
                }
            </div>


        </div >
    );
};

export default MainJob;