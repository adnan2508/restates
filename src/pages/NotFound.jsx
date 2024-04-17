import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='w-11/12 mx-auto mt-20 md:mt-10 flex flex-col gap-[95px] justify-center items-center'>
            <h1 className='text-9xl font-extrabold mt-10'>404</h1>
            <p className='text-center text-9xl font-semibold'>Page not found!</p>
            <Link to='/'>
            <button className='btn btn-primary text-white'>Go to Home</button>
            </Link>
        </div>
    );
};

export default NotFound;