import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore} from 'redux';

function reducer(state, action) {
    if(action.type === 'ChangeState'){
        return action.payload.newState
    }
    else{
        return 'State';
    }
}
const Store = createStore(reducer);
console.log(Store.getState());

const action ={
    type:'ChangeState',
    payload:{
        newState:'yeni state'
    }
};

const action2 ={
    type:'ChangeState',
    payload:{
        newState:'state 2'
    }
};

Store.subscribe(()=>{
    console.log('store updated:', Store.getState());
});

Store.dispatch(action);
Store.dispatch(action2);


ReactDOM.render(<App />, document.getElementById('root'));

