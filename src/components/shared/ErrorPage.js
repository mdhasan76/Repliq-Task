import React from 'react';
import { Link } from 'react-router-dom';
import {FaRegSadTear} from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='text-center'>
              <div >
              <FaRegSadTear className='mx-auto text-6xl text-teal-700' />
              </div>
                <p className='text-4xl font-semibold my-3'>Opss! page Not found</p>
                <Link to='/' className='btn btn-primary mt-3 text-white'>Back to Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;