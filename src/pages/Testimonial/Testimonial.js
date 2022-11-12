import React from 'react';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import quote from '../../assets/icons/quote.svg'
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
    const testimonialInfo = [
        {
            id: "1",
            image: people1,
            name: 'Winson Herry',
            nameTitle: 'California',
            des : 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            id: "2",
            image: people2,
            name: 'Winson Herry',
            nameTitle: 'California',
            des : 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            id: "3",
            image: people3,
            name: 'Winson Herry',
            nameTitle: 'California',
            des : 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        }
    ]
    return (
        <section className='mt-32'>
            <div className='flex justify-between'>
                <div>
                    <p className='text-[#19D3AE] text-xl font-bold'>Testimonial</p>
                    <h3 className='text-[#3A4256] text-4xl '>What Our Patients Says</h3>
                </div>
                <div>
                    <img className='w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-6'>
                {
                    testimonialInfo.map(testimonial => <TestimonialCard key={testimonial.id} testimonialInfo={testimonial} />)
                }
            </div>
        </section>
    );
};

export default Testimonial;