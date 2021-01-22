import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import PatternView from './components/PatternView';

ReactDOM.render(
  <Router>
    <Route exact path="/">
      <App />
    </Route>
    <Route exact path="/patterns/:id">
      <PatternView />
    </Route>
    <Route exact path="/patterns/new">
      <PatternForm />
    </Route>
    <Route exact path="/login">
      <Login />
    </Route>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
