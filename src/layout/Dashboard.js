import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../components/shared/Header';

const Dashboard = () => {
    return (
        <section className='max-w-7xl mx-auto'>

            <Header />
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to="/">ALl Sellers</Link></li>
                        <li><Link to="/">Orders</Link></li>
                    </ul>

                </div>
            </div>
        </section>
    );
};

export default Dashboard;