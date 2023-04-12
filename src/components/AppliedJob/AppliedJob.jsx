import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../../utilities/fakedb';
import ShowApplyJob from '../ShowApplyJob/ShowApplyJob';

const AppliedJob = () => {

    const apply = getShoppingCart();
    // console.log(apply);



    const [datas, setDatas] = useState([]);

    const [getJoobs, setGetJoobs] = useState([])
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
            // console.log(add);
            const showdatas = datas.find((data) => data.id == add);
            showjobs.push(showdatas);
        }
        setGetJoobs(showjobs);


    }, [datas])
    // console.log(getJoobs);

    // console.log(datas);
    return (
        <div>
            {
                getJoobs.map(getJoob => <ShowApplyJob


                    getJoob={getJoob}
                ></ShowApplyJob>)
            }
        </div>
    );
};

export default AppliedJob;