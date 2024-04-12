import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} loop={true} className='mySwiper rounded-3xl'>

                <SwiperSlide>
                    <img src="https://i.ibb.co/tKPW4G4/webaliser-TPTXZd9m-Oo-unsplash.jpg" alt="" className='rounded-3xl w-full h-screen'/>
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.ibb.co/6H0cv62/vita-vilcina-Kt-Oid0-FLjq-U-unsplash.jpg" alt="" className='rounded-3xl w-full h-screen'/>            
                </SwiperSlide>

                <SwiperSlide>
                    <img src="https://i.ibb.co/z8F2rys/digital-marketing-agency-ntwrk-g39p1k-Djv-SY-unsplash.jpg" alt="" className='rounded-3xl w-full h-screen'/>       </SwiperSlide>
                    
            </Swiper>
        </div>
    );
};

export default Banner;