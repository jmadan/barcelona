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

//dislike a story

//save a story

//retweet a story

//
