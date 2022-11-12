import React from 'react';

const TestimonialCard = ({testimonialInfo}) => {
    const {name,nameTitle,image,des} = testimonialInfo;
    return (
        <div className='w-96 p-8 shadow-xl rounded-lg'>
            <div>
                <p>{des}</p>
            </div>
            <div className='mt-9 flex items-center gap-3'>
                <div>
                    <img className='w-20' src={image} alt="" />
                </div>
                <div>
                    <p className='text-[#3A4256] font-bold text-xl'>{name}</p>
                    <span>{nameTitle}</span>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;