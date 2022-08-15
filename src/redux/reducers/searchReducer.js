let initialState = {
    searchedResult: [],
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return {
                ...state,
                searchedResult: action.payload.filter(item =>
                    item?.category?.find(items => items.toLowerCase() === action.filteredItem.toLowerCase()),
                ),
            };
        case 'SET_SEARCH':
            return {
                ...state,
                searchedResult: action.payload.filter(item => {
                    if (item?.title?.toLowerCase().includes(action.searchedItem.toLowerCase())) return true;
                    if (item?.fullName?.toLowerCase().includes(action.searchedItem.toLowerCase())) return true;
                    if (item?.category?.find(items => items.toLowerCase() === action.searchedItem.toLowerCase())) return true;
                }),
            };

        default:
            return (state.searchedResult = action.payload);
    }
};

export default searchReducer;
