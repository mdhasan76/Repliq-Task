import React from 'react';
import { Link } from 'react-router-dom';
import {RiDashboardFill} from "react-icons/ri"

const Header = () => {
    // const { user, logOut } = useContext(AuthContext);

    // //logOUt user 
    // const handleLogOut = () => {
    //     logOut()
    //         .then(res => {
    //             toast.success("Log out sucessFul");
    //         })
    //         .catch(err => console.log(err))
    // }
    return (
        <div className="navbar bg-white sticky top-0 z-10 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/' className='font-medium'>Home</Link></li>
                        <li><Link to='/category/1' className='font-medium'>ViVo</Link></li>
                        {/* {
                            user?.email &&
                            <li><Link to='/dashboard' className='font-medium'>Dashboard</Link></li>

                        } */}
                        <li><button  className=' btn btn-sm md:btn-md btn-primary ml-2 text-white'>Logout
                        </button></li>
                    </ul>
                </div>
                <a href="/" className="btn btn-ghost normal-case text-xl">MobilLy</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/' className='font-medium'>Home</Link></li>
                    <li><Link to='/cart' className='font-medium'>Cart</Link></li>
                    {/* {
                        user?.email &&
                        <li><Link to='/dashboard' className='font-medium'>Dashboard</Link></li>

                    } */}
                </ul>
            </div>
            <div className="navbar-end">

                <label htmlFor="dashboard-drawer" className=" items-center flex mr-2 font-medium lg:hidden"> <RiDashboardFill className='text-lg font-bold' /></label>
                {/* {
                    user?.email ? <>
                        <div className='tooltip tooltip-bottom' data-tip={user.displayName}>
                            <img src={user?.photoURL} className='h-10 w-10 tooltip  rounded-full' alt="img" />
                        </div>
                        <button onClick={handleLogOut} className='hidden sm:inline-block btn btn-sm md:btn-md btn-primary ml-2 text-white'>Logout
                        </button></>
                        :
                        <Link to='/login' className='btn btn-primary text-white'>Login</Link>} */}
                        <button className='hidden sm:inline-block btn btn-sm md:btn-md btn-primary ml-2 text-white'>Login
                        </button>
            </div>
        </div>
    );
};

export default Header;