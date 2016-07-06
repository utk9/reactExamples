import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';


import BugList from './bugList';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={BugList} />
	</Router>,
    document.getElementById('content')
);