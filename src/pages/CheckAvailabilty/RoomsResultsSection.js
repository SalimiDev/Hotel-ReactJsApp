import React, { useEffect } from 'react';
//components
import RoomCard from './RoomCard';

import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { checkAvailabilityAction } from '../../redux/actions/checkAvailabilityAction';
import { roomsData } from '../../data/roomsData';

const RoomsResultsSection = () => {
    const [searchParams] = useSearchParams();
    let roomFilter = Object.fromEntries([...searchParams]);
    const { sortby } = roomFilter;

    //handle filtering rooms base on customer's request
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(checkAvailabilityAction(roomsData, roomFilter));
    }, [searchParams]);

    const availableRooms = useSelector(state => state?.checkAvailabilityReducer.availableRooms);

    //sort the available rooms base on price
    const sortedAvailableRooms =
        sortby === 'cheapest'
            ? availableRooms?.sort((a, b) => a.price - b.price)
            : availableRooms?.sort((a, b) => b.price - a.price);

    return (
        <div>
            {sortedAvailableRooms?.map(result => (
                <div key={result.id}>
                    <RoomCard availableRoom={result} roomFilter={roomFilter} />
                </div>
            ))}
        </div>
    );
};

export default RoomsResultsSection;
