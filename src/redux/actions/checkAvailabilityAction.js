//Check Availability room action
export const checkAvailabilityAction = (roomData, roomFilter) => {
    const adults = Number(roomFilter?.adults);
    const children = Number(roomFilter?.children);

    const maxValue = Math.max(adults, children);
    const condition = adults + children === 0 ? 0 : roomData?.map(room => room.capacity.adult).includes(maxValue);

    return { type: condition, payload: roomData, roomFilter, maxValue };
};
