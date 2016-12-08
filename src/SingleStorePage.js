import React, { Component } from 'react';
import { withGoogleMap } from "react-google-maps";
import axios from 'axios';
import api from './Api';
import './normalize.css';
import './App.css';

export default class Store extends Component {
  constructor(props) {
    super(props)
    this.state = {
      storePicked: {}
    }
  }
  componentDidMount() {
    this.getStore()
  }
  getStore() {
    axios.get(api() + '/stores/').then((response) => {
      let storePicked = response.data;
      this.setState({storePicked});
    })
  }
 render() {
   return (
     <div className="OneStore">
       This is where one store would be
     </div>
   );
  }
}
