let initialState = {
    availableRooms: [],
};

const checkAvailabilityReducer = (state = initialState, action) => {
    switch (action.type) {
        case 0:
            return { availableRooms: action.payload };

        case true:
            return {
                ...state,
                availableRooms: action.payload?.filter(room => room.capacity.adult >= action.maxValue),
            };

        default:
            return false;
    }
};

export default checkAvailabilityReducer;
