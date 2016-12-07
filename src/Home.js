import React, { Component } from 'react';
import logo from './logo.svg';
import {Link} from 'react-router';
import axios from 'axios';
import StoresList from './storesList';
import api from './Api';
import './normalize.css';
import './App.css';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      }
  }
  render() {
    return (
      <div>
        MyComponent
      </div>
    );
  }
}
