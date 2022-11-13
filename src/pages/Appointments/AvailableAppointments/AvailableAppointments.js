import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentOption from './AppointmentOption';
import BookingModal from '../BookingModal/BookingModal';
const AvailableAppointments = ({selected}) => {
    const [appointments,SetAppointment] = useState([])
    const [treatment, setTreatment] = useState(null)
    useEffect( ()=>{
        fetch('appointmentOptions.json ')
        .then(res => res.json())
        .then(data => SetAppointment(data))
    },[])
    return (
        <div className='my-10'>
            {
                selected ?
                <h3 className='text-[#19D3AE] text-xl text-center'>Available Appointments on {format(selected, 'PP')}</h3>
                :
                <h3 className='text-[#19D3AE] text-xl text-center'>Please select a date</h3>
            }
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-6'>
                {
                    appointments.map(appointment => <AppointmentOption key={appointment._id} appointment={appointment} setTreatment={setTreatment}/>)
                }
            </div>
            {
                treatment &&
                <BookingModal treatment={treatment} setTreatment={setTreatment} selected={selected}/>
            }
        </div>
    );
};

export default AvailableAppointments;