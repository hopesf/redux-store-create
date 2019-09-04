import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore} from "redux";

function reducer() {
    return('test reducer fonksiyonu');
}

const store = createStore(reducer);
console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));

