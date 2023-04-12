import React, { useEffect, useState } from 'react';
import MainSingleJob from '../MainSingleJob/MainSingleJob';

const MainJob = () => {
    const [mainJobs, setMainJobs] = useState([]);


    const [jsonData, setJsonData] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [displayCount, setDisplayCount] = useState(4);
    useEffect(() => {

        fetch("FakeJobs.json")
            .then(res => res.json())
            .then(data => setJsonData(data))
    }, [])

    const handleSeeMore = () => {
        setShowAll(true);
        setDisplayCount(jsonData.length);
    }




    return (
        <div >
            <div className='text-center mb-8 '>
                <div>
                    <h3 className='text-5xl font-bold md:mt-36 mb-4'>Featured Jobs</h3>
                    <p className='text-gray-500 font-bold p-1'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='sm:grid grid-cols-2  md:gap-10 mx-3  md:mx-36 mt-8 '>

                    {jsonData.slice(0, displayCount).map(mainJob => <MainSingleJob
                        key={mainJob.id}
                        mainJob={mainJob}

                    ></MainSingleJob>)
                    }
                </div>
            </div>


            <div className='text-center mt-10 mb-36 font'>

                {!showAll && (
                    <button onClick={handleSeeMore} className='btn-primary'>See More</button>
                )}
            </div>


        </div >
    );
};

export default MainJob;