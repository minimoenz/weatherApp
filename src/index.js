import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './style.css';

import { Provider } from 'react-redux';
import './actions/action';
import { store } from './store/store';

ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>,document.getElementById('root')
);