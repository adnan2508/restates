import React from 'react';
import Banner from '../components/Banner';
import 'animate.css';


const Home = () => {
    return (
        <div className='w-11/12 mx-auto mt-20 md:mt-10 animate__animated animate__fadeInDown'>
            <Banner/>
        </div>
    );
};

export default Home;