import React from 'react';
import { format } from 'date-fns';
const BookingModal = ({treatment,selected,setTreatment}) => {
    const {name,slots} = treatment;
    const date = format(selected, 'PP')
    const handleBooking = e =>{
        e.preventDefault()
        const form = e.target;
        const slot = form.slot.value;
        const pName = form.pname.value;
        const email = form.email.value;
        const number = form.number.value;
        const booking ={
            appointmentDate : date,
            treatment : name,
            pName,
            email,
            number,
            slot
        }
        console.log(booking)
        setTreatment(null)
    }
    return (
        <>
        <input type="checkbox" id="booking-modal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box relative">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold mb-3 ml-7">{name}</h3>
                <form onSubmit={handleBooking} className='flex flex-col w-96 mx-auto gap-6 mt-10'>
                    <input type="email" value={date} disabled name='name' className="input input-bordered w-full" />
                    <select name="slot" className="select select-bordered w-full">
                        {
                            slots.map((slot, i) =><option key={i} value={slot}>{slot}</option>)
                        }
                    </select>
                        <input type="text" placeholder="Name" name='pname' className="input input-bordered w-full"  required/>
                        <input type="number" placeholder="Number" name='number' className="input input-bordered w-full"  required/>
                        <input type="email" placeholder="Email Address" name='email' className="input input-bordered w-full"  required/>
                        <input className="btn  bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] border-0" type="submit" value="Submit" />
                </form>
            </div>
        </div>
        </>
    );
};

export default BookingModal;