import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk';
import {composeWithDevTools, compositeWithDevTools} from 'redux-devtools-extension'
import  UsersReducer from './stores/reducers/Users';
import AuthReducer from './stores/reducers/Auth'
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware , compose} from 'redux';




let rootReducer = combineReducers({
  users : UsersReducer ,
  auth : AuthReducer 
})

let store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))
export default store;

console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




// let rootReducer = combineReducers({
//   users : UsersReducer 
// })

// let store = createStore(rootReducer,applyMiddleware(thunk))
// // console.log(store.getState())

// export default store;

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );