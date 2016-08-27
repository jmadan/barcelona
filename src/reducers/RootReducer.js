import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import interests from './Interests';
import user from './User';
import newsFeed from './NewsFeed';

const rootReducer = combineReducers({ interests, user, newsFeed, routing: routerReducer });

export default rootReducer;
