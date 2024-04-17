import React from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData, useParams } from "react-router-dom";

const EstatesDetails = () => {
  const estates = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const estate = estates.find((estate) => estate.id === idInt);
  return (
    <div>
      <Helmet>
        <title>{estate.title}</title>
      </Helmet>
      <div className="w-11/12 mx-auto mt-40 md:mt-10 animate__animated animate__fadeInDown">
        <div className="card grid grid-cols-1 lg:grid-cols-2 bg-base-100 shadow-xl">
          <figure>
            <img src={estate.image} alt="estate" className="h-full lg:h-[730px] w-full rounded-3xl"/>
          </figure>

          <div className="card-body flex-1">
            <h2 className="text-4xl lg:text-6xl font-bold">{estate.title}</h2>
            <div className="border-b-2 p-3"></div>
            <p className="text-xl text-green-500 font-bold mt-3">{estate.status}</p>
            <p className="mt-3 text-lg font-semibold">Price: {estate.price}</p>
            <p></p>
            <p className="mt-3 text-lg">{estate.description}</p>
            <p className="text-2xl font-semibold mt-3">Facilities :</p>
            <p className="text-lg">
                {estate.facilities.map(facility=><li>{facility}</li>)}
            </p>
            <p className="text-2xl font-semibold mt-3">Area : {estate.area}</p>
            <p className="text-2xl font-semibold mt-3">Type : {estate.segment_name}</p>
            <p className="text-2xl font-semibold mt-3">Location : {estate.location}</p>

            <div className="card-actions justify-end">
              <Link to="/">
                <button className="btn btn-warning text-white px-10">
                  Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstatesDetails;
