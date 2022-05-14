import React from 'react';
//Components
import Slider from '../components/Slider';
import AvailabilityForm from '../components/AvailabilityForm';
import RoomsAndRates from '../components/RoomsAndRates';
import AboutUsSection from '../components/AboutUsSection';
const Home = () => {
    return (
        <div>
            <Slider />
            <AvailabilityForm />
            <RoomsAndRates />
            <AboutUsSection />
        </div>
    );
};

export default Home;
