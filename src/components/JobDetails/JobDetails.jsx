
import { useParams } from 'react-router-dom';
import details from '../../../public/FakeJobs.json';


const JobDetails = () => {
    const { id } = useParams();
    console.log(id);

    const info = details.find((detail) => detail.id == id)
    console.log(info);

    return (
        <div>
            <h3 className='text-center'>JOb Details</h3>

            <div className='md:grid grid-cols-2  gap-10 md:p-24'>
                <div className='mt-5'>
                    <div className='mb-5'>
                        <h3><span className=' font-extrabold mb-5 '>Job Description:</span><span className='text-slate-500 font-medium'> {info.job_description}</span></h3>
                    </div>
                    <div className='mb-5'>
                        <h3><span className=' font-extrabold mb-5 '>Job Responsibility:</span><span className='text-slate-500 font-medium'> {info.job_responsibility}</span></h3>
                    </div>

                    <div className='mb-5'>
                        <h3><span className=' font-extrabold mb-5 '>Educational Requirements:</span><span className='text-slate-500 font-medium'> {info.educational_requirements}</span></h3>
                    </div>

                    <div className='mb-5'>
                        <h3><span className=' font-extrabold mb-5 ' >Experiences:</span> <span className='text-slate-500 font-medium'>{info.experience}</span></h3>
                    </div>
                </div>

                <div className=' bg-amber-500'>
                    <h3>Nothing but everything</h3>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;