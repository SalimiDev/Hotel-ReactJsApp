import React from 'react';
import styles from '../styles/pages/Home.module.scss'
//Components
import Slider from '../components/Slider';
import AvailabilityForm from '../components/AvailabilityForm';
import RoomsAndRates from '../components/RoomsAndRates';
import AboutUsSection from '../components/AboutUsSection';
import OurBest from '../components/OurBest';
import CustomerSlider from '../components/CustomerSlider';
import EventAndDeal from '../components/EventAndDeal';
import News from '../components/News';
import Gallery from '../components/Gallery';
const Home = () => {
    return (
        <div>
            <Slider />
            <AvailabilityForm />
            <RoomsAndRates />
            <AboutUsSection />
            <OurBest />
            <CustomerSlider />
            <div className={styles.eventAndNews_container}>
                <EventAndDeal />
                <News />
            </div>
            <Gallery />
        </div>
    );
};

export default Home;
