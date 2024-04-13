import React from 'react';
import { Link } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import SocialLogin from '../components/SocialLogin';


const Login = () => {
  const {signInUser} = useAuth();

  const { register,handleSubmit,formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const {email, password} = data;

    signInUser(email, password)
    .then(result => {
      console.log(result.user);
    })
    .catch(error => {
      console.log(error);
    })
  };
    return (
        <div>
            <div className="w-11/12 mx-auto mt-10 min-h-screen bg-base-200 rounded-3xl animate__animated animate__jello">
  <div className="flex flex-col gap-10 items-center justify-center p-8">
    <div className="text-center mt-12 lg:text-left">
      <h1 className="text-5xl font-bold">Login Now!</h1>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" {...register("email", { required: true })} />
          {errors.email && <span className="text-red-600">This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" {...register("password", { required: true })}/>
          {errors.password && <span className="text-red-600">This field is required</span>}
          <label className="label">
            <p  className="label-text-alt text-sm">Don't have an account? <Link  to='/register' className='text-blue-700 font-semibold'>Register</Link></p>
          </label>
        </div>
        
       

        <div className="form-control mt-6">
          <button className="btn btn-primary text-white">Login</button>
        </div>
      </form>
      <div className='mb-5'>
      <SocialLogin/>
      </div>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;