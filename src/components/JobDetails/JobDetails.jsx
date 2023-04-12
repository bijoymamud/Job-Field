
import { faCalendar, faCircleDollarToSlot, faEnvelope, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import details from '../../../public/FakeJobs.json';
import { addToDb } from '../../utilities/fakedb';


const JobDetails = () => {
    const { id } = useParams();
    console.log(id);


    const [ids, setIds] = useState([]);
    // console.log(ids);


    const handleAddId = (newId) => {
        if (ids.includes(newId)) {
            alert("ID already exists in the array!");


            return;
        }
        const newJob = [...ids, newId]
        setIds(newJob);
        addToDb(newId);
    }

    const info = details.find((detail) => detail.id == id)


    return (
        <div >
            <h3 className='text-center md:text-5xl font-bold md:mt-14'>Job Details</h3>

            <div className='md:grid grid-cols-2 p-2   gap-10 md:p-24 '>
                <div className='mt-12'>
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

                <div className=' md:h-14   md:p-4 md:px-10 rounded-md'>
                    <div className='bg-amber-500 p-3 md:p-10 rounded-md'>
                        <h3 className='text-2xl font-bold mb-5 '>Job Details</h3>
                        <hr />
                        <h3 className='font-bold mt-3'>
                            <FontAwesomeIcon className='me-2' icon={faCircleDollarToSlot} />
                            Salary: <span className='text-slate-500 '>{info?.salary} (per month)</span></h3>

                        <h3 className='font-bold mt-3 mb-3'>
                            <FontAwesomeIcon className='me-2' icon={faCalendar} />
                            Jon Title: <span className='text-slate-500 '>{info?.title}</span></h3>


                        <h3 className='font-bold mt-8 mb-3 text-2xl'>Contact Information</h3>
                        <hr />
                        <h3 className='font-bold mt-3 mb-3'>
                            <FontAwesomeIcon className='me-2' icon={faPhone} />
                            Phone : <span className='text-slate-500 ' >{info?.phone}</span></h3>
                        <h3 className='font-bold mt-3 mb-3'>
                            <FontAwesomeIcon className='me-2' icon={faEnvelope} />
                            Email: <span className='text-slate-500 '>{info?.email}</span> </h3>

                        <h3 className='font-bold mt-3 mb-3'>
                            <FontAwesomeIcon className='me-2' icon={faLocation} />
                            Address : <span className='text-slate-500 '>{info?.location}</span></h3>
                    </div>
                    <button onClick={() => handleAddId(id)} className='btn-primary mt-4 w-full'>Apply Now</button>
                </div>
            </div>


        </div>
    );
};

export default JobDetails;
