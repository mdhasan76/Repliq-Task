import React from 'react';
import banner from "../../assets/img/slider-img.jpg"
const Home = () => {
    return (
        <div className='relative'>
          <div className='absolute w-full h-full left-0  bg-gradient-to-t from-cyan-500 to-blue-500 opacity-80'></div>
          <img alt="banner" className='h-[80vh] w-full' src={banner} />  
        </div>
    );
};

export default Home;