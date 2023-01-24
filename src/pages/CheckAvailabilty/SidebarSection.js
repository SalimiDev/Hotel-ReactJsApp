import React from 'react';
import styled from 'styled-components';

import { ArrowForwardIos, Bed } from '@mui/icons-material';

import dateDiffInDays from '../../helpers/dateDiffInDays';
import { splitDate } from '../../helpers/splitDate';

import { useSearchParams } from 'react-router-dom';
import { roomsData } from '../../data/roomsData';

const SidebarSection = () => {
    const [urlParams, setUrlParams] = useSearchParams();
    let params = Object.fromEntries([...urlParams]);
    let { check_in, check_out, adults, children, room_id } = params;

    //get selected room by customers
    const bookedRoom = roomsData?.filter(item => item.id === Number(room_id))[0] || [];
    const { title, price } = bookedRoom;

    //calculate nights of stay
    const stayNight = dateDiffInDays(new Date(check_in), new Date(check_out));

    //calculate total price
    const totalPrice = stayNight * price;

    return (
        <>
            <SidebarWrapper>
                {room_id ? (
                    <Reservation>
                        <DateContainer>
                            <div className='check_wrapper'>
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
                            </div>

                            <ArrowIcon />

                            <div className='check_wrapper'>
                                <span className='date-title'>check in</span>
                                <div className='checkOut-date'>
                                    <span className='date_day'>{splitDate(check_out).day || splitDate(check_in).day}</span>
                                    <div className='date-wrapper'>
                                        <span className='date_week'>
                                            {splitDate(check_out).week || splitDate(check_in).week}
                                        </span>
                                        <span className='date_year'>
                                            {splitDate(check_out).month || splitDate(check_in).month}
                                            {splitDate(check_out).year || splitDate(check_in).month}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </DateContainer>

                        <RoomDetails className='room_details'>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Room</td>
                                        <td>{title}</td>
                                    </tr>

                                    <tr>
                                        <td>Stay</td>
                                        <td>{`${stayNight} nights, ${adults} adult,  ${children} childs `}</td>
                                    </tr>

                                    <tr>
                                        <td>
                                            Price <small> {`(${stayNight} nights x ${1} room )`}</small>
                                        </td>
                                        <td>{`$${totalPrice}`}</td>
                                    </tr>
                                </tbody>
                            </table>

                            <a className='remove_link' href='/' onClick={() => setUrlParams({ ...params, room_id: '' })}>
                                Remove
                            </a>
                        </RoomDetails>

                        <TotalsSection>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Subtotal</td>
                                        <td>${totalPrice}</td>
                                    </tr>

                                    <tr>
                                        <td>Total</td>
                                        <td>${totalPrice}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </TotalsSection>
                    </Reservation>
                ) : (
                    <ReservationEmpty>
                        <CustomBedIcon />
                        <p>No rooms selected</p>
                    </ReservationEmpty>
                )}
            </SidebarWrapper>
            {room_id && <CheckOutButton>check out</CheckOutButton>}
        </>
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

const CustomBedIcon = styled(Bed)`
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
    font-size: 15px;
    border-bottom: solid 1px #dae1e7;

    @media (min-width: 1200px) {
        flex-direction: row;
        padding: 0.3em;
    }

    .check_wrapper {
        width: 100%;

        margin-left: 15px;

        @media (min-width: 1200px) {
            flex-direction: column;
        }
    }

    .date-title {
        text-transform: uppercase;
        @media (min-width: 1200px) {
            flex-direction: column;
            font-size: 0.75em;
            color: #6c757d;
        }
    }

    .checkIn-date,
    .checkOut-date {
        width: inherit;
        display: flex;
        align-items: space-between;

        @media (min-width: 1200px) {
            justify-content: space-between;
            align-items: center;
        }

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
const ArrowIcon = styled(ArrowForwardIos)`
    margin: 10px;
`;

const RoomDetails = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    font: 15px 'Hind';
    padding: 1em;
    border-bottom: solid 1px #dae1e7;

    table {
        width: 100%;
    }

    tr {
        display: flex;
        justify-content: space-between;
        line-height: 2rem;
    }

    .remove_link {
        width: 20%;
        margin-top: 10px;
        color: #e7c130;
        text-decoration: none;

        &:hover {
            color: black;
            text-decoration: underline;
        }
    }
`;

const TotalsSection = styled(RoomDetails)`
    background-color: #f7f7f7;
    tr {
        font-weight: 600;
    }
`;

const CheckOutButton = styled.button`
    position: relative;
    min-width: 120px;
    padding: 12px 20px;
    margin: 15px 0;
    font: 12px 'Montserrat';
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    font-weight: 400;
    color: #fff;
    background-color: #e7c130;
    border: none;
    transition: all 0.1s ease;
    cursor: pointer;

    &:hover {
        background-color: #e6cb62;
        color: #fff;
    }
`;
