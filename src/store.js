import {
    createStore,
    compose,
    applyMiddleware
} from 'redux';

import createSagaMiddleware from 'redux-saga';

import mySaga from './sagas/sagas';

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

const User = [{
    name: "Guest",
    email: ""
}];

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const InterestedIn = [];
const LikeableStories = [];

const defaultState = {
    User,
    InterestedIn,
    LikeableStories
};

const store = createStore(rootReducer, defaultState, compose(applyMiddleware(sagaMiddleware)));
console.log('Store Created**************');

// then run the saga
sagaMiddleware.run(mySaga);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
