import React from 'react';
import chair from '../../../assets/images/chair.png'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
const AppointmentBanner = ({setSelected, selected}) => {

    let footer = <p>Please pick a day.</p>;
    if (selected) {
      footer = <p>You picked {format(selected, 'PP')}.</p>;
    }
    return (
        <section className='home-banner mt-2 p-5 lg:p-0'>
        <div className="grid md:grid-cols-2 grid-cols-1  lg:items-center lg:h-full flex-row-reverse">
            <div>
            <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
                footer={footer}
             />
            </div>
            <div className='mt-16 lg:mt-0'>
                <img className='lg:w-[594px] w-[374px]  h-[240px] lg:h-[360px] rounded-lg' src={chair} alt="" />
            </div>
        </div>
    </section>
    );
};

export default AppointmentBanner;