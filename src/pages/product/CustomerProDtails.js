import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CustomerProDtails = () => {
    const data = useLoaderData();
    
    return (
        <div className='mt-20'>
            {data.details}
        </div>
    );
};

export default CustomerProDtails;