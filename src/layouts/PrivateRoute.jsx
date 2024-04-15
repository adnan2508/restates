import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useAuth();
    const location = useLocation();
    
    if(loading) {
       return <div className='w-11/12 mx-auto flex justify-center items-center mt-10 '><span className="loading loading-spinner loading-lg"></span></div> 
    }

    if(!user) {
        return <Navigate to='/login' state={location?.pathname || '/'}/> 
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;