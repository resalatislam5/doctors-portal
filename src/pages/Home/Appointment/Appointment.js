import React from 'react';
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
const Appointment = () => {
    return (
        <div className="hero my-40 h-[533px]" style={{
            background: `url(${appointment})`
        }}>
            <div className="hero-content flex-col lg:flex-row gap-24 mx-28">
                <img src={doctor} className="rounded-lg w-[610px] h-[636px] -mt-36" alt='' />
                <div className='text-white'>
                    <p className='text-[#19D3AE] text-xl font-bold'>Appointment</p>
                <h1 className="text-4xl font-bold ">Make an appointment Today</h1>
                <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                <button className="btn  bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] border-0">Get Start</button>
                </div>
            </div>
        </div>
    );
};

export default Appointment;