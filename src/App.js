import React, { Component } from 'react';
import logo from './logo.svg';
import {Link} from 'react-router';
import axios from 'axios';
import Home from './Home';
import About from './About';
import Stores from './StoresList';
import api from './Api';
import './normalize.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul className="navigation">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/stores'}>Stores</Link></li>
          </ul>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
