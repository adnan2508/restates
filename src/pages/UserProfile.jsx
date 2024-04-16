import React from 'react';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const UserProfile = () => {
    const {user} = useAuth();
    console.log(user);
    return (
        <div>
            <Helmet>
                <title>User Profile</title>
            </Helmet>
            
            <div className='animate__animated animate__fadeInDown'>
            <div className='w-11/12 mx-auto mt-20 lg:mt-10'>
            <h2 className='text-center text-5xl font-bold mb-10'>User Profile</h2>
            <div className="avatar flex justify-center items-center">
  <div className="w-36 rounded-full">
    <img src={user.photoURL} />
  </div>
</div>

<div className='flex flex-col justify-start items-center mt-10'>
<p className='text-lg font-medium'>User Name: {user.displayName}</p>
<p className='text-lg font-medium'>User Email: {user.email}</p>
<p className='text-lg font-medium'>User Photo: {user.photoURL}</p>
</div>

<div className='text-center mt-28'>
    <Link to='/'>
    <button className='btn btn-primary text-white'>Go to Home</button>
    </Link>
</div>
    </div>
        </div>
        </div>
    );
};

export default UserProfile;