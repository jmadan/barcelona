function LikeableStories(state = [], action) {
    switch (action.type) {
    case 'LIKE_THIS':
        return [...state, action.storyId];
    default:
        return state;
    }
}

export default LikeableStories;
