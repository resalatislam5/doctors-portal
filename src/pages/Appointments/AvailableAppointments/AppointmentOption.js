import React from 'react';

const AppointmentOption = ({appointment,setTreatment}) => {
    const {name,slots} = appointment;
    return (
        <div className="card w-[425px] bg-base-100 shadow-xl">
            <div className="card-body text-center px-28 py-10">
                <h2 className="font-semibold text-xl text-[#19D3AE]">{name}</h2>
                <p>{ slots.length > 0 ? slots[0] : 'Try Another Day' }</p>
                <p>{slots.length} { slots.length > 1 ? 'Spaces' : 'space'} available</p>
                <label onClick={() => setTreatment(appointment)} disabled={slots.length === 0 }  htmlFor="booking-modal" className="btn  bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] border-0">Book Appointment</label>
            </div>
        </div>
    );
};

export default AppointmentOption;