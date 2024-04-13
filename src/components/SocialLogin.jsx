import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { DiGithubBadge } from "react-icons/di";
import useAuth from '../hooks/useAuth';

const SocialLogin = () => {

    const {googleLogin} = useAuth();

    return (
        <div>
            <button onClick={()=>googleLogin()} className='btn flex gap-8 w-full border-2 rounded-lg p-2 items-center justify-center'>

        <p className='text-black'>Login with</p>
        <FcGoogle size={30}/>
        </button>

        <button className='mt-3 btn flex gap-8 w-full border-2 rounded-lg p-2 items-center justify-between '>
        <p className='text-black'>Login with</p>
        <DiGithubBadge size={35}/>
        </button>
        </div>
    );
};

export default SocialLogin;