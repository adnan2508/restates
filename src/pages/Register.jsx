import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUserProfile } = useAuth();
  console.log(createUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Navigation system
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const onSubmit = (data) => {
    console.log(data);
    const { email, password, name, image } = data;

    // reset error
    setRegisterError('');
    setSuccess('');

    // create user and update profile
    createUser(email, password).then((result) => {
      console.log(result.user);
      setSuccess('User created successfully!');
      updateUserProfile(name, image).then(() => {
        navigate(from);
        
      });
    })
    .catch(error => {
      setRegisterError(error.message);
    });
  };

  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
     
      <div className="w-11/12 mx-auto mt-20 md:mt-10 animate__animated animate__jello">
        <div className="hero min-h-screen bg-base-200 rounded-3xl">
          <div className="hero-content flex-col">
            <div className="text-center mb-5 mt-10 lg:text-left">
              <h1 className="text-5xl font-bold">Create Account</h1>
            </div>
            <div className="card w-full shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="input input-bordered"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-red-600">Full Name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-600">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Photo URL"
                    className="input input-bordered"
                    {...register("image")}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      className="input input-bordered w-full"
                      {...register("password", {
                        required: true,
                        pattern: {
                          value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                          message:
                            "Password must be at least 6 characters long and contain at least one uppercase letter and one lowercase letter.",
                        },
                      })}
                    />{" "}
                    <span
                      className="absolute top-4 right-4"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                    {errors.password && (
                      <span className="text-red-600">
                        {errors.password.message}
                      </span>
                    )}
                  </div>

                  <label className="label">
                    <p className="label-text-alt text-sm">
                      Already have an account?{" "}
                      <Link to="/login" className="text-blue-700 font-semibold">
                        Login
                      </Link>
                    </p>
                  </label>
                </div>
               <div className="flex gap-2">
               <input 
               type="checkbox" 
               name="terms" 
               id="terms" 
               {...register("terms", { required: true })}/>
                <label htmlFor="terms">Accept our Terms and Conditions</label>
               </div>
               {errors.terms && (
                    <span className="text-red-600 text-center">Please Accept our Terms And Conditions</span>
                  )}
                <div className="form-control mt-4">
                  <button className="btn btn-primary text-white">
                    Create Account
                  </button>
                </div>
              </form>
              {
                registerError && <div className="flex justify-center items-center mb-2">
                <p className="text-red-700 text-lg font-medium text-center">{registerError}</p>
              </div>
              }
              {
                success && <div className="flex justify-center items-center mb-2">
                  <p className="text-green-700 text-lg font-medium text-center">{success}</p>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
