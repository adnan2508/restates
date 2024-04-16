import React, { useState } from "react";
import { Helmet } from "react-helmet";
import useAuth from "../hooks/useAuth";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

const UpdateProfile = () => {
  const { updateUserProfile } = useAuth();
  const [loading, setLoading] = useState(true);
  
  console.log();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photoURL.value;
    console.log(name, photoURL, email);

    updateProfile(auth.currentUser, {
        displayName: name, photoURL: photoURL
      }).then(() => {
        // Profile updated!
        // ...
      });
  };


  return (
    <div>
      <Helmet>
        <title>Update Profile</title>
      </Helmet>

      <div className="w-11/12 mx-auto">
        <h2 className="text-center text-5xl font-bold mt-10">Update Profile</h2>

        <form onSubmit={handleSubmit}>
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            className="input input-bordered w-full flex justify-center"
          />

          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="Photo URL"
            name="photoURL"
            className="input input-bordered w-full mx-auto"
          />

          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            className="input input-bordered w-full mx-auto"
          />
          <div className="form-control mt-6">
            <button className="btn btn-primary text-white">Save Account</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
