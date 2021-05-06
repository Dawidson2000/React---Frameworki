import React from 'react';
import ReactDOM from 'react-dom';
import {Reset} from 'styled-reset';
import MainPage from './components/MainPage/MainPage';
import store from './store'
import { Provider } from 'react-redux'


ReactDOM.render(
  <Provider store={store}>
    <Reset/>
    <MainPage/>
  </Provider>,
  document.getElementById('root')
);
