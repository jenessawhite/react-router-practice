import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './App';
import Home from './Home';
import About from './About';
import Stores from './StoresList';
import Store from './SingleStorePage';
import ErrorPage from './404page';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About} />
      <Route path="stores" component={Stores}>
        <Route path="stores/:id" component={Store}/>
      </Route>
    </Route>
    <Route path="*" component={ErrorPage}></Route>
  </Router>
  ,
  document.getElementById('root')
);
