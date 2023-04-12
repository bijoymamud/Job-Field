import React from 'react';
import { getShoppingCart } from '../../utilities/fakedb';

const AppliedJob = () => {

    const apply = getShoppingCart();
    console.log(apply);
    return (
        <div>
            <h3>This is applied job section</h3>
        </div>
    );
};

export default AppliedJob;