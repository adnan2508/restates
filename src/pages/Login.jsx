import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import SocialLogin from "../components/SocialLogin";
import { Helmet } from "react-helmet";

const Login = () => {
  const [loginError, setLoginError] = useState('');
  const [success, setSuccess] = useState('');
  const { signInUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;

    signInUser(email, password).then((result) => {
      if (result.user) {
        setSuccess('User Logged in successfully!')
        navigate(from);
      }
    })
    .catch(error => {
      setLoginError("Oops! Invalid Email or Password");
    })
    ;
  };
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>

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
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-600">This field is required</span>
                )}
                <label className="label">
                  <p className="label-text-alt text-sm">
                    Don't have an account?{" "}
                    <Link
                      to="/register"
                      className="text-blue-700 font-semibold">
                      Register
                    </Link>
                  </p>
                </label>
              </div>

              <div className="form-control mt-3 mb-1">
                <button className="btn btn-primary text-white">Login</button>
              </div>
            </form>
            <div className="mb-2">
            {
                loginError && <div className="flex justify-center items-center mb-2 mt-1">
                <p className="text-red-700 text-lg font-medium text-center">{loginError}</p>
              </div>
              }
              {
                success && <div className="flex justify-center items-center mb-2">
                  <p className="text-green-700 text-lg font-medium text-center">{success}</p>
                </div>
              }
            </div>
            <div className="mb-5">
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
