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
require('./public/css/barcelona.css');
import 'font-awesome/css/font-awesome.css';

import App from './components/connect';
import Home from './components/home';
import FeedContainer from './containers/FeedContainer';

let router = (
    <Provider store={store}>
	    <Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Home}></IndexRoute>
				<Route path="latest" component={FeedContainer}></Route>
			</Route>
		</Router>
	</Provider>
);


render(router, document.getElementById('root'));
