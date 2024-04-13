import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { DiGithubBadge } from "react-icons/di";
import useAuth from '../hooks/useAuth';

const SocialLogin = () => {

    const {googleLogin, githubLogin} = useAuth();

    return (
        <div>
            <button onClick={()=>googleLogin()} className='btn flex gap-8 w-11/12 mx-auto border-2 rounded-lg  items-center justify-center'>

        <p className='text-black'>Login with</p>
        <FcGoogle size={30}/>
        </button>

        <button onClick={()=>githubLogin()} className='mt-3 btn flex gap-8 w-11/12 mx-auto border-2 rounded-lg items-center justify-center '>
        <p className='text-black'>Login with</p>
        <DiGithubBadge size={35}/>
        </button>
        </div>
    );
};

export default SocialLogin;