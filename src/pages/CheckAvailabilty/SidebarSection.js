import React from 'react';
import styled from 'styled-components';
import BedIcon from '@mui/icons-material/Bed';

const SidebarSection = () => {
    return (
        <SidebarWrapper>
            <ReservationEmpty>
                <CustomBedIcon />
                <p>No rooms selected</p>
            </ReservationEmpty>
        </SidebarWrapper>
    );
};

export default SidebarSection;

const SidebarWrapper = styled.section`
    border: solid 1px #dae1e7;
    border-radius: 1px;
    margin-bottom: 1px;
    box-shadow: 0 3px 3px rgb(0 0 0 / 10%), 0 0 0 0.5px rgb(0 0 0 / 5%);
`;

const ReservationEmpty = styled.div`
    width: 100%;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
        padding: 0;
        margin: 0;
    }
`;

const CustomBedIcon = styled(BedIcon)`
    color: #6c757d;
    opacity: 0.8;
    width: 30px;
`;
