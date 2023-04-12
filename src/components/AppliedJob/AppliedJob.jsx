import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import ShowApplyJob from '../ShowApplyJob/ShowApplyJob';

const AppliedJob = () => {

    const apply = getShoppingCart();
    // console.log(apply);



    const [datas, setDatas] = useState([]);



    const [getJoobs, setGetJoobs] = useState([])
    const [typeData, setTypeData] = useState([]);
    useEffect(() => {

        const elements = async () => {

            let res = await fetch("../../../public/FakeJobs.json");
            let data = await res.json();
            setDatas(data);
        }
        elements();

    }, [])

    useEffect(() => {
        const showjobs = []

        for (const add in apply) {

            const showdatas = datas.find((data) => data.id == add);
            showjobs.push(showdatas);
        }
        setGetJoobs(showjobs);
        setTypeData(showjobs);


    }, [datas])



    const handleForm = (e) => {
        e.preventDefault()
        const form = e.target;
        const type = form.type.value;

        const filterData = getJoobs.filter((getJoob) =>
            getJoob.btn == type

        )
        setTypeData(filterData);
    }
    console.log(typeData);


    return (
        <div className='mt-24'>
            <h3 className='text-center text-5xl font-bold mb-14'>Applied Jobs</h3>

            <form action="" onSubmit={handleForm} className='flex items-center gap-8 justify-end md:me-40'>
                <select required name="type" className="select select-bordered select-xs w-28  ">


                    <option >onsite</option>
                    <option >Remote</option>
                </select>
                <button className='btn-primary'>Submit</button>
            </form>

            {
                typeData.map(getJoob => <ShowApplyJob


                    getJoob={getJoob}
                ></ShowApplyJob>)
            }
        </div>
    );
};

export default AppliedJob;