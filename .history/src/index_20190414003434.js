import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'redux';
import {Store} from 'redux';

ReactDOM.render(
    <Provider store={store}>
        <App></Provider>