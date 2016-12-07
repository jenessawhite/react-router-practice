import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router';
import App from './App';
import HomePage from './Home';
import AboutPage from './AboutPage';
import StoresList from './StoresList';
import ErrorPage from './App';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage}/>
      <Route path="about" component={AboutPage} />
      <Route path="stores" component={StoresList} />
    </Route>
    <Route path="*" component={ErrorPage}></Route>
  </Router>
  ,
  document.getElementById('root')
);
