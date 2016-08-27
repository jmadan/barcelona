function user(state = [], action) {
    console.log(state, action);
    switch (action.type) {
    case 'ADD_INTEREST':
        console.log('ADD_INTEREST');
        return {...state, selectedInterests: state.selectedInterests.concat(action.topic) };
    default:
        return state;
    }
};

export default user;
