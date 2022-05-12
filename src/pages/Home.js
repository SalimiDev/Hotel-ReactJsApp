import React from 'react';
//Components
import Slider from '../components/Slider';
import AvailabilityForm from '../components/AvailabilityForm';
import RoomsAndRates from '../components/RoomsAndRates';
const Home = () => {
    return (
        <div>
            <Slider />
            <AvailabilityForm />
            <RoomsAndRates />
        </div>
    );
};

export default Home;
