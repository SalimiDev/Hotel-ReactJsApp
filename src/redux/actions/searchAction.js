//Search Action
export const searchAction = (allData, searchedItem) => {
    return { type: 'SET_SEARCH', payload: allData, searchedItem: searchedItem };
};
export const filterAction = (allData, filteredItem) => {
    return { type: 'SET_FILTER', payload: allData, filteredItem: filteredItem };
};


