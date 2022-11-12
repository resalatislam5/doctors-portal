import React from 'react';
import appointment from '../../../assets/images/appointment.png'
const ContactFrom = () => {
    return (
        <section className="mt-40 h-[533px]" style={{
            background: `url(${appointment})`
        }}>
           <div className='text-center pt-16'>
                <p className='text-[#19D3AE] text-xl font-bold'>Contact Us</p>
                <h3 className='text-white text-4xl '>Stay connected with us</h3>
            </div>
        <form className='flex flex-col w-96 mx-auto gap-6 mt-10'>
                <input type="email" placeholder="Email Address" className="input input-bordered w-full" />
                <input type="Subject" placeholder="Type here" className="input input-bordered w-full" />
                <textarea className="textarea textarea-success" placeholder="Your message"></textarea>
                <input className="btn  bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] border-0" type="submit" value="Submit" />
        </form>
        </section>
    );
};

export default ContactFrom;