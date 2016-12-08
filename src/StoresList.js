import React, { Component } from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import api from './Api';
import './normalize.css';
import './App.css';

export default class Stores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: [],
      id: '' ,
      name: '',
      type: '',
      address: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      lat: '',
      lng: '',
      hours: '',
      }
    }
  componentDidMount() {
    this.getStores()
  }

  getStores(){
    axios.get(api() + '/stores').then((response)=> {
      let stores = response.data.data.slice(0);
      this.setState({
        stores
      })
    })
    .catch((error)=> {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="StorePageContent">
        {this.state.stores.map((store, index) => {
          return (
            <div className="storeInformation" key={store.id}>
              <ul className="StoreList">
                <Link to={'/stores/' + store.id}>{store.name}</Link>
                <li className="StoreList address">
                  {store.address}
                  <br />
                  {store.city}, {store.state}
                </li>
                <li className="StoreList hours">
                  {store.hours}
                </li>
              </ul>
            </div>
          )
        })}
      </div>

  );
  }
}
