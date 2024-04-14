import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
  const {logout, user} = useAuth();
  console.log(user);
    return (
        <div>
            <div className="navbar bg-base-100 w-11/12 mx-auto animate__animated animate__fadeInLeft">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      
      {
        user?
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/updateProfile'>Update Profile</Link></li>
        <li><Link to='/userProfile'>User Profile</Link></li>
      </ul>
      :
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      </ul>
      }
      
    </div>
    <a className="btn btn-ghost text-4xl">ReStates</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    {
      user?
      <div>
      <ul className="menu menu-horizontal px-1">
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/about'>About</Link></li>
    <li><Link to='/updateProfile'>Update Profile</Link></li>
    <li><Link to='/userProfile'>User Profile</Link></li>
    </ul>
      </div>
      :
      <ul className="menu menu-horizontal px-1">
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/about'>About</Link></li>
    </ul>
    }
  </div>

  <div className="navbar-end">
  {
    user? 
    <>
    <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
    <div tabIndex={0} role="button" className="avatar online btn btn-ghost btn-circle mr-8">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img alt="User Image" src={user.photoURL} />
        </div>
      </div>
    </div>
    <button onClick={logout} className="btn btn-error text-white px-8">Signout</button>
    </> 
    :
    <Link to='/login' className="btn btn-success text-white px-8">Login</Link>
    
    }

  </div>
    
  </div>
</div>

    );
};

export default Navbar;