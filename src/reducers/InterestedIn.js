function InterestedIn(state = [], action) {
    console.log(state, action);
    switch (action.type) {
    case 'ADD_INTEREST':
        return [...state, action.topic];
    default:
        return state;
    }
}

export default InterestedIn;
