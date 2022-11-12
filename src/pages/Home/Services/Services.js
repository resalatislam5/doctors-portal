import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import teeth from '../../../assets/images/whitening.png'
import ServiceInfo from './ServiceInfo';
const Services = () => {
    const serviceInfo = [
        {
            id: "1",
            image: fluoride,
            name: 'Fluoride Treatment',
            des : 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: "2",
            image: cavity,
            name: 'Cavity Filling',
            des : 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: "3",
            image: teeth,
            name: 'Teeth Whitening',
            des : 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        }
    ]
    return (
        <div className='mt-32'>
            <div className='text-center'>
                <p className='text-[#19D3AE] text-xl font-bold'>OUR SERVICES</p>
                <h3 className='text-[#3A4256] text-4xl '>Services We Provide</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-6'>
                {
                    serviceInfo.map(service => <ServiceInfo key={service.id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;