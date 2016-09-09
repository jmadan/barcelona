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
