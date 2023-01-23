import React from 'react';
import { Link } from 'react-router-dom';
import banner from "../../assets/img/slider-img.jpg"
const Home = () => {
    return (
        <div className='relative'>
          <div className='absolute w-full h-full left-0  bg-gradient-to-t from-cyan-500 to-blue-500 opacity-90'></div>
          <div className='absolute top-[40%] md:left-[10%]'>
          <p className='font-bold text-white text-4xl mb-3'>Buy Fresh Food & Vagitable from Our</p>
          <p className='text-lg w-[70%] font-medium text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non molestiae dolorum repellat nostrum laboriosam, in, animi tenetur et vel laborum rerum. </p>
          <Link to="/product" className='btn btn-primary mt-4'>Buy Now</Link>
          </div>
          <img alt="banner" className='h-[80vh] w-full' src={banner} />  
        </div>
    );
};

export default Home;