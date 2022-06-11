import React from 'react';
import Room from './Room';
import { roomsData } from '../../data/roomsData';
import { RoomsContainer } from './RoomStyled';

const Rooms = () => {
    return (
        <RoomsContainer className='rooms'>
            <div className='banner'>
                <h2>ROOMS & RATES</h2>
                <p>Lorem Ipsum is simply dummy text</p>
            </div>
            <div className='rooms-wrapper'>
                {roomsData.map((room, index) => (
                    <Room data={room} key={index} />
                ))}
            </div>
        </RoomsContainer>
    );
};

export default Rooms;
