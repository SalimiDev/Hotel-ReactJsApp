import React from 'react';
import styled from 'styled-components';

import BedIcon from '@mui/icons-material/Bed';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { useSearchParams } from 'react-router-dom';
import { splitDate } from '../../helpers/splitDate';

const SidebarSection = () => {
    const [searchParams] = useSearchParams();
    let { check_in, check_out } = Object.fromEntries([...searchParams]);

    return (
        <SidebarWrapper>
            {/* <ReservationEmpty>
                <CustomBedIcon />
                <p>No rooms selected</p>
            </ReservationEmpty> */}

            <Reservation>
                <DateContainer>
                    <span className='date-title'>check in</span>
                    <div className='checkIn-date'>
                        <span className='date_day'>{splitDate(check_in).day}</span>
                        <div className='date-wrapper'>
                            <span className='date_week'>{splitDate(check_in).week}</span>
                            <span className='date_year'>
                                {splitDate(check_in).month} {splitDate(check_in).year}
                            </span>
                        </div>
                    </div>

                    <ArrowIcon />

                    <span className='date-title'>check in</span>
                    <div className='checkOut-date'>
                        <span className='date_day'>{splitDate(check_out).day || splitDate(check_in).day}</span>
                        <div className='date-wrapper'>
                            <span className='date_week'>{splitDate(check_out).week || splitDate(check_in).week}</span>
                            <span className='date_year'>
                                {splitDate(check_out).month || splitDate(check_in).month}
                                {splitDate(check_out).year || splitDate(check_in).month}
                            </span>
                        </div>
                    </div>
                    
                </DateContainer>
            </Reservation>
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

const Reservation = styled(ReservationEmpty)`
    padding: 0;
`;

const DateContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1em;
    border-bottom: solid 1px #dae1e7;

    .date-title {
        text-transform: uppercase;
    }

    .checkIn-date,
    .checkOut-date {
        width: inherit;
        display: flex;
        align-items: center;
        .date-wrapper {
            width: 80%;
            display: flex;
            flex-direction: column;
            text-align: center;
        }
        .date_day {
            width: 10%;
            font-size: 45px;
        }
    }
`;
const ArrowIcon = styled(ArrowForwardIosIcon)`
    margin: 10px;
`;
