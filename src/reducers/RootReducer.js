import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import Feed from './Feed';
import User from './User';
import LikeableStories from './LikeableStories';
import InterestedIn from './InterestedIn';

const rootReducer = combineReducers({ Feed, User, LikeableStories, InterestedIn, routing: routerReducer });

export default rootReducer;
