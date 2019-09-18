import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {combineReducers, createStore} from 'redux';

function userReducer(state = '', action) {
    return state;
}

function postsReducer(state = [], action) {
    return state;
}

const rootReducer= combineReducers({
    user:userReducer,
    posts:postsReducer
});

const Store = createStore(rootReducer);
console.log(Store.getState());


ReactDOM.render(<App />, document.getElementById('root'));

