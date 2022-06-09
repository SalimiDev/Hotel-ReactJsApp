import React from 'react';
import Room from './Room';
import styled from 'styled-components';
import { roomsData } from '../../data/roomsData';
import roomsCover from '../../assets/images/rooms-cover.jpg';

const Rooms = () => {
    return (
        <RoomsContainer className='rooms'>
            <div className='banner'>
                <h2>ROOMS & RATES</h2>
                <p>Lorem Ipsum is simply dummy text</p>
            </div>
            {roomsData.map((room, index) => (
                <Room data={room} key={index} />
            ))}
        </RoomsContainer>
    );
};

export default Rooms;

//**********Styles***********
const RoomsContainer = styled.div`
    & .banner {
        position: relative;
        top: -84px;
        width: 100%;
        height: 342px;
        display: flex;
        margin-bottom: -45px;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-top: 100px;
        background-image: url(${roomsCover});
        object-fit: contain;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        overflow: hidden;
        & h2 {
            color: white;
            font: 700 36px 'Montserrat';
        }
        & p {
            color: white;
            font: 16px 'Hind';
        }
    }
`;
