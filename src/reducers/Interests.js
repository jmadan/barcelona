const initialState = {
    interests: []
}

function interests(state = [], action) {
    console.log(state, action);
    switch (action.type) {
    case 'ADD_INTEREST':
        console.log('ADD_INTEREST');
        return state;
    default:
        return state;
    }
    return state;
};

export default interests;
