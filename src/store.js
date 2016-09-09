import {
    createStore,
    compose
} from 'redux';

import {
    syncHistoryWithStore
} from 'react-router-redux';

import {
    browserHistory
} from 'react-router';

import rootReducer from './reducers/RootReducer';

const interests = ['Arts', 'Lifestyle', 'Business', 'People', 'Sports', 'Music',
    'Movies', 'IOT', 'Software Development', 'Automation', 'Testing', 'Politics',
    'NodeJs', 'C#', 'Rust', 'Golang', 'Big Data', 'Artificial Intelligence', 'Travel',
    'Backpacking', 'Start-ups', 'Enterpreneurship', 'Enterprise', 'Sciences'
];

const User = {
    name: "Guest",
    email: ""
};

const InterestedIn = [];
const LikeableStories = [];

const Feed = [{
    "storyId": "12127761",
    "title": "Office Chat, Task Management, Video Chat Without Integrating Across Platforms",
    "url": "https://blog.hibox.co/business-chat-is-dead-we-fixed-it-introducing-hibox-87fb5dbb4840#.eti0qmx01",
    "storyType": "story",
    "score": 1,
    "category": ["Productivity", "Remote Working", "Startup", "Tech", "Future Of Work"]
}, {
    "storyId": "12127198",
    "title": "Uber faces UK court battle with drivers over employment status",
    "url": "https://www.theguardian.com/technology/2016/jul/19/uber-drivers-court-tribunal-self-employed-uk-employment-law",
    "storyType": "story",
    "score": 3,
    "category": ["Productivity", "Remote Working", "Startup", "Tech", "Future Of Work"]
}];


const defaultState = {
    Feed,
    User,
    InterestedIn,
    LikeableStories
};

const store = createStore(rootReducer, defaultState);
console.log('Store Created**************');

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
