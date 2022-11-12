import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import visit from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Landing = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -mt-5 gap-6'>
            <div className="py-12 px-8 flex  bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] gap-6 rounded-2xl">
                <div>
                    <img src={clock} alt="" />
                </div>
                <div>
                    <h3 className='text-xl font-bold text-white'>Opening Hours</h3>
                    <p className='text-white'>Lorem Ipsum is simply dummy text of <br /> the pri</p>
                </div>
            </div>
            <div className="py-12 px-8 flex  bg-[#3A4256] gap-6 rounded-2xl">
                <div>
                    <img src={visit} alt="" />
                </div>
                <div>
                    <h3 className='text-xl font-bold text-white'>Visit our location</h3>
                    <p className='text-white'>Brooklyn, NY 10036, United States</p>
                </div>
            </div>
            <div className="py-12 px-8 flex  bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] gap-6 rounded-2xl">
                <div>
                    <img src={phone} alt="" />
                </div>
                <div>
                    <h3 className='text-xl font-bold text-white'>Contact us now</h3>
                    <p className='text-white'>+000 123 456789</p>
                </div>
            </div>
        </div>
    );
};

export default Landing;