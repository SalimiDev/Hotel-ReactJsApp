import React, { useReducer } from 'react';

const initializeState = {
    searched: '',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
};

const SearchReducer = () => {
    const [state, dispatch] = useReducer(reducer, initializeState);

    return (
        <div>
            <>
                Count: {state.count}
                <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
                <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            </>
        </div>
    );
};

export default SearchReducer;
