import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import {reducer} from "./reducers/reducer"
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

if (localStorage.getItem('contacts') === null)
    localStorage.setItem('contacts', JSON.stringify([]))
let initialState = {
    currentIndex: -1,
    contacts: JSON.parse(localStorage.getItem('contacts'))
}

const store = createStore(reducer,initialState)
ReactDOM.render(
  <Provider store = {store} >
    <Router><App/></Router>
  </Provider>
  ,
  document.getElementById('root')
);
