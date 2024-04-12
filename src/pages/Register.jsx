import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='w-11/12 mx-auto mt-10'>

            <div className="hero min-h-screen bg-base-200 rounded-3xl">
  <div className="hero-content flex-col">
    <div className="text-center mb-5 mt-8 lg:text-left">
      <h1 className="text-5xl font-bold">Create Account</h1>
    </div>
    <div className="card w-full shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Photo URL" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <p  className="label-text-alt text-sm">Already have an account? <Link  to='/login' className='text-blue-700 font-semibold'>Login</Link></p>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Create Account</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;