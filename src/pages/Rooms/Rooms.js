import React from 'react';
import Room from './Room';
import { roomsData } from '../../data/roomsData';
import { useParams } from 'react-router-dom';
import { styledList, StyledContainer_1 } from './RoomStyled';

const Rooms = () => {
    const { roomId } = useParams();
    const roomNumber = Number(roomId?.slice(-1));
    //default style
    let StyledContainer = StyledContainer_1;
    //handle to select and change rooms UI style
    styledList.map((style, index) => (index + 1 === roomNumber ? (StyledContainer = style) : ''));

    return (
        <StyledContainer className='rooms'>
            <div className='banner'>
                <h2>ROOMS & RATES</h2>
                <p>Lorem Ipsum is simply dummy text</p>
            </div>
            <div className='rooms-wrapper'>
                {roomsData.map((room, index) => (
                    <Room data={room} key={index} />
                ))}
            </div>
        </StyledContainer>
    );
};

export default Rooms;
