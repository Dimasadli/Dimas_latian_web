import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './container/Home/Home'
/// Hal Pertama Kalo mau pake react-redux
import { createStore } from 'redux'
import { Provider } from 'react-redux';

const initState = {
  totalOrder: 1
}

/// Reducer
const rootReducer = (state = initState, action) => {
  if (action.type === 'PLUS_ORDER') {
    return {
      ...state,
      totalOrder: state.totalOrder + 1
    }
  }
  if (action.type === 'MINUS_ORDER') {
    if (state.totalOrder > 0) {
      return {
        ...state,
        totalOrder: state.totalOrder - 1
      }
    }
  }
  return state
}
/// Store
const storeBuatan = createStore(rootReducer);


ReactDOM.render(
  <Provider store={storeBuatan}>
    <Home />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


