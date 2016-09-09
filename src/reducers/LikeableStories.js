function LikeableStories(state = [], action) {
    console.log(state, action);
    switch (action.type) {
    case 'LIKE_A_STORY':
        return [...state, action.storyId];
    default:
        return state;
    }
}

export default LikeableStories;
