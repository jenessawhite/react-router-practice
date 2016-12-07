import React, { Component } from 'react';
import logo from './logo.svg';
import {Link} from 'react-router';
import axios from 'axios';
import HomePage from './Home';
import AboutPage from './About';
import StoresList from './storesList';
import api from './Api';
import './normalize.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <ul>
            <li><Link to='/Home'>Home</Link></li>
            <li><Link to='/About'>Home</Link></li>
            <li><Link to='/StoresList'>Home</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
