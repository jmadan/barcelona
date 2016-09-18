import _ from 'lodash';

const INITIAL_STATE = {};

function Feed(state = INITIAL_STATE, action) {
    switch (action.type) {
    case 'FETCHED_USER_FEED_SUCCESS':
    	const newFeed = _.mapKeys(action.payload, 'storyId');
    	return { ...state, ...newFeed };
    default:
        return {...state};
    }
}

export default Feed;
