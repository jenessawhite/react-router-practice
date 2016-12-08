import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import axios from 'axios';
import api from './Api';
import StorePin from './StorePin';
import './normalize.css';
import './App.css';

export default class Store extends Component {
  constructor(props) {
    super(props)
    this.state = {
      OneStore: {}
    }
  }
  componentDidMount() {
    this.getOneStore()
  }
  getOneStore() {
    axios.get(api() + '/stores/' + this.props.params.id).then((response) => {
      let OneStore = response.data;
      console.log(OneStore);
      this.setState({
        OneStore,
        lat: OneStore.lat,
        lng: OneStore.lng
      });
    })
  }
 render() {
   return (
     <div>
       <div className="storeInformation">
         <ul className="StoreList">
           <li className="address">
             {this.state.OneStore.name}
           </li>
           <li className="address">
             {this.state.OneStore.address}
             <br />
             {this.state.OneStore.city}, {this.state.OneStore.state}
           </li>
           <li className="hours">
             {this.state.OneStore.hours}
           </li>
         </ul>
       </div>
       <div className="map" style={{height:400, width: 400}}>
         <GoogleMap center={{lat: this.state.OneStore.lat, lng: this.state.OneStore.lng}} defaultZoom={12}>
           <StorePin lat={this.state.lat} lng={this.state.lng} />
          </GoogleMap>
       </div>
    </div>
   );
  }
}
