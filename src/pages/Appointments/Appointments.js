import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AvailableAppointments from './AvailableAppointments/AvailableAppointments';

const Appointments = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div>
            <AppointmentBanner setSelected = {setSelected} selected= {selected}/>
            <AvailableAppointments selected={selected}/>
        </div>
    );
};

export default Appointments;