import React from 'react';
import { Helmet } from 'react-helmet';

const ContactUs = () => {
    return (
        <div>
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
            
            <div className='w-11/12 mx-auto mt-40 md:mt-10 animate__animated animate__fadeInDown'>
                <h2 className='text-center text-6xl font-bold mt-10'>Contact Us</h2>
                <div className='flex justify-center items-center mt-10'>
                <textarea className="textarea textarea-bordered w-11/12 h-96" placeholder="Write your message...."></textarea>
                </div>
                <div className='w-11/12 mx-auto flex justify-center items-center mt-5'>
                <button className='btn btn-success text-white w-full'>Submit</button>
                </div>
                
            </div>
        </div>
    );
};

export default ContactUs;