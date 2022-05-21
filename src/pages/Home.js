import React from 'react';
//Components
import Slider from '../components/Slider';
import AvailabilityForm from '../components/AvailabilityForm';
import RoomsAndRates from '../components/RoomsAndRates';
import AboutUsSection from '../components/AboutUsSection';
import OurBest from '../components/OurBest';
import CustomerSlider from '../components/CustomerSlider';
import EventAndDeal from '../components/EventAndDeal';
const Home = () => {
    return (
        <div>
            <Slider />
            <AvailabilityForm />
            <RoomsAndRates />
            <AboutUsSection />
            <OurBest />
            <CustomerSlider />
            <EventAndDeal />
        </div>
    );
};

export default Home;
