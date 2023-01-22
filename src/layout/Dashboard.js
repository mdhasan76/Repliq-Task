import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../components/shared/Header';

const Dashboard = () => {
    return (
        <section className='max-w-[1400px] mx-auto'>

            {/* Dashboard Header  */}
            <Header />

            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">

                    {/* Dashboard Rout Outlet Here*/}
                    <Outlet />

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to="/dashboard/customers">Customer</Link></li>
                        <li><Link to="/dashboard/orders">Order</Link></li>
                        <li><Link to="/dashboard/products">Products</Link></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;