import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, hashHistory } from 'react-router';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}/>
    <Route path='/login' component={LoginPage}/>
    <Route path='/register' component={RegistrationPage}/>
  </Router>,
  document.getElementById('root')
);
