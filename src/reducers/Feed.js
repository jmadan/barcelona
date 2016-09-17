function Feed(state = [], action) {
    switch (action.type) {
    case 'FETCHED_USER_FEED_SUCCESS':
    	return state.concat(action.payload);
    default:
        return state;
    }
}

export default Feed;
