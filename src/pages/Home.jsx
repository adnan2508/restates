import React from 'react';
import Banner from '../components/Banner';
import 'animate.css';
import { useLoaderData } from 'react-router-dom';
import EstatesCard from '../components/EstatesCard';


const Home = () => {
    const estates = useLoaderData();
    // console.log(estates);
    return (
        <div className='w-11/12 mx-auto mt-20 md:mt-10 animate__animated animate__fadeInDown'>
            <Banner/>

            <h2 className='mt-10 text-center text-3xl font-bold animate-animated animate__backInDown'>Estates</h2>

            <div className='grid md:grid-cols-3 gap-6'>
                {
                    estates.map(estate => <EstatesCard key={estate.id} estates={estate}></EstatesCard>)
                }
            </div>

        </div>
    );
};

export default Home;