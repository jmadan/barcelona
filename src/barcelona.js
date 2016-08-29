import React from 'react';
import { render } from 'react-dom';
import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router';

import { Provider } from 'react-redux';

import store, { history } from './store';

require('./public/css/bootstrap.css');

import App from './components/connect';
import Home from './components/home';
import SignIn from './components/signin';
import InterestGrid from './components/InterestGrid';
import User from './components/User/User';
import NewsFeed from './components/News/NewsFeed';

let router = (
    <Provider store={store}>
	    <Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Home}></IndexRoute>
				<Route path="/interest" component={InterestGrid}></Route>
				<Route path="/feed" component={NewsFeed}></Route>
				<Route path="/signin" component={SignIn}></Route>
			</Route>
		</Router>
	</Provider>
);


render(router, document.getElementById('root'));
