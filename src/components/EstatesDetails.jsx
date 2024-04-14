import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const EstatesDetails = () => {
    const estates = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const estate = estates.find(estate => estate.id === idInt);
    console.log(estate);
    return (
        <div>
            <div className='w-11/12 mx-auto mt-10'>
                <img src={estate.image} alt="" className='w-full rounded-3xl h-screen'/>
            <h1>This is the details page of {estate.title}</h1>
            </div>
            
        </div>
    );
};

export default EstatesDetails;