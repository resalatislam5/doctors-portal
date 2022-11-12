import React from 'react';

const ServiceInfo = ({service}) => {
    const {image,name,des} = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h2 className="font-semibold text-xl">{name}</h2>
                <p>{des}</p>
            </div>
        </div>
    );
};

export default ServiceInfo;