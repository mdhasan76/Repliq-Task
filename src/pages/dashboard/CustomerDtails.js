import React from 'react';
import { FaUser } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const CustomerDtails = () => {
    const data = useLoaderData();
    return (
        <section className='mt-20 mx-auto grid place-content-center'>
            <div className=" card w-96 bg-base-100 shadow-xl">
            <figure className='py-5'>
                {/* <img src="https://placeimg.com/400/225/arch" alt="Shoes" /> */}
                <FaUser className='text-6xl mx-auto' />
            </figure>
            <div className="card-body text-center">
                <h2 className="font-bold">
                    {data.name}
                </h2>
                <p>{data.email}</p>
            </div>
        </div>
        </section>
    );
};

export default CustomerDtails;