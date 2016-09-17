const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
        acc[type] = `${base}_${type}`
        return acc
    }, {});
}

// const USER = createRequestTypes('USER');
// console.log(USER);

//select a category
export function selectInterest(topic) {
    console.log(topic);
    return {
        type: 'ADD_INTEREST',
        topic
    }
}

//deSelect a category
export function deSelectInterest(topic) {
    return {
        type: 'REMOVE_INTEREST',
        topic
    }
}

//Like a story
export function likeAStory(storyId) {
    console.log("Dispathing like a story");
    return {
        type: 'LIKE_THIS',
        storyId
    }
}

//dislike a story
export function dislikeAStory(storyId) {
    return {
        type: 'DISLIKE_THIS',
        storyId
    }
}

//get feed from server

export function getFeedFromServer(userId) {
    return {
        type: 'FETCH_USER_FEED',
        userId
    }
}
