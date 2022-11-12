import React from 'react';
import Testimonial from '../../Testimonial/Testimonial';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Exceptional from '../Exceptional/Exceptional';
import Landing from '../Landing/Landing';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Landing />
            <Services />
            <Exceptional />
            <Appointment />
            <Testimonial />
        </div>
    );
};

export default Home;