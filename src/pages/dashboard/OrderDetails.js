import React from 'react';
import { useLoaderData } from 'react-router-dom';

const OrderDetails = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div className='mt-20'>
            <div className="card p-5 md:card-side bg-base-100 shadow-xl mx-auto">
                <figure><img src={data.img} className="h-56" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Order by:{data.name}</h2>
                    <h2 className="card-title">email: {data.email}</h2>
                    <p className='text-lg'>Product Name: {data.productName}</p>
                    <p className='text-lg font-medium'>Price: {data.price}</p>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;