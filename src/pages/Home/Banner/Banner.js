import React from 'react';
import chair from '../../../assets/images/chair.png'
import './Banner.css'
const Banner = () => {
    return (
        <div className='home-banner mt-2 p-5 lg:p-0'>
            <div className="grid md:grid-cols-2 grid-cols-1  lg:items-center lg:h-full flex-row-reverse">
            <div>
                <h1 className="text-5xl font-bold text-[#3A4256]">Your New Smile Starts <br /> Here</h1>
                <p className="py-6 text-[#3A4256]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                <button className="btn  bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] border-0">Get Start</button>
            </div>
            <div className='mt-16 lg:mt-0'>
            <img className='lg:w-[594px] w-[374px]  h-[240px] lg:h-[360px] rounded-lg' src={chair} alt="" />
            </div>
        </div>
        </div>
    );
};

export default Banner;