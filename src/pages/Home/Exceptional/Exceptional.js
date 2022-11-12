import React from 'react';
import treatment from '../../../assets/images/treatment.png'
const Exceptional = () => {
    return (
        <div className="hero my-40 mx-52">
            <div className="hero-content flex-col lg:flex-row gap-24">
                <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                <h1 className="text-5xl font-bold text-[#3A4256]">Exceptional Dental <br /> Care, on Your Terms</h1>
                <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                <button className="btn  bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] border-0">Get Start</button>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;