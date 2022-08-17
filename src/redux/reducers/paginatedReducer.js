let initialState = {
    dataPerPage: [],
};

const paginatedReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PAGINATED_DATA':
            return { ...state, dataPerPage: action.payload };
        default:
            return state;
    }
};

export default paginatedReducer;
