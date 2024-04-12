import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { DiGithubBadge } from "react-icons/di";


const Login = () => {
    return (
        <div>
            <div className="w-11/12 mx-auto mt-10  min-h-screen bg-base-200 rounded-3xl">
  <div className="flex flex-col gap-10 items-center justify-center">
    <div className="text-center mt-12 lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <p  className="label-text-alt text-sm">Don't have an account? <Link  to='/register' className='text-blue-700 font-semibold'>Register</Link></p>
          </label>
        </div>
        
        <div className='flex border-2 rounded-lg p-2 items-center justify-center'>
        <p>Login with</p>
        <FcGoogle size={30}/>
        </div>
        <div className='flex border-2 rounded-lg p-2 items-center justify-center'>
        <p>Login with</p>
        <DiGithubBadge size={35}/>
        </div>
        
         

        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;