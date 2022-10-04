import React from 'react';
//components
import RoomsResultsSection from './RoomsResultsSection';
import SidebarSection from './SidebarSection';
import { ContentWrapper } from './CheckAvailibility.styles';

const AvailabilityContent = () => {
    return (
        <ContentWrapper>
            <aside className='sidebar-content'>
                <SidebarSection />
            </aside>
            <main className='main-content'>
                <RoomsResultsSection />
            </main>
        </ContentWrapper>
    );
};

export default AvailabilityContent;
