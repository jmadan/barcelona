const initialState = {
    interests: []
}

function interests(state = [], action) {
    console.log(state, action);
    switch (action.type) {
    case 'ADD_INTEREST':
        console.log('ADD_INTEREST');
        console.log('***********state**********');

        return [...state.selectedInterests, action.topic];
    default:
        return state;
    }
};

export default interests;
