import React from 'react';
import Room from './Room';
import { roomsData } from '../../data/roomsData';
import { useParams } from 'react-router-dom';
import { TopBanner, styledContainer } from './RoomStyled';

const Rooms = () => {
    const { roomId } = useParams();
    //Get the number of room
    const roomNumber = Number(roomId?.slice(-1));
    //Get styles for selected room
    const RoomsContainer = styledContainer(roomNumber);

    return (
        <>
            <TopBanner>
                <h2>ROOMS & RATES</h2>
                <p>Lorem Ipsum is simply dummy text</p>
            </TopBanner>
            <RoomsContainer>
                {roomsData.map((room, index) => (
                    <div className='room-wrapper'>
                        <Room data={room} roomNumber={roomNumber} key={index} />
                    </div>
                ))}
            </RoomsContainer>
        </>
    );
};

export default Rooms;
