import React, { useEffect, useState } from 'react';
//components
import RoomCard from './RoomCard';

import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { checkAvailabilityAction } from '../../redux/actions/checkAvailabilityAction';
import { roomsData } from '../../data/roomsData';

const RoomsResultsSection = () => {
    const [searchParams] = useSearchParams();
    let roomFilter = Object.fromEntries([...searchParams]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkAvailabilityAction(roomsData, roomFilter));
    }, [searchParams]);

    const availableRooms = useSelector(state => state?.checkAvailabilityReducer.availableRooms);

    
    return (
        <div>
            {availableRooms?.map(result => (
                <div key={result.id}>
                    <RoomCard availableRoom={result} />
                </div>
            ))}
        </div>
    );
};

export default RoomsResultsSection;
