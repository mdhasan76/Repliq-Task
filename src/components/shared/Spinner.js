import React from 'react';

const Spinner = () => {
    return (
        <div className='h-screen grid place-content-center'>
            <div class="items-center justify-center rounded-full w-14 h-14 bg-gradient-to-tr from-indigo-500 to-pink-500 animate-bounce">
                <div class="h-9 w-9 rounded-full bg-gray-200"></div>
            </div>
        </div>
    );
};

export default Spinner;