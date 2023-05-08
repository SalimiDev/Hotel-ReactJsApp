import React from 'react';
import { useParams } from 'react-router-dom';

const RoomDetail = () => {
    const { id } = useParams();
    console.log(id)

    return <div>Room Detail {id}</div>;
};

export default RoomDetail;
