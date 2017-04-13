import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, Route, browserHistory} from 'react-router';
import Secret from './components/secret';
import authHOC from './components/authHOC';
import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
		<Route path='/' component={App}>
			<Route path='/secret' component={authHOC(Secret)} />
		</Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
