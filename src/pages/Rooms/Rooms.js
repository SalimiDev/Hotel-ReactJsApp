import React from 'react';
import { roomsData } from '../../data/roomsData';
import Room from './Room';

const Rooms = () => {
    return (
        <div className='rooms'>
            <div className='banner'>
                <h2>ROOMS & RATES</h2>
            </div>
            {roomsData.map((room, index) => (
                <Room data={room} key={index} />
            ))}
        </div>
    );
};

export default Rooms;
