
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import details from '../../../public/FakeJobs.json';
import { addToDb } from '../../utilities/fakedb';


const JobDetails = () => {
    const { id } = useParams();
    console.log(id);


    const [ids, setIds] = useState([]);
    console.log(ids);

    const handleAddId = (newId) => {
        addToDb(newId);
    }

    const info = details.find((detail) => detail.id == id)


    return (
        <div>
            <h3 className='text-center'>JOb Details</h3>

            <div className='md:grid grid-cols-2 p-2  gap-10 md:p-24'>
                <div className='mt-5'>
                    <div className='mb-5'>
                        <h3><span className=' font-extrabold mb-5 '>Job Description:</span><span className='text-slate-500 font-medium'> {info?.job_description}</span></h3>
                    </div>
                    <div className='mb-5'>
                        <h3><span className=' font-extrabold mb-5 '>Job Responsibility:</span><span className='text-slate-500 font-medium'> {info?.job_responsibility}</span></h3>
                    </div>

                    <div className='mb-5'>
                        <h3><span className=' font-extrabold mb-5 '>Educational Requirements:</span><span className='text-slate-500 font-medium'> {info?.educational_requirements}</span></h3>
                    </div>

                    <div className='mb-5'>
                        <h3><span className=' font-extrabold mb-5 ' >Experiences:</span> <span className='text-slate-500 font-medium'>{info?.experience}</span></h3>
                    </div>
                </div>

                <div className='  p-2 md:p-4 md:px-10 rounded-md'>
                    <div className='bg-amber-500 p-10'>
                        <h3>Job Details</h3>
                        <hr />
                        <h3>Salary: {info?.salary}</h3>
                        <h3>Jon Title: {info?.title}</h3>
                        <hr />
                        <h3>Contact Information</h3>
                        <hr />
                        <h3>Phone :{info?.phone}</h3>
                        <h3>Email:{info?.email} </h3>
                        <h3>Address : {info?.location}</h3>
                    </div>
                    <button onClick={() => handleAddId(id)} className='btn-primary mt-4'>Apply Now</button>
                </div>
            </div>


        </div>
    );
};

export default JobDetails;
