import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { DiGithubBadge } from "react-icons/di";
import useAuth from '../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const {googleLogin, githubLogin} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location?.state || '/'

    const handleSocialLogin = socialProvider => {
        socialProvider()
        .then(result => {
            if (result.user) {
                navigate(from);
            }
        });
    } 

    return (
        <div>
            <button onClick={()=> handleSocialLogin(googleLogin)} className='btn flex gap-8 w-11/12 mx-auto border-2 rounded-lg  items-center justify-center'>

        <p className='text-black'>Login with</p>
        <FcGoogle size={30}/>
        </button>

        <button onClick={()=>handleSocialLogin(githubLogin)} className='mt-3 btn flex gap-8 w-11/12 mx-auto border-2 rounded-lg items-center justify-center '>
        <p className='text-black'>Login with</p>
        <DiGithubBadge size={35}/>
        </button>
        </div>
    );
};

export default SocialLogin;