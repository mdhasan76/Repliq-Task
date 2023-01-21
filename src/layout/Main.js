import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/shared/Header';

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Main;