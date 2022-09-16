import React from 'react';
//components
import RoomsResultsSection from './RoomsResultsSection';
import {ContentWrapper} from './CheckAvailibility.styles';

const AvailabilityContent = () => {
    return (
        <ContentWrapper>
            <aside className='sidebar-content'>Side bar component</aside>
            <main className='main-content'>
                <RoomsResultsSection />
            </main>
        </ContentWrapper>
    );
};

export default AvailabilityContent;
